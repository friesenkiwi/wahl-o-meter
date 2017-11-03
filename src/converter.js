"use strict";

// Setup module
var exports = module.exports = {};

var fs = require('fs');
var vm = require('vm');

const JSON_FILENAME = "../data/export.json";

exports.dump_json = function(data, part) {
  let toDump = data;
  if (part == "parties") {
    toDump = [];
    for (var normalizedPartyName in mergedData.partyOccurences.perParty) {
      toDump.push({
        "name": normalizedPartyName,
        "wikidata": ""
      });
    }
  }

  fs.writeFile(JSON_FILENAME, JSON.stringify(toDump, null, 2), 'utf8', function(err) {
    if (err) {
      return console.log(err);
    }

    console.log("The file was saved!");
  });
}

exports.load_data_by_occasionfile = function(occasionFile, finalFunction) {
  var usedFinalFunction = undefined;
  var usedFinalSourceFunction = undefined;

  var loadedData = {
    raw: [],
    additional: []
  };
  fs.readFile(occasionFile, 'utf-8', function(err, response) {
    if (err) console.log("Error loading occasions from disk\n" + err);

    var occasions = JSON.parse(response);
    for (var i = 0; i < occasions.length; i++) {
      if (i == occasions.length - 1) {
        usedFinalFunction = finalFunction;
      }
      for (var s = 0; s < occasions[i].sources.length; s++) {
        if (usedFinalFunction != undefined && s == occasions[i].sources.length - 1) {
          usedFinalSourceFunction = usedFinalFunction;
        }
        load_source(occasions[i].sources[s], loadedData, occasions[i], usedFinalSourceFunction);
      }

    }
  });
}

function load_source(source, loadedData, occasion, finalFunction) {
  if (source == "raw_simple") {
    load_raw_data(loadedData, occasion, false, finalFunction);
  } else if (source == "raw") {
    load_raw_data(loadedData, occasion, true, finalFunction);
  } else if (source == "additional") {
    load_additional_data(loadedData, occasion, finalFunction);
  } else {
    if (global.argv.verbose) {
      console.log("Loading of " + source + " not yet implemented");
    }
  }
}

function load_raw_data(loadedData, occasion, loadStatements, finalFunction) {
  var path = "../data/wahlomat_" + occasion.date.substring(0, 4) + "_" + occasion.territory + "/";

  if (loadStatements) {
    fs.readFile(path + "module_definition.js", 'utf-8', function(err, response_basic) {
      fs.readFile(path + "module_definition_statements.js", 'utf-8', function(err, response_statements) {
        loadedData.raw.push(wahlomat_collect_json(occasion, response_basic, response_statements));
      });
    });
  } else {
    fs.readFile(path + "module_definition.js", 'utf-8', function(err, response_basic) {
      loadedData.raw.push(wahlomat_collect_json(occasion, response_basic));
    });
  }
}

function load_additional_data(loadedData, occasion, finalFunction) {
  var folder = occasion.territory.replace("-", "");
  var path = "../data/additional/" + occasion.date.substring(0, 4) + "/" + folder + "/";

  fs.readFile(path + "overview.json", 'utf-8', function(err, response) {
    if (err) console.log(path + "overview.json\n" + err);
    var overviewData = JSON.parse(response);
    fs.readFile(path + "party.json", 'utf-8', function(err, response) {
      if (err) console.log(path + "party.json\n" + err);
      var partyData = JSON.parse(response);
      fs.readFile(path + "statement.json", 'utf-8', function(err, response) {
        if (err) console.log(path + "statement.json\n" + err);
        var statementData = JSON.parse(response);
        fs.readFile(path + "opinion.json", 'utf-8', function(err, response) {
          if (err) console.log(path + "opinion.json\n" + err);
          var opinionData = JSON.parse(response);
          fs.readFile(path + "answer.json", 'utf-8', function(err, response) {
            if (err) console.log(path + "answer.json\n" + err);
            var answerData = JSON.parse(response);
            fs.readFile(path + "comment.json", 'utf-8', function(err, response) {
              if (err) console.log(path + "comment.json\n" + err);
              var commentData = JSON.parse(response);
              var occasionID = 0;
              if (loadedData.raw != undefined && loadedData.raw[loadedData.raw.length - 1] != undefined) {
                occasionID = Number(loadedData.raw[loadedData.raw.length - 1].occasion.occasion_id);
              }
              if (loadedData.additional != undefined && loadedData.additional[loadedData.additional.length - 1] != undefined) {
                occasionID = Number(loadedData.additional[loadedData.additional.length - 1].occasion.occasion_id);
              }
              occasionID++;
              var additionalData = {
                "occasion": {
                  "occasion_id": occasionID,
                  "type": "Wahl-O-Mat",
                  "date": overviewData.date.substring(0, 10),
                  "territory": occasion.territory,
                  "wikidata": occasion.wikidata
                },
                "overview": overviewData,
                "partyData": partyData,
                "statementData": statementData,
                "opinionData": opinionData,
                "answerData": answerData,
                "commentData": commentData
              };
              loadedData.additional.push(convert_additional_data(additionalData));

              if (finalFunction != undefined) {
                finalFunction(loadedData);
              }
            });
          });
        });
      });
    });
  });
}

