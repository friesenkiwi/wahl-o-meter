
var module = {}; // node.js shim/mimic for use in browser

function require(someString){}

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
  document.write("<table>");
  for (var p = 0; p < reallyAllData.partyMeta.length; p++) { //all parties
    var occurences = reallyAllData.partyOccurences.perParty[reallyAllData.partyMeta[p].name];
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
