function wahlomat_collect(year, parliament, allData) {
  allData.push({
    "occasion": {
      "id": WAHLOMATEN_ID,
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

function wahlomat_merge_positions(allData, allPartys) {
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

        allData[i].theses[j].positions.push({
          "value": allData[i].positions.positions[j][x],
          "text": allData[i].positions.positionTexts[j][x][0],
          "party": partyShort
        });
      }
    }
    allData[i] = {
      "theses": allData[i].theses,
      "occasion": allData[i].occasion
    };
  }
  return allData;
}

function wahlomat_dump_theses_general(allData, allPartyOccurences) {
  document.write("<table>");

  dump_theses_mainheading(allPartyOccurences.perParty);

  for (var i = 0; i < allData.length; i++) { //all WOMs
    var partyIDNumMatching = [];

    dump_theses_heading(allPartyOccurences,i,allData[i].occasion,partyIDNumMatching);

    dump_theses_theses(allData[i].theses, allPartyOccurences.perParty, partyIDNumMatching);
  }
  document.write("</table>");
}

function dump_theses_mainheading(partyOccurences){
  document.write("<tr><th></th>");
  for (var partyName in partyOccurences) {
    document.write("<th>" + partyName + "</th>");
  }
  document.write("</tr>");
}

function dump_theses_heading(allPartyOccurences,i,occasion,partyIDNumMatching){
  var title = normalizeElectionName(occasion.additionalData.texts);

  document.write("<tr>");

  document.write("<th><h2>" + occasion.id + " - " + title + "</h2></th>");

  convertedPartys=convert_partys(allPartyOccurences,i,partyIDNumMatching);

  for (var q = 0; q < convertedPartys.length; q++) {
    document.write("<th>");
    document.write(convertedPartys[q]);
    document.write("</th>");
  }
  document.write("</tr>");
}

function convert_partys(partyOccurences,i,partyIDNumMatching){
  var convertedPartys=[];
  for (var partyName in partyOccurences.perParty) { // all parties
    convertedPartys.push(find_party(partyName,partyOccurences.perWOM[i],partyIDNumMatching));
  }
  return convertedPartys;
}

function find_party(partyName,partyOccurences,partyIDNumMatching){
  var partyNum = -1;
  var partyNameName="";
  var partyNumIDMatching = [];


  for (var x = 0; x < partyOccurences.length; x++) { // all occurences
    if (partyName == partyOccurences[x].name) {
      if (partyNum != -1) {
        partyNameName+="/";
      }
      partyNum = partyOccurences[x].party_num;
      if (partyIDNumMatching[partyOccurences[x].party_id] == undefined) {
        partyIDNumMatching[partyOccurences[x].party_id] = x;
      } else {
        if (partyIDNumMatching[partyOccurences[x].party_id].constructor !== Array) {
          partyIDNumMatching[partyOccurences[x].party_id] = [partyIDNumMatching[partyOccurences[x].party_id]];
        }
        partyIDNumMatching[partyOccurences[x].party_id].push(x);
      }
      //partyNumIDMatching[allPartyOccurences.perWOM[i][x].party_num]=allPartyOccurences.perWOM[i][x].party_id;
      partyNameName+=partyOccurences[x].name_original;
      //document.write(allPartyOccurences.perWOM[i][x].name_original);
    }
  }
  return partyNameName;
}

function dump_theses_theses(theses, partyOccurences, partyIDNumMatching){
  for (var j = 0; j < theses.length; j++) {
    var curThe = theses[j];
    document.write("<tr>");
    document.write("<td>#" + j + " - " + curThe.title + ": " + curThe.description + "</td>");

    for (var partyName in partyOccurences) {
      document.write("<td>");

      document.write(derive_position_dings(curThe.positions,partyOccurences[partyName],partyIDNumMatching));
//        partyNum = partyIDNumMatching[allPartyOccurences.perParty[partyName].id];
//        document.write(derive_position(curThe.positions,partyNum));

      document.write("</td>");
    }
    document.write("</tr>");
  }
}

function derive_position_dings(positions,partyOccurences,partyIDNumMatching){
  partyNum = partyIDNumMatching[partyOccurences.id];

  var output="";
  if (partyNum != undefined) {
    if (partyNum.constructor === Array) {
      for (var z = 0; z < partyNum.length; z++) {
        output+=positions[partyNum[z]].value;
        if (z < partyNum.length - 1) {
          output+="/";
        }
      }
    } else {
      output=positions[partyNum].value;
    }
  }
  return output;
}

function wahlomat_dump_theses(allData, allPartyOccurences) {
  for (var i = 0; i < allData.length; i++) {
    var title = normalizeElectionName(allData[i].occasion.additionalData.texts);

    document.write("<table><tr><th><h2>" + allData[i].occasion.id + " - " + title + "</h2></th>");
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

function wahlomat_crunch_party_occurences(allPartys) {
  var partyName = "";
  var partyOccurencesPerParty = [];
  var partyOccurences = [];
  var partyOccurencesPerWOM = [];
  var curPartyId = -1;
  var curPartyOccurence = {};
  for (var x = 0; x < allPartys.length; x++) {
    for (var y = 0; y < allPartys[x].length; y++) {
      partyName = normalizePartyName(allPartys[x][y][0][1]);

      if (partyOccurencesPerParty[partyName] == undefined) {
        curPartyId = Object.keys(partyOccurencesPerParty).length;
        partyOccurencesPerParty[partyName] = {
          "id": curPartyId,
          "occurences": []
        };
      } else {
        curPartyId = partyOccurencesPerParty[partyName].id;
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
        "party_id": curPartyId,
        "long_name": allPartys[x][y][0][0]
      };
      partyOccurences.push(curPartyOccurence); // all occurrences in womts
      partyOccurencesPerParty[partyName].occurences[x] = curPartyOccurence;
      partyOccurencesPerWOM[x].push(curPartyOccurence);
    }
  }

  return {
    "all": partyOccurences,
    "perWOM": partyOccurencesPerWOM,
    "perParty": partyOccurencesPerParty
  };
}


function wahlomat_dump_json(convertedData, partyOccurences){
  document.write(JSON.stringify(convertedData));
}
