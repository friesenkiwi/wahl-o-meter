function wahlomat_collect(year, parliament, allData) {
  allData.push({
    "occasion": {
      "occasion_id": WAHLOMATEN_ID,
      "type": "Wahl-O-Mat",
      "year": year,
      "parliament": parliament,
      "additionalData": {
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
  return allData;
}

function wahlomat_convert_theses(allData) {
  var convertedData = [];
  var curWOM;
  var currentThesis = {}; //converted
  var curThe; //original
  for (var i = 0; i < allData.length; i++) {
    curWOM = allData[i];
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

function wahlomat_merge_positions(allData) {
  var allPartys = Array();
  for (var i = 0; i < allData.length; i++) {
    allPartys.push(allData[i].partys.partys);

    for (var j = 0; j < allData[i].theses.length; j++) {
      var positions = [];
      var positionTexts = allData[i].positions.positionTexts[j];

      allData[i].theses[j] = {
        "title": allData[i].theses[j].title,
        "description": allData[i].theses[j].description,
        "positions": positions
      };

      for (var x = 0; x < allData[i].partys.partys.length; x++) {
        var partyShort = allData[i].partys.partys[x][0][1];
        var text =allData[i].positions.positionTexts[j][x][0].replace(/(<([^>]+)>)/ig, '');
        text=text.replace(/"/g, '');

        allData[i].theses[j].positions.push({
          "value": allData[i].positions.positions[j][x],
          "text": text,
          "party": partyShort
        });
      }
    }
    allData[i] = {
      "theses": allData[i].theses,
      "occasion": allData[i].occasion
    };
    allData[i].occasion.num = i;
  }
  var reallyAllData = {
    "allData": allData,
    "allPartys": allPartys
  };
  return reallyAllData;
}

function wahlomat_dump_theses_general(reallyAllData) {
  document.write("<table>");

  dump_theses_mainheading(reallyAllData.partyOccurences.perParty);

  var allPartyColNumMatchings = [];
  for (var i = 0; i < reallyAllData.allData.length; i++) { //all WOMs
    var partyColNumMatching = [];

    dump_theses_heading(i, reallyAllData);
    allPartyColNumMatchings[i] = partyColNumMatching;

    dump_theses_theses(reallyAllData, i);
  }
  document.write("</table>");
}

function dump_theses_mainheading(partyOccurences) {
  document.write("<tr><th></th>");
  for (var partyName in partyOccurences) {
    document.write("<th>" + partyName + "</th>");
  }
  document.write("</tr>");
}

function dump_theses_heading(i, reallyAllData) {
  var title = normalizeElectionName(reallyAllData.allData[i].occasion.additionalData.texts);

  document.write("<tr>");

  document.write("<th><h2>" + reallyAllData.allData[i].occasion.occasion_id + " - " + title + "</h2></th>");

  for (var partyName in reallyAllData.partyOccurences.perParty) { // all parties
    document.write("<th>");
    document.write(find_WOM_party(partyName, reallyAllData, i));
    document.write("</th>");
  }
  document.write("</tr>");
}

function dump_theses_heading_categorized(allPartyOccurences, category) {

  //  document.write("<tr>");

  //  document.write("<th><h2>bla</h2></th>");

//  mergedPartys = merge_partys_for_category(allPartyOccurences, category);

//  for (var q = 0; q < mergedPartys.length; q++) {
    //  document.write("<th>");
    //    document.write(mergedPartys[q]);
    //  document.write("</th>");
//  }


  for (var partyName in reallyAllData.partyOccurences.perParty) { // all parties
    document.write("<th>");
    document.write(partyName);
    document.write("</th>");
  }
  //document.write("</tr>");
}

function find_WOM_party(partyName, reallyAllData, i) {
  var partyOutputName = "";
  var partyGlobalCol=reallyAllData.partyOccurences.perParty[partyName].col;
  partyWOMNum=reallyAllData.allPartyColNumMatchings[i][partyGlobalCol];
  partyOccurence=reallyAllData.partyOccurences.perWOM[i][partyWOMNum];
  if(partyOccurence!=undefined){
      partyOutputName = partyOccurence.name_original;
  } else {
    if(partyWOMNum != undefined){
      if(partyWOMNum.constructor === Array){
        for (var z = 0; z < partyWOMNum.length; z++) {
          partyOccurence=reallyAllData.partyOccurences.perWOM[i][partyWOMNum[z]];

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

function merge_partys_for_category(partyOccurences, category) {
  var mergedPartys = [];
  if (partyOccurences != undefined) {
    for (var occurenceNum in partyOccurences.perCategory[category]) { // all parties

      mergedPartys.push(find_party_categorized(allPartysForTheseInCategory[x].name, partyOccurences.perCategory[category]));

      /*
      var allPartysForTheseInCategory=partyOccurences.perCategory[category][occurenceNum];
      //console.log(allPartysForTheseInCategory);
      for (var x = 0; x < allPartysForTheseInCategory.length; x++) {
        //console.log(allPartysForTheseInCategory[x].name);
        //mergedPartys.push(allPartysForTheseInCategory[x].name);
      }
      */
      //  mergedPartys.push(find_party(partyName,partyOccurences.perCategory[category]));

    }
    //console.log(mergedPartys);

  }
  return mergedPartys;
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
  //  var partyNumIDMatching = [];

  if (partyOccurences != undefined) {
    //console.log(partyOccurences);

    for (var x = 0; x < partyOccurences.length; x++) { // all occurences
      if (partyOccurences[x] == undefined) {
        //    console.log("whynot?");
        //    console.log("find_party() partyOccurences[x] == undefined");
        //    console.log(partyName);

        //    console.log(partyOccurences);

      }
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
        //partyNumIDMatching[allPartyOccurences.perWOM[i][x].party_num]=allPartyOccurences.perWOM[i][x].party_global_num;
        partyNameName += partyOccurences[x].name_original;
        //document.write(allPartyOccurences.perWOM[i][x].name_original);
      }
    }
    //    console.log(partyNameName);
    return partyNameName;
  } else {
    return partyName;
  }
}

function dump_theses_theses(reallyAllData, i) {
  var theses= reallyAllData.allData[i].theses;
  var partyOccurences = reallyAllData.partyOccurences.perParty;
  var partyColNumMatching = reallyAllData.allPartyColNumMatchings[i];

  //console.log(partyColNumMatching);
  for (var j = 0; j < theses.length; j++) {
    var curThe = theses[j];
    document.write("<tr>");
    document.write("<td>#" + j + " - " + curThe.title + ": " + curThe.description + "</td>");

    for (var partyName in partyOccurences) {
      document.write("<td>");

      document.write(derive_position_dings(curThe.positions, partyOccurences[partyName], partyColNumMatching));
      //        partyNum = partyColNumMatching[allPartyOccurences.perParty[partyName].col];
      //        document.write(derive_position(curThe.positions,partyNum));

      document.write("</td>");
    }
    document.write("</tr>");
  }
}

function dump_theses_theses_categorized(theses, partyOccurences, allPartyColNumMatchings) {
  //partyOccurences=perParty
  for (var j = 0; j < theses.length; j++) {
    var curThe = theses[j];
    document.write("<tr>");
    document.write("<td>" + "#" + j + " " + curThe.occasion.parliament + " " + curThe.occasion.year + " - " + curThe.title + ": " + curThe.description + "</td>");

    for (var partyName in partyOccurences) {
      document.write("<td>");

      document.write(derive_position_dings(curThe.positions, partyOccurences[partyName], allPartyColNumMatchings[curThe.occasion.num]));

      //      document.write(derive_position_dings(curThe.positions,partyOccurences[partyName],partyColNumMatching));
      //        partyNum = partyColNumMatching[allPartyOccurences.perParty[partyName].col];
      //        document.write(derive_position(curThe.positions,partyNum));

      document.write("</td>");
    }
    document.write("</tr>");
  }
}

function derive_position_dings(positions, partyOccurences, partyColNumMatching) {

  var output = "";
  if(partyOccurences!=undefined){
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
    //    output = "partyOccurences.col="+partyOccurences.col;
    output = "";
  }
}
  return output;

}

function format_position(position) {
  return '<span title="' + position.text + '">' + position.value + '</span>';
}

function wahlomat_dump_theses(allData, allPartyOccurences) {
  for (var i = 0; i < allData.length; i++) {
    var title = normalizeElectionName(allData[i].occasion.additionalData.texts);

    document.write("<table><tr><th><h2>" + allData[i].occasion.occasion_id + " - " + title + "</h2></th>");
    for (var x = 0; x < allPartyOccurences.perWOM[i].length; x++) {
      document.write("<th>" + allPartyOccurences.perWOM[i][x].name + "</th>");
    }

    document.write("</tr><tr>");

    for (var j = 0; j < allData[i].theses.length; j++) {
      var curThe = allData[i].theses[j];
      document.write("<td>" + curThe.title + ": " + curThe.description + "</td>");
      for (var x = 0; x < curThe.positions.length; x++) {
        document.write("<td>" + curThe.positions[x].value + "</td>");
      }
      document.write("</tr>");
    }
    document.write("</table>");
  }
}


function wahlomat_dump_categorized_theses(reallyAllData) {
  //  console.log(reallyAllData);
  var categories = reallyAllData.categories;
  var dummyOccasion = {
    "occasion_id": 9999,
    "additionalData": {
      "texts": {
        "wahlomat_titelzeile": [
          "DUMMY"
        ]
      }
    }
  };
  var j = 0;
  for (var category in categories) { // all categories
    document.write("<table><tr><th><h2>" + category + "</h2></th>");

    //  console.log("before");

    dump_theses_heading_categorized(reallyAllData.partyOccurences, category);

    dump_theses_theses_categorized(reallyAllData.categorized[category], reallyAllData.partyOccurences.perParty, reallyAllData.allPartyColNumMatchings);
    j++;

    /*
        dump_theses_mainheading(reallyAllData.partyOccurences.perParty);
        for (var q = 0; q < reallyAllData.categorized[category].length; q++) {
          var curCatThe=reallyAllData.categorized[category][q];
          document.write("<tr>");
          document.write("<td>" + curCatThe.thesis_id + ": " + curCatThe.description +"</td>");
          document.write("</tr>");
        }
        */
       document.write("</table>");
  }
}

function wahlomat_categorize_theses(reallyAllData, theses_categories) {
  var allData = reallyAllData.allData;
  thesis_ids = [];
  categories = [];
  categorized = [];
  for (var x = 0; x < theses_categories.length; x++) {
    i = theses_categories[x].occasion_id;
    j = theses_categories[x].thesis_num;
    allData[i].theses[j].category = theses_categories[x].category;
    allData[i].theses[j].thesis_id = theses_categories[x].thesis_id;
    allData[i].theses[j].thesis_num = theses_categories[x].thesis_num;
    allData[i].theses[j].occasion = allData[i].occasion;
    thesis_ids[theses_categories[x].thesis_id] = allData[i].theses[j];


    if (categories[theses_categories[x].category] == undefined) {
      categories[theses_categories[x].category] = [];
      categorized[theses_categories[x].category] = [];
    }

    categories[theses_categories[x].category].push(theses_categories[x].thesis_id);
    categorized[theses_categories[x].category].push(allData[i].theses[j]);
  }

  reallyAllData.occasions = allData;
  reallyAllData.theses = thesis_ids;
  reallyAllData.categories = categories;
  reallyAllData.categorized = categorized;

  return reallyAllData;
}

function normalizePartyName(partyName) {
  partyName = partyName.toUpperCase();

  partyName = partyName.trim();

  if (partyName.includes("GRÜNE") || partyName.includes("GR&UUML;NE")) {
    partyName = "GRÜNE";
  } else if (partyName.includes("FREIE WÄHLER") || partyName.includes("FREIE W&AUML;HLER") || partyName.includes("FBI")) {
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
  }
  return partyName;
}

function normalizeElectionName(wahlomatTexts) {
  var electionName = "";

  if (wahlomatTexts["wahlomat_titelzeile"] != undefined && wahlomatTexts["wahlomat_titelzeile"] != "") {
    electionName = wahlomatTexts["wahlomat_titelzeile"][0];
  } else if (wahlomatTexts["wahlomat_head_titel"] != undefined) {
    electionName = wahlomatTexts["wahlomat_head_titel"][0];
  }

  electionName = electionName.replace("Wahl-O-Mat zur ", "");
  electionName = electionName.replace("www.Wahl-O-Mat.de - ", "");
  electionName = electionName.replace("Wahl-O-Mat ", "");

  electionName = electionName.trim();
  return electionName;
}

function wahlomat_dump_party_occurences(allPartyOccurences) {

  document.write("<table>");
  for (var x = 0; x < allPartyOccurences.all.length; x++) {
    document.write("<tr><td>" + allPartyOccurences.all[x].id + " " + allPartyOccurences.all[x].name + "</td></tr>");
  }

  document.write("</table>");
}

function wahlomat_crunch_party_occurences(reallyAllData) {
  var allPartys = reallyAllData.allPartys;
  var partyName = "";
  var partyOccurencesPerParty = [];
  var partyOccurences = [];
  var partyOccurencesPerWOM = [];
  var partyOccurencesPerCategory = [];
  var allPartyColNumMatchings = [];

  var curPartyGlobalNum = -1;
  var curPartyOccurence = {};
  for (var x = 0; x < allPartys.length; x++) {
    for (var y = 0; y < allPartys[x].length; y++) {
      partyName = normalizePartyName(allPartys[x][y][0][1]);

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
    for (var k = 0; k < reallyAllData.theses.length; k++) {
      var curCat = reallyAllData.theses[k].category;
      if (partyOccurencesPerCategory[curCat] == undefined) {
        partyOccurencesPerCategory[curCat] = [];
      }
      partyOccurencesPerCategory[curCat][reallyAllData.theses[k].occasion.num] = partyOccurencesPerWOM[reallyAllData.theses[k].occasion.num];
      //  partyOccurencesPerCategory[curCat][reallyAllData.theses[k]].push(partyOccurencesPerWOM[reallyAllData.theses[k].occasion.num][reallyAllData.theses[k].thesis_num]);
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
  if (reallyAllData.allPartyColNumMatchings[curPartyOccurence.wom_num] == undefined) {
    reallyAllData.allPartyColNumMatchings[curPartyOccurence.wom_num] = [];
  }
  if (reallyAllData.allPartyColNumMatchings[curPartyOccurence.wom_num][curPartyOccurence.party_global_num] == undefined) {
    reallyAllData.allPartyColNumMatchings[curPartyOccurence.wom_num][curPartyOccurence.party_global_num] = curPartyOccurence.party_num;
  } else {
    if (reallyAllData.allPartyColNumMatchings[curPartyOccurence.wom_num][curPartyOccurence.party_global_num].constructor !== Array) {
      reallyAllData.allPartyColNumMatchings[curPartyOccurence.wom_num][curPartyOccurence.party_global_num] = [reallyAllData.allPartyColNumMatchings[curPartyOccurence.wom_num][curPartyOccurence.party_global_num]];
    }
    reallyAllData.allPartyColNumMatchings[curPartyOccurence.wom_num][curPartyOccurence.party_global_num].push(curPartyOccurence.party_num);
  }
}


function wahlomat_dump_json(reallyAllData) {
  document.write(JSON.stringify(reallyAllData.allData));
}

function convert_addtional_data(additionalData){
  //console.log(additionalData);

  var currentData;

  var theses = [];
  for (var s = 0; s < additionalData.statementData.length; s++) {
    theses.push({
        "title": undefined,
        "description":  additionalData.statementData[s].text,
        "thesis_id":undefined,
        "thesis_num":s
      });
  }
  var positions = [];
  for (var o = 0; o < additionalData.opinionData.length; o++) {
    if(positions[additionalData.opinionData[o].statement]==undefined){
      positions[additionalData.opinionData[o].statement]=[];
    }
    positions[additionalData.opinionData[o].statement][additionalData.opinionData[o].party]=additionalData.opinionData[o].answer;
  }
  var positionTexts = [];
  for (var t = 0; t < additionalData.commentData.length; t++) {
    opinion=additionalData.opinionData[additionalData.commentData[t].opinion];
    if(positionTexts[opinion.statement]==undefined){
      positionTexts[opinion.statement]=[];
    }
    positionTexts[opinion.statement][opinion.party]=[additionalData.commentData[t].text];
  }
  var partys=[];
  for (var p = 0; p < additionalData.partyData.length; p++) {
    partys[p]=[];
    partys[p][0]=[];
    partys[p][0][0]=additionalData.partyData[p].longname;
    partys[p][0][1]=additionalData.partyData[p].name;
  }
  /*
  for (var party in additionalData.partyData) {

  }
  */

  additionalData.occasion.additionalData = additionalData.overview;

  currentData ={
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

  //console.log(allData);
  return currentData;
}

function load_additional_data(reallyAllData, jahr, folder, withComment, last, finalFunction){
  var wahl;
  if(folder=="deutschland"){
    wahl="bundestagswahl";
  } else {
    wahl=folder;
  }
  var path="data/additional/"+jahr+"/"+folder+"/";
//  console.log(path);

  loadJSON(path+"overview.json", function(response) {
    var overviewData = JSON.parse(response);
    loadJSON(path+"party.json", function(response) {
      var partyData = JSON.parse(response);
      loadJSON(path+"statement.json", function(response) {
        var statementData = JSON.parse(response);
        loadJSON(path+"opinion.json", function(response) {
          var opinionData = JSON.parse(response);
          loadJSON(path+"answer.json", function(response) {
            var answerData = JSON.parse(response);
            if(withComment){
              loadJSON(path+"comment.json", function(response) {
                var commentData = JSON.parse(response);
                var additionalData = {
                  "occasion": {
                    "occasion_id":jahr+wahl.length,
                    "type": "Wahl-O-Mat",
                    "year": jahr,
                    "parliament": wahl
                  },
                  "overview": overviewData,
                  "partyData": partyData,
                  "statementData": statementData,
                  "opinionData": opinionData,
                  "answerData": answerData,
                  "commentData": commentData
                };
                reallyAllData.allData.push(convert_addtional_data(additionalData));

                if(last){
                  load_categorization_and_finalize(reallyAllData);
                }
                if(finalFunction!=undefined){
                  finalFunction(reallyAllData);
                }
              });
            }
          });
        });
      });
    });
  });
}

function load_categorization_and_finalize(reallyAllData){
  loadJSON('data/theses_categories.json', function(response) {
    theses_categories = JSON.parse(response);
    var reallyAllCategorizedData=wahlomat_categorize_theses(reallyAllData, theses_categories);
    reallyAllCategorizedData = wahlomat_crunch_party_occurences(reallyAllCategorizedData);
//    console.log("inbetween");
    console.log(reallyAllCategorizedData);
    wahlomat_dump_categorized_theses(reallyAllCategorizedData);
    console.log("This is the End");
  });
}



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
