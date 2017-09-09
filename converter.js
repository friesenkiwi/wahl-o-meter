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
    allData[i].occasion.num = i;
  }
  var reallyAllData={"allData": allData, "allPartys": allPartys};
  return reallyAllData;
}

function wahlomat_dump_theses_general(reallyAllData) {
  document.write("<table>");

  dump_theses_mainheading(reallyAllData.partyOccurences.perParty);

  for (var i = 0; i < reallyAllData.allData.length; i++) { //all WOMs
    var partyIDNumMatching = [];

    dump_theses_heading(reallyAllData.partyOccurences,i,reallyAllData.allData[i].occasion,partyIDNumMatching);

    dump_theses_theses(reallyAllData.allData[i].theses, reallyAllData.partyOccurences.perParty, partyIDNumMatching);
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

function dump_theses_heading_categorized(allPartyOccurences,category,partyIDNumCategoryMatching){

  document.write("<tr>");

//  document.write("<th><h2>bla</h2></th>");

  mergedPartys=merge_partys_for_category(allPartyOccurences,category,partyIDNumCategoryMatching);

  for (var q = 0; q < mergedPartys.length; q++) {
    document.write("<th>");
    document.write(mergedPartys[q]);
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

function merge_partys_for_category(partyOccurences,category,partyIDNumCategoryMatching){
  var mergedPartys=[];
  if(partyOccurences!=undefined){
  for (var occurenceNum in partyOccurences.perCategory[category]) { // all parties
//    console.log(partyOccurences.perCategory[category][occurenceNum]);

//    mergedPartys.push(find_party(partyName,partyOccurences.perCategory[category],partyIDNumCategoryMatching));
  //  console.log(partyIDNumCategoryMatching);

  }
}
  return mergedPartys;
}

function find_party(partyName,partyOccurences,partyIDNumMatching){
  var partyNum = -1;
  var partyNameName="";
//  var partyNumIDMatching = [];

  if(partyOccurences!=undefined){
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
//    console.log(partyNameName);
    return partyNameName;
  } else {
    return partyName;
  }
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
        if(positions[partyNum[z]]!=undefined){
          output+=positions[partyNum[z]].value;
          if (z < partyNum.length - 1) {
            output+="/";
          }
        } else {
          output="";
        }
      }
    } else {
      if(positions[partyNum]!=undefined){
        output=positions[partyNum].value;
      } else {
        output="";
      }
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


function wahlomat_dump_categorized_theses(reallyAllData) {
//  console.log(reallyAllData);
  var categories=reallyAllData.categories;
  var dummyOccasion =
  {
    "id": 9999,
    "additionalData":{
      "texts":{
        "wahlomat_titelzeile":[
          "DUMMY"
        ]
      }
    }
  };
  var j=0;
  for (var category in categories) { // all categories
    document.write("<table><tr><th><h2>" + category + "</h2></th>");

      var partyIDNumCategoryMatching = [];
    //  console.log("before");

      dump_theses_heading_categorized(reallyAllData.partyOccurences,category,partyIDNumCategoryMatching);
    //  console.log(partyIDNumCategoryMatching);

      dump_theses_theses(reallyAllData.categorized[category], reallyAllData.partyOccurences.perParty, partyIDNumCategoryMatching);
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
  var allData=reallyAllData.allData;
  thesis_ids=[];
  categories=[];
  categorized=[];
  for (var x = 0; x < theses_categories.length; x++) {
    i=theses_categories[x].occasion_id;
    j=theses_categories[x].thesis_num;
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
  if(reallyAllData.theses!=undefined){
    for (var k = 0; k < reallyAllData.theses.length; k++) {
      var curCat=reallyAllData.theses[k].category;
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


function wahlomat_dump_json(convertedData, partyOccurences){
  document.write(JSON.stringify(convertedData));
}



// from https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript
function loadJSON(filename, callback) {
   var xobj = new XMLHttpRequest();
   xobj.overrideMimeType("application/json");
   xobj.open('GET', filename, true);
   xobj.onreadystatechange = function () {
     if (xobj.readyState == 4 && xobj.status == "200") {
       callback(xobj.responseText);
     }
   };
   xobj.send(null);
}