function wahlomat_collect_json(occasion, response_basic, response_statements) {

  const wom_script = new vm.Script(response_basic + "\n" + response_statements);
  const sandbox = {};
  const context = vm.createContext(sandbox);
  wom_script.runInContext(context);

  var collectedData = {
    "occasion": {
      "occasion_id": sandbox.WAHLOMATEN_ID,
      "type": "Wahl-O-Mat",
      "date": occasion.date,
      "territory": occasion.territory,
      "wikidata": occasion.wikidata,
      "extraData": {
        "texts": sandbox.WOMT_aTexte
      }
    },
    "theses": {
      "theses": sandbox.WOMT_aThesen,
      "topics": sandbox.WOMT_aThemen,
      "theses_topics": sandbox.WOMT_aThesenThema
    },
    "positions": {
      "positions": sandbox.WOMT_aThesenParteien,
      "positionTexts": sandbox.WOMT_aThesenParteienText
    },
    "parties": sandbox.WOMT_aParteien
  };

  return collectedData;
}

exports.wahlomat_convert_theses = function(collectedData) {
  var convertedData = [];
  var curWOM;
  var currentThesis = {}; //converted
  var curThe; //original
  for (var i = 0; i < collectedData.length; i++) {
    curWOM = collectedData[i];
    var theses = [];

    for (var j = 0; j < curWOM.theses.theses.length; j++) {
      curThe = curWOM.theses.theses[j][0];
      if (curThe[0] == curThe[1]) {
        curThe[0] = "";
      }
      currentThesis = {
        "title": curThe[0],
        "text": curThe[1]
      };

      theses.push(currentThesis);
    }
    curWOM.theses = theses;

    convertedData.push(curWOM);
  }
  return convertedData;
}

exports.order_data = function(convertedData){

  convertedData.sort(function(a, b){
      var territoryA=a.occasion.territory, territoryB=b.occasion.territory;
      if (territoryA < territoryB){ //sort string ascending
          return -1 ;
      } else if (territoryA > territoryB) {
          return 1;
      } else {
        return 0 //default return value (no sorting)
      }
  });
  convertedData.sort(function(a, b){
      var dateA=a.occasion.date, dateB=b.occasion.date;
      if (dateA < dateB){ //sort string ascending
          return -1 ;
      } else if (dateA > dateB) {
          return 1;
      } else {
        return 0 //default return value (no sorting)
      }
  });
  for (var i = 0; i < convertedData.length; i++) {
    console.log(convertedData[i].occasion.date + " " + convertedData[i].occasion.territory );
  }
}

