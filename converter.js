// from https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript
function loadJSON(filename, callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', filename, true);
  xobj.onreadystatechange = function() {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}

function load_mergedData_json(path, finalFunction) {
  loadJSON(path, function(response) {
    var mergedData = JSON.parse(response);

    if (finalFunction != undefined) {
      finalFunction(mergedData);
    }
  });
}

function load_additional_data(allData, jahr, parliament, finalFunction) {
  var folder = parliament.replace("-", "");
  var path = "data/additional/" + jahr + "/" + folder + "/";

  loadJSON(path + "overview.json", function(response) {
    var overviewData = JSON.parse(response);
    loadJSON(path + "party.json", function(response) {
      var partyData = JSON.parse(response);
      loadJSON(path + "statement.json", function(response) {
        var statementData = JSON.parse(response);
        loadJSON(path + "opinion.json", function(response) {
          var opinionData = JSON.parse(response);
          loadJSON(path + "answer.json", function(response) {
            var answerData = JSON.parse(response);
            loadJSON(path + "comment.json", function(response) {
              var commentData = JSON.parse(response);
              var additionalData = {
                "occasion": {
                  "occasion_id": Number(allData[allData.length - 1].occasion.occasion_id) + 1,
                  "type": "Wahl-O-Mat",
                  "year": overviewData.date.substring(0, 4),
                  "parliament": parliament
                },
                "overview": overviewData,
                "partyData": partyData,
                "statementData": statementData,
                "opinionData": opinionData,
                "answerData": answerData,
                "commentData": commentData
              };
              allData.push(convert_additional_data(additionalData));

              if (finalFunction != undefined) {
                finalFunction(allData);
              }
            });
          });
        });
      });
    });
  });
}

function load_categorization_and_finalize(mergedData) {
  loadJSON('data/theses_categories.json', function(response) {
    theses_categories = JSON.parse(response);
    var categorizedData = categorize_theses(mergedData, theses_categories);
    var crunchedCategorizedData = crunch_party_occurences(categorizedData);
    console.log(crunchedCategorizedData);
    write_categorized(crunchedCategorizedData);
  });
}

function wahlomat_collect(year, parliament, collectedData = []) {
  collectedData.push({
    "occasion": {
      "occasion_id": WAHLOMATEN_ID,
      "type": "Wahl-O-Mat",
      "year": year,
      "parliament": parliament,
      "extraData": {
        "texts": WOMT_aTexte
      }
    },
    "theses": {
      "theses": WOMT_aThesen,
      "topics": WOMT_aThemen,
      "theses_topics": WOMT_aThesenThema
    },
    "positions": {
      "positions": WOMT_aThesenParteien,
      "positionTexts": WOMT_aThesenParteienText
    },
    "partys": {
      "partys": WOMT_aParteien,
      "web": WOMT_aParteienURL
    }
  });
  WOMT_aThesen = undefined;
  WOMT_aThesenParteien = undefined;
  WOMT_aThesenParteienText = undefined;
  WOMT_aThemen = undefined;
  WOMT_aParteien = undefined;
  WOMT_aThesenThema = undefined;
  WOMT_aParteienURL = undefined;
  WOMT_aTexte = undefined;
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

function merge_positions(finalConvertedData) {
  var allPartys = Array();
  for (var i = 0; i < finalConvertedData.length; i++) {
    allPartys.push(finalConvertedData[i].partys.partys);

    for (var j = 0; j < finalConvertedData[i].theses.length; j++) {
      var positions = [];
      var positionTexts = finalConvertedData[i].positions.positionTexts[j];

      finalConvertedData[i].theses[j] = {
        "title": finalConvertedData[i].theses[j].title,
        "description": finalConvertedData[i].theses[j].description,
        "positions": positions
      };

      for (var x = 0; x < finalConvertedData[i].partys.partys.length; x++) {
        var partyShort = finalConvertedData[i].partys.partys[x][0][1];
        var text = finalConvertedData[i].positions.positionTexts[j][x][0].replace(/(<([^>]+)>)/ig, '');
        text = text.replace(/"/g, '');
        text = text.replace(/&shy;/g, '');
        text = text.replace(/\n/g, '');
        finalConvertedData[i].theses[j].positions.push({
          "value": finalConvertedData[i].positions.positions[j][x],
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
    "allPartys": allPartys
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
      "description": additionalData.statementData[s].text,
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
    opinion = additionalData.opinionData[additionalData.commentData[t].opinion];
    if (positionTexts[opinion.statement] == undefined) {
      positionTexts[opinion.statement] = [];
    }
    positionTexts[opinion.statement][opinion.party] = [additionalData.commentData[t].text];
  }
  var partys = [];
  for (var p = 0; p < additionalData.partyData.length; p++) {
    partys[p] = [];
    partys[p][0] = [];
    partys[p][0][0] = additionalData.partyData[p].longname;
    partys[p][0][1] = additionalData.partyData[p].name;
  }

  additionalData.occasion.extraData = additionalData.overview;

  currentData = {
    "occasion": additionalData.occasion,
    "theses": theses,
    "positions": {
      "positions": positions,
      "positionTexts": positionTexts
    },
    "partys": {
      "partys": partys,
      "web": []
    }
  };

  return currentData;
}

function crunch_party_occurences(reallyAllData) {
  var allPartys = reallyAllData.allPartys;
  var partyName = "";
  var partyOccurencesPerParty = [];
  var partyOccurences = [];
  var partyOccurencesPerWOM = [];
  var partyOccurencesPerCategory = [];

  var curPartyGlobalNum = -1;
  var curPartyOccurence = {};
  for (var x = 0; x < allPartys.length; x++) {
    for (var y = 0; y < allPartys[x].length; y++) {
      partyName = normalize_party_name(allPartys[x][y][0][1]);

      if (partyOccurencesPerParty[partyName] == undefined) {
        curPartyGlobalNum = Object.keys(partyOccurencesPerParty).length;
        partyOccurencesPerParty[partyName] = {
          "col": curPartyGlobalNum,
          "occurences": []
        };
      } else {
        curPartyGlobalNum = partyOccurencesPerParty[partyName].col;
      }

      if (partyOccurencesPerWOM[x] == undefined) {
        partyOccurencesPerWOM[x] = [];
      }

      curPartyOccurence = {
        "id": "" + x + "_" + y,
        "wom_num": x,
        "party_num": y,
        "name": partyName,
        "name_original": allPartys[x][y][0][1],
        "party_global_num": curPartyGlobalNum,
        "long_name": allPartys[x][y][0][0]
      };
      partyOccurences.push(curPartyOccurence); // all occurrences in womts
      partyOccurencesPerParty[partyName].occurences[x] = curPartyOccurence;
      partyOccurencesPerWOM[x].push(curPartyOccurence);
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
  var allData = mergedData.allData;
  thesis_ids = [];
  categories = [];
  categorized = [];
  for (var tc = 0; tc < theses_categories.length; tc++) {
    i = theses_categories[tc].occasion_id;
    t = theses_categories[tc].thesis_num;

    if (allData[i].theses[t] != undefined) {
      allData[i].theses[t].category = theses_categories[tc].category;
      allData[i].theses[t].thesis_id = theses_categories[tc].thesis_id;
      allData[i].theses[t].thesis_num = theses_categories[tc].thesis_num;
      allData[i].theses[t].occasion = allData[i].occasion;
      thesis_ids[theses_categories[tc].thesis_id] = allData[i].theses[t];


      if (categories[theses_categories[tc].category] == undefined) {
        categories[theses_categories[tc].category] = [];
        categorized[theses_categories[tc].category] = [];
      }

      categories[theses_categories[tc].category].push(theses_categories[tc].thesis_id);
      categorized[theses_categories[tc].category].push(allData[i].theses[t]);
    }
  }

  var categorizedData = {};

  categorizedData.allPartys = mergedData.allPartys;
  categorizedData.occasions = allData;
  categorizedData.theses = thesis_ids;
  categorizedData.categories = categories;
  categorizedData.categorized = categorized;

  return categorizedData;
}

function write_simple(reallyAllData) {
  document.write("<table>");

  write_mainheading(reallyAllData.partyOccurences.perParty);

  for (var i = 0; i < reallyAllData.allData.length; i++) { //all WOMs
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
  var title = reallyAllData.allData[i].occasion.title;

  document.write("<tr>");

  document.write("<th><h2>" + reallyAllData.allData[i].occasion.occasion_id + " - " + title + "</h2></th>");

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
  var theses = reallyAllData.allData[i].theses;
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
    thesis += " (" + curThe.occasion.parliament + " " + curThe.occasion.year + ")";
  }
  thesis += " - ";
  if (curThe.title != undefined && curThe.title != "") {
    thesis += curThe.title + ": ";
  }
  thesis += curThe.description;

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
    electionName = occasion.extraData.title + " " + occasion.year;
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
  }
  return partyName;
}

function dump_json(mergedData) {
  document.write(JSON.stringify(mergedData));
}

function dump_csv(mergedData) {

  var allTheses = [];
  var csvRows = [];
  var i = 0;
  for (var o = 0; o < mergedData.allData.length; o++) { //all WOMs
    for (var t = 0; t < mergedData.allData[o].theses.length; t++) { //all Theses
      var curThe = [
        i,
        mergedData.allData[o].occasion.occasion_id,
        o,
        mergedData.allData[o].occasion.parliament,
        mergedData.allData[o].occasion.year,
        t,
        mergedData.allData[o].theses[t].title,
        mergedData.allData[o].theses[t].description
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
