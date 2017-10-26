'use strict'

// Setup module
var exports = module.exports = {};

var fs = require('fs');
var vm = require('vm');

const JSON_FILENAME = "../data/export.json";

function load_mergedData_json(path, callback) {
  fs.readFile(path, 'utf-8', function(err, data) {
    if (err) {
      console.error(err);
    } else {
      callback(JSON.parse(data));
    }
  });
};

exports.dump_json = function(data, part) {
  var toDump = data;
  if (part == "parties") {
    toDump = [];
    for (var normalizedPartyName in mergedData.partyOccurences.perParty) {
      toDump.push({
        "name": normalizedPartyName,
        "wikidata": ""
      });
    }
    console.log(toDump);
  }

  fs.writeFile(JSON_FILENAME, JSON.stringify(toDump), 'utf8', function (err) {
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
    // TODO: Handle err
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
        "description": curThe[1]
      };

      theses.push(currentThesis);
    }
    curWOM.theses = theses;

    convertedData.push(curWOM);
  }
  return convertedData;
}

exports.merge_positions = function(finalConvertedData) {
  var allParties = Array();
  for (var i = 0; i < finalConvertedData.length; i++) {
    console.log(finalConvertedData[i].parties);
    allParties.push(finalConvertedData[i].parties);

    for (var j = 0; j < finalConvertedData[i].theses.length; j++) {
      var positions = [];
      var positionTexts = finalConvertedData[i].positions.positionTexts[j];

      finalConvertedData[i].theses[j] = {
        "title": finalConvertedData[i].theses[j].title,
        "description": finalConvertedData[i].theses[j].description,
        "positions": positions
      };

      for (var x = 0; x < finalConvertedData[i].parties.length; x++) {
        var partyShort = finalConvertedData[i].parties[x][0][1];
        var text = finalConvertedData[i].positions.positionTexts[j][x][0].replace(/(<([^>]+)>)/ig, '');
        text = text.replace(/"/g, '');
        text = text.replace(/&shy;/g, '');
        text = text.replace(/\n/g, '');
        finalConvertedData[i].theses[j].positions.push({
          "value": Number(finalConvertedData[i].positions.positions[j][x]),
          "text": text,
          "party": partyShort
        });
      }
    }
    finalConvertedData[i] = {
      "theses": finalConvertedData[i].theses,
      "occasion": finalConvertedData[i].occasion
    };
    finalConvertedData[i].occasion.num = i;
    finalConvertedData[i].occasion.title = normalize_election_name(finalConvertedData[i].occasion);
  }
  var mergedData = {
    "allData": finalConvertedData,
    "allParties": allParties
  };
  return mergedData;
}

function load_source(source, loadedData, occasion, finalFunction) {
  if (source == "raw_simple") {
    load_raw_data(loadedData, occasion, false, finalFunction);
  } else if (source == "raw") {
    load_raw_data(loadedData, occasion, true, finalFunction);
  } else if (source == "additional") {
    load_additional_data(loadedData, occasion, finalFunction);
  } else {
    console.log("loading of " + source + " not yet implemented");
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

  console.log("A: " + path);

  fs.readFile(path + "overview.json", 'utf-8', function(err, response) {
    if (err) {
      console.log(err);
    }
    var overviewData = JSON.parse(response);
    fs.readFile(path + "party.json", 'utf-8', function(err, response) {
      var partyData = JSON.parse(response);
      fs.readFile(path + "statement.json", 'utf-8', function(err, response) {
        var statementData = JSON.parse(response);
        fs.readFile(path + "opinion.json", 'utf-8', function(err, response) {
          var opinionData = JSON.parse(response);
          fs.readFile(path + "answer.json", 'utf-8', function(err, response) {
            var answerData = JSON.parse(response);
            fs.readFile(path + "comment.json", 'utf-8', function(err, response) {
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

function load_categorization_and_finalize(mergedData) {
  fs.readFile('../data/theses_categories.json', 'utf-8', function(response) {
    theses_categories = JSON.parse(response);
    var categorizedData = categorize_theses(mergedData, theses_categories);
    var crunchedCategorizedData = crunch_party_occurences(categorizedData);
    console.log(crunchedCategorizedData);
    write_categorized(crunchedCategorizedData);
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

function wahlomat_convert_theses(collectedData) {
  var convertedData = [];
  var curWOM;
  var currentThesis = {}; //converted
  var curThe; //original
  for (var i = 0; i < collectedData.length; i++) {
    curWOM = collectedData[i];
    var theses = [];
    var parties = [];

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

function merge_positions(finalConvertedData) {
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

function crunch_party_occurences(reallyAllData) {
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

function categorize_theses(mergedData, theses_categories) {
  var occasions = mergedData.occasions;
  thesis_ids = [];
  categories = [];
  categorized = [];
  for (var tc = 0; tc < theses_categories.length; tc++) {
    i = theses_categories[tc].occasion_num;
    t = theses_categories[tc].thesis_num;

    if (occasions[i].theses[t] != undefined) {
      occasions[i].theses[t].category = theses_categories[tc].category;
      occasions[i].theses[t].thesis_id = theses_categories[tc].thesis_id;
      occasions[i].theses[t].thesis_num = theses_categories[tc].thesis_num;
      occasions[i].theses[t].occasion = occasions[i].occasion;
      thesis_ids[theses_categories[tc].thesis_id] = occasions[i].theses[t];


      if (categories[theses_categories[tc].category] == undefined) {
        categories[theses_categories[tc].category] = [];
        categorized[theses_categories[tc].category] = [];
      }

      categories[theses_categories[tc].category].push(theses_categories[tc].thesis_id);
      categorized[theses_categories[tc].category].push(occasions[i].theses[t]);
    }
  }

  var categorizedData = {};

  categorizedData.occasions = occasions;
  categorizedData.theses = thesis_ids;
  categorizedData.categories = categories;
  categorizedData.categorized = categorized;

  return categorizedData;
}

function write_metadata(metaData) {
  document.write("<table>");

  for (var i = 0; i < metaData.occasions.length; i++) { //all WOMs
    var matching = false;
    if (metaData.occasions[i].date == metaData.loadedData.additional[i].occasion.date &&
      metaData.occasions[i].territory == metaData.loadedData.additional[i].occasion.territory) {
      matching = true;
    }
    document.write("<tr>");
    document.write("<td>" + metaData.loadedData.additional[i].occasion.extraData.title + "</td>");

    document.write("<td>" + metaData.occasions[i].date + "</td>");
    document.write("<td>" + metaData.occasions[i].territory + "</td>");
    document.write("<td>" + metaData.loadedData.additional[i].occasion.extraData.date + "</td>");
    document.write("<td>" + '<a target="_blank" href="https://www.wikidata.org/wiki/' + metaData.occasions[i].wikidata + '">' + metaData.occasions[i].wikidata + "</a></td>");

    document.write("<td>" + metaData.loadedData.additional[i].theses.length + "</td>");
    document.write("<td>" + metaData.loadedData.additional[i].parties.length + "</td>");

    document.write("<td>" + metaData.occasions[i].WOM_uses + "</td>");
    document.write("<td>" + '<a target="_blank" href="' + metaData.loadedData.additional[i].occasion.extraData.info + '">' + metaData.loadedData.additional[i].occasion.extraData.info + "</a></td>");

    document.write("<td>" + metaData.loadedData.additional[i].occasion.type + "</td>");

    document.write("<td>" + metaData.occasions[i].sources + "</td>");
    document.write("<td>" + metaData.loadedData.additional[i].occasion.extraData.data_source + "</td>");

    document.write("<td>" + metaData.loadedData.additional[i].occasion.occasion_id + "</td>");
    document.write("<td>" + i + "</td>");
    document.write("<td>" + matching + "</td>");

    document.write("</tr>");

  }
  document.write("</table>");

}

function write_parties(reallyAllData) {
  console.log(reallyAllData.partyMeta);

  document.write("<table>");
  for (var p = 0; p < reallyAllData.partyMeta.length; p++) { //all parties
    var occurences = reallyAllData.partyOccurences.perParty[reallyAllData.partyMeta[p].name];
    console.log(occurences);
    document.write("<tr>");
    document.write("<td>" + occurences.col + "</td>");
    document.write("<td>" + reallyAllData.partyMeta[p].name + "</td>");
    document.write("<td>" + '<a target="_blank" href="https://www.wikidata.org/wiki/' + reallyAllData.partyMeta[p].wikidata + '">' + reallyAllData.partyMeta[p].wikidata + "</a></td>");
    document.write("<td>" + occurences.occurences.length + "</td>");
    document.write("<td><table>");
    for (var wom_num in occurences.occurences) { // all WOMs
      document.write("<tr>");
      document.write("<td>" + wom_num + "</td>");
      document.write("<td>" + occurences.occurences[wom_num].long_name + "</td>");
      document.write("</tr>");
    }
    document.write("</table></td>");
    document.write("</tr>");
  }
  document.write("</table>");
}

function write_simple(reallyAllData) {
  document.write("<table>");

  write_mainheading(reallyAllData.partyOccurences.perParty);

  for (var i = 0; i < reallyAllData.occasions.length; i++) { //all WOMs
    write_heading(reallyAllData, i);

    write_theses(reallyAllData, i);
  }
  document.write("</table>");
}

function write_categorized(reallyAllData) {
  for (var category in reallyAllData.categories) { // all categories
    document.write("<table><tr><th><h2>" + category + "</h2></th></tr>");

    write_heading_categorized(reallyAllData.partyOccurences, category);

    write_theses_categorized(reallyAllData, category);

    document.write("</table>");
  }
}

function write_mainheading(partyOccurences) {
  document.write("<tr><th></th>");
  for (var partyName in partyOccurences) {
    document.write("<th>" + partyName + "</th>");
  }
  document.write("</tr>");
}

function write_heading(reallyAllData, i) {
  var title = reallyAllData.occasions[i].occasion.title;

  document.write("<tr>");

  document.write("<th><h2>" + reallyAllData.occasions[i].occasion.occasion_id + " - " + title + "</h2></th>");

  for (var partyName in reallyAllData.partyOccurences.perParty) { // all parties
    document.write("<th>");
    document.write(find_party_WOM(reallyAllData, i, partyName));
    document.write("</th>");
  }
  document.write("</tr>");
}

function write_heading_categorized(allPartyOccurences, category) {
  document.write("<tr><th></th>");

  for (var partyName in allPartyOccurences.perParty) { // all parties
    document.write("<th>");
    document.write(partyName);
    document.write("</th>");
  }
  document.write("</tr>");
}

function write_theses(reallyAllData, i) {
  var theses = reallyAllData.occasions[i].theses;
  var partyOccurences = reallyAllData.partyOccurences.perParty;
  var partyColNumMatching = reallyAllData.allPartyColNumMatchings[i];

  for (var t = 0; t < theses.length; t++) {
    var curThe = theses[t];
    document.write("<tr>");
    document.write("<td>" + format_thesis(t, curThe) + "</td>");

    for (var partyName in partyOccurences) {
      document.write("<td>");

      document.write(derive_position(curThe.positions, partyOccurences[partyName], partyColNumMatching));

      document.write("</td>");
    }
    document.write("</tr>");
  }
}

function write_theses_categorized(reallyAllData, category) {
  var theses = reallyAllData.categorized[category];
  var partyOccurences = reallyAllData.partyOccurences.perParty;

  for (var t = 0; t < theses.length; t++) {
    var curThe = theses[t];
    var partyColNumMatching = reallyAllData.allPartyColNumMatchings[curThe.occasion.num];

    document.write("<tr>");
    document.write("<td>" + format_thesis(t, curThe, true) + "</td>");

    for (var partyName in partyOccurences) {
      document.write("<td>");

      document.write(derive_position(curThe.positions, partyOccurences[partyName], partyColNumMatching));

      document.write("</td>");
    }
    document.write("</tr>");
  }
}

function format_position(position) {
  return '<span title="' + position.text + '">' + position.value + '</span>';
}

function format_thesis(t, curThe, showOccasion = false) {
  var thesis = "";
  thesis += "#" + t;
  if (showOccasion) {
    thesis += " (" + curThe.occasion.territory + " " + curThe.occasion.date.substring(0, 4) + ")";
  }
  thesis += " - ";
  if (curThe.title != undefined && curThe.title != "") {
    thesis += curThe.title + ": ";
  }
  thesis += curThe.text;

  return thesis;
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

function dump_csv(mergedData) {
  var allTheses = [];
  var csvRows = [];
  var i = 0;
  for (var o = 0; o < mergedData.occasions.length; o++) { //all WOMs
    for (var t = 0; t < mergedData.occasions[o].theses.length; t++) { //all Theses
      var curThe = [
        i,
        mergedData.occasions[o].occasion.occasion_id,
        o,
        mergedData.occasions[o].occasion.territory,
        mergedData.occasions[o].occasion.date,
        t,
        mergedData.occasions[o].theses[t].title,
        mergedData.occasions[o].theses[t].text
      ];
      allTheses.push(curThe);
      csvRows.push(curThe.join('\t'));
      i++;
    }
  }
  var csvString = csvRows.join("\n");
  document.write(csvString);
}

function find_party_WOM(reallyAllData, i, partyName) {
  var partyOutputName = "";
  var partyGlobalCol = reallyAllData.partyOccurences.perParty[partyName].col;
  partyWOMNum = reallyAllData.allPartyColNumMatchings[i][partyGlobalCol];
  partyOccurence = reallyAllData.partyOccurences.perWOM[i][partyWOMNum];
  if (partyOccurence != undefined) {
    partyOutputName = partyOccurence.name_original;
  } else {
    if (partyWOMNum != undefined) {
      if (partyWOMNum.constructor === Array) {
        for (var z = 0; z < partyWOMNum.length; z++) {
          partyOccurence = reallyAllData.partyOccurences.perWOM[i][partyWOMNum[z]];

          if (partyOccurence != undefined) {
            partyOutputName += partyOccurence.name_original;
            if (z < partyWOMNum.length - 1) {
              partyOutputName += "/";
            }
          } else {
            partyOutputName = "";
          }
        }
      }
    }
  }

  return partyOutputName;
}

function find_party_categorized(partyName, partyOccurences, partyColNumMatching) {
  var outputPartyName = "";
  for (var curWOMOccurences in partyOccurences) {
    outputPartyName = find_party(partyName, curWOMOccurences, partyColNumMatching);
  }
  return outputPartyName;
}

function find_party(partyName, partyOccurences, partyColNumMatching) {
  var partyNum = -1;
  var partyNameName = "";

  if (partyOccurences != undefined) {

    for (var x = 0; x < partyOccurences.length; x++) { // all occurences

      if (partyOccurences[x] != undefined && partyName == partyOccurences[x].name) {
        if (partyNum != -1) {
          partyNameName += "/";
        }
        partyNum = partyOccurences[x].party_num;
        if (partyColNumMatching[partyOccurences[x].party_global_num] == undefined) {
          partyColNumMatching[partyOccurences[x].party_global_num] = x;
        } else {
          if (partyColNumMatching[partyOccurences[x].party_global_num].constructor !== Array) {
            partyColNumMatching[partyOccurences[x].party_global_num] = [partyColNumMatching[partyOccurences[x].party_global_num]];
          }
          partyColNumMatching[partyOccurences[x].party_global_num].push(x);
        }
        partyNameName += partyOccurences[x].name_original;
      }
    }
    return partyNameName;
  } else {
    return partyName;
  }
}

function derive_position(positions, partyOccurences, partyColNumMatching) {

  var output = "";
  if (partyOccurences != undefined) {
    partyNum = partyColNumMatching[partyOccurences.col];

    if (partyNum != undefined) {
      if (partyNum.constructor === Array) {

        for (var z = 0; z < partyNum.length; z++) {
          if (positions[partyNum[z]] != undefined) {
            output += format_position(positions[partyNum[z]]);
            if (z < partyNum.length - 1) {
              output += "/";
            }
          } else {
            output = "";
          }
        }
      } else {
        if (positions[partyNum] != undefined) {
          output = format_position(positions[partyNum]);
        } else {
          output = "";
        }
      }
    } else {
      output = "";
    }
  }
  return output;
}