exports.merge_positions = function(finalConvertedData) {
  for (var i = 0; i < finalConvertedData.length; i++) {
    var parties = [];

    for (var j = 0; j < finalConvertedData[i].theses.length; j++) {
      var positions = [];
      var positionTexts = finalConvertedData[i].positions.positionTexts[j];
      var thesis_id = "WOM-" + i + "-" + j;

      finalConvertedData[i].theses[j] = {
        "id": thesis_id,
        "title": finalConvertedData[i].theses[j].title,
        "text": finalConvertedData[i].theses[j].text,
        "positions": positions
      };

      for (var p = 0; p < finalConvertedData[i].parties.length; p++) {
        var curParty = {
          "name": finalConvertedData[i].parties[p][0][1],
          "longname": finalConvertedData[i].parties[p][0][0]
        };
        var text = finalConvertedData[i].positions.positionTexts[j][p][0].replace(/(<([^>]+)>)/ig, '');
        text = text.replace(/"/g, '');
        text = text.replace(/&shy;/g, '');
        text = text.replace(/\n/g, '');
        finalConvertedData[i].theses[j].positions.push({
          "value": Number(finalConvertedData[i].positions.positions[j][p]),
          "text": text,
          "party": curParty.name
        });
        parties[p] = curParty;
      }
    }
    finalConvertedData[i] = {
      "occasion": finalConvertedData[i].occasion,
      "parties": parties,
      "theses": finalConvertedData[i].theses
    };
    finalConvertedData[i].occasion.num = i;
    finalConvertedData[i].occasion.title = normalize_election_name(finalConvertedData[i].occasion);

  }
  var mergedData = {
    "occasions": finalConvertedData
  };
  return mergedData;
}

function convert_additional_data(additionalData) {
  var currentData;

  var answerMatching = {
    0: 1,
    1: -1,
    2: 0
  };

  var theses = [];
  for (var s = 0; s < additionalData.statementData.length; s++) {
    theses.push({
      "title": undefined,
      "text": additionalData.statementData[s].text,
      "thesis_id": undefined,
      "thesis_num": s
    });
  }
  var positions = [];
  for (var o = 0; o < additionalData.opinionData.length; o++) {
    if (positions[additionalData.opinionData[o].statement] == undefined) {
      positions[additionalData.opinionData[o].statement] = [];
    }
    positions[additionalData.opinionData[o].statement][additionalData.opinionData[o].party] = answerMatching[additionalData.opinionData[o].answer];
  }
  var positionTexts = [];
  for (var t = 0; t < additionalData.commentData.length; t++) {
    var opinion = additionalData.opinionData[additionalData.commentData[t].opinion];
    if (positionTexts[opinion.statement] == undefined) {
      positionTexts[opinion.statement] = [];
    }
    positionTexts[opinion.statement][opinion.party] = [additionalData.commentData[t].text];
  }
  var parties = [];
  for (var p = 0; p < additionalData.partyData.length; p++) {
    parties[p] = [];
    parties[p][0] = [];
    parties[p][0][0] = additionalData.partyData[p].longname;
    parties[p][0][1] = additionalData.partyData[p].name;
  }

  additionalData.occasion.extraData = additionalData.overview;

  currentData = {
    "occasion": additionalData.occasion,
    "theses": theses,
    "positions": {
      "positions": positions,
      "positionTexts": positionTexts
    },
    "parties": parties
  };

  return currentData;
}

exports.crunch_party_occurences = function(reallyAllData) {
  var partyName = "";
  var partyOccurencesPerParty = [];
  var partyOccurences = [];
  var partyOccurencesPerWOM = [];
  var partyOccurencesPerCategory = [];

  var curPartyGlobalNum = -1;
  var curPartyOccurence = {};

  for (var i = 0; i < reallyAllData.occasions.length; i++) {
    for (var p = 0; p < reallyAllData.occasions[i].parties.length; p++) {
      partyName = normalize_party_name(reallyAllData.occasions[i].parties[p].name);

      if (partyOccurencesPerParty[partyName] == undefined) {
        curPartyGlobalNum = Object.keys(partyOccurencesPerParty).length;
        partyOccurencesPerParty[partyName] = {
          "col": curPartyGlobalNum,
          "occurences": []
        };
      } else {
        curPartyGlobalNum = partyOccurencesPerParty[partyName].col;
      }

      if (partyOccurencesPerWOM[i] == undefined) {
        partyOccurencesPerWOM[i] = [];
      }

      curPartyOccurence = {
        "id": "" + i + "_" + p,
        "wom_num": i,
        "party_num": p,
        "name": partyName,
        "name_original": reallyAllData.occasions[i].parties[p].name,
        "party_global_num": curPartyGlobalNum,
        "long_name": reallyAllData.occasions[i].parties[p].longname
      };
      partyOccurences.push(curPartyOccurence); // all occurrences in womts
      partyOccurencesPerParty[partyName].occurences[i] = curPartyOccurence;
      partyOccurencesPerWOM[i].push(curPartyOccurence);
      match_party_occurence(curPartyOccurence, reallyAllData);
    }
  }
  if (reallyAllData.theses != undefined) {
    for (var t = 0; t < reallyAllData.theses.length; t++) {
      if (reallyAllData.theses[t] != undefined) {
        var curCat = reallyAllData.theses[t].category;
        if (partyOccurencesPerCategory[curCat] == undefined) {
          partyOccurencesPerCategory[curCat] = [];
        }
        partyOccurencesPerCategory[curCat][reallyAllData.theses[t].occasion.num] = partyOccurencesPerWOM[reallyAllData.theses[t].occasion.num];
      }
    }
  }

  reallyAllData.partyOccurences = {
    "all": partyOccurences,
    "perWOM": partyOccurencesPerWOM,
    "perParty": partyOccurencesPerParty,
    "perCategory": partyOccurencesPerCategory
  };

  return reallyAllData;
}


function match_party_occurence(curPartyOccurence, reallyAllData) {
  if (reallyAllData.allPartyColNumMatchings == undefined) {
    reallyAllData.allPartyColNumMatchings = [];
  }
  var partyColNumMatchings = reallyAllData.allPartyColNumMatchings;
  if (partyColNumMatchings[curPartyOccurence.wom_num] == undefined) {
    partyColNumMatchings[curPartyOccurence.wom_num] = [];
  }
  if (partyColNumMatchings[curPartyOccurence.wom_num][curPartyOccurence.party_global_num] == undefined) {
    partyColNumMatchings[curPartyOccurence.wom_num][curPartyOccurence.party_global_num] = curPartyOccurence.party_num;
  } else {
    if (partyColNumMatchings[curPartyOccurence.wom_num][curPartyOccurence.party_global_num].constructor !== Array) {
      partyColNumMatchings[curPartyOccurence.wom_num][curPartyOccurence.party_global_num] = [partyColNumMatchings[curPartyOccurence.wom_num][curPartyOccurence.party_global_num]];
    }
    partyColNumMatchings[curPartyOccurence.wom_num][curPartyOccurence.party_global_num].push(curPartyOccurence.party_num);
  }
}

function normalize_election_name(occasion) {
  var wahlomatTexts = occasion.extraData.texts
  var electionName = "";

  if (wahlomatTexts != undefined && wahlomatTexts["wahlomat_titelzeile"] != undefined && wahlomatTexts["wahlomat_titelzeile"] != "") {
    electionName = wahlomatTexts["wahlomat_titelzeile"][0];
  } else if (wahlomatTexts != undefined && wahlomatTexts["wahlomat_head_titel"] != undefined) {
    electionName = wahlomatTexts["wahlomat_head_titel"][0];
  } else if (wahlomatTexts == undefined) {
    electionName = occasion.extraData.title + " " + occasion.date.substring(0, 4);
  }

  electionName = electionName.replace("Wahl-O-Mat zur ", "");
  electionName = electionName.replace("www.Wahl-O-Mat.de - ", "");
  electionName = electionName.replace("Wahl-O-Mat ", "");
  electionName = electionName.replace("bpb: ", "");

  electionName = electionName.trim();
  return electionName;
}

function normalize_party_name(partyName) {
  partyName = partyName.toUpperCase();

  partyName = partyName.trim();

  if (partyName.includes("GRÜNE") || partyName.includes("GR&UUML;NE")) {
    partyName = "GRÜNE";
  } else if (partyName.includes("FREIE WÄHLER") || partyName.includes("FREIE W&AUML;HLER") || partyName.includes("FBI") || partyName.includes("FWD")) {
    partyName = "FREIE WÄHLER";
  } else if (partyName.includes("CDU") || partyName.includes("CSU")) {
    partyName = "CDU/CSU";
  } else if (partyName.includes("DIE LINKE") || partyName.includes("PDS") || partyName.includes("WASG")) {
    partyName = "DIE LINKE";
  } else if (partyName.includes("PRO ")) {
    partyName = "PRO";
  } else if (partyName.includes("FREIHEIT")) {
    partyName = "DIE FREIHEIT";
  } else if (partyName.includes("DVU")) {
    partyName = "NPD";
  } else if (partyName.includes("TIERSCHUTZPARTEI")) {
    partyName = "TIERSCHUTZPARTEI";
  } else if (partyName.includes("ALLIANZ DEUTSCHER DEMOKRATEN") || partyName.includes("AD-DEMOKRATEN")) {
    partyName = "ADD";
  } else if (partyName == "B" || partyName == "B*") {
    partyName = "B*";
  } else if (partyName.includes("RRP")) {
    partyName = "BÜNDNIS 21/RRP";
  } else if (partyName.includes("PDV") || partyName.includes("PARTEI DER VERNUNFT")) {
    partyName = "PDV";
  } else if (partyName.includes("GRAU")) {
    partyName = "GRAUE";
  } else if (partyName.includes("PSG")) {
    partyName = "SGP";
  } else if (partyName.includes("ALFA")) {
    partyName = "LKR";
  } else if (partyName.includes("PBC") || partyName == "AUF" || partyName.includes("AUFBRUCH C")) {
    partyName = "BÜNDNIS C";
  } else if (partyName.includes("FRAUEN")) {
    partyName = "FRAUEN";
  } else if (partyName.includes("ADM")) {
    partyName = "DEUTSCHE KONSERVATIVE";
  }
  return partyName;
}
