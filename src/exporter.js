"use strict";

const fs = require('fs');
const path = require('path');

// Write exports to this directory
const DATA_DIR = path.join("..", "data");

// Keep command line options in module level scope by assigning to this variable
var moptions;

module.exports = {};


module.exports.categories = function(data) {
  console.log("Categories export not supported yet");
};


module.exports.occasiondata = function(data) {
  write_to_disk(
    stringify(data.occasions, global.argv.csv),
    "occasionsdata" + (global.argv.csv ? ".csv" : ".json")
  );
};


module.exports.occasions = function(data) {
  // Remove theses from occasion data
  const occasions = data.occasions.map(occasion => occasion.occasion);
  write_to_disk(stringify(occasions), "occasions.json");
};


module.exports.parties = function(data) {
  write_to_disk(stringify(data.parties), "parties.json");
};


module.exports.theses_categories = function(data) {
  console.log("Theses_categories export not supported yet")
};


function write_to_disk(out, fname) {
  const fpath = path.join(global.argv.target, fname);
  fs.writeFile(fpath, out, 'utf8', function(err) {
    if (err) {
      console.log("Error writing " + fpath + "\n" + err);
    } else {
      if (global.argv.verbose) console.log("File " + fpath + " saved");
    }
  });
};

function stringify(data, enable_csv = false) {
  if (enable_csv) {
    console.log("Export as CSV")
    return to_csv(data);
  } else {
    return JSON.stringify(data, null, 2);
  }
};

function to_csv(occasions) {
  var allTheses = [];
  var csvRows = [];
  var i = 0;
  for (var o = 0; o < occasions.length; o++) { //all WOMs
    for (var t = 0; t < occasions[o].theses.length; t++) { //all Theses
      var curThe = [
        i,
        occasions[o].occasion.occasion_id,
        o,
        occasions[o].occasion.territory,
        occasions[o].occasion.date,
        t,
        occasions[o].theses[t].title,
        occasions[o].theses[t].text
      ];
      allTheses.push(curThe);
      csvRows.push(curThe.join('\t'));
      i++;
    }
  }
  var csvString = csvRows.join("\n");
  return csvString;
}
