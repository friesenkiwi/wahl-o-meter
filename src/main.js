/*jslint node: true */

"use strict";

const commandLineArgs = require('command-line-args');
const getUsage = require('command-line-usage');
const options = require('./options.js');
const converter = require('./converter.js');
const exporter = require('./exporter.js');

// Read command line options and make available on `global.argv`
global.argv = commandLineArgs(options.commandLineOptions);

// Command line options usage description
// See https://github.com/75lb/command-line-usage
if (global.argv.help) {
  console.log(getUsage(options.usageGuidelines));

} else {
  console.log("Exporting " + global.argv.datasets.join());

  // Convert and merge data here
  converter.load_data_by_occasionfile("../data/occasions.json", function(loadedData) {
    let convertedData = converter.wahlomat_convert_theses(loadedData.raw);
    convertedData = convertedData.concat(loadedData.additional);
    const orderedData = converter.order_data(convertedData);
    const mergedData = converter.merge_positions(convertedData);
    const data = converter.crunch_party_occurences(mergedData);

    // Select and export data
    global.argv.datasets.map(n => {
      if (options.allDatasets.includes(n)) {
        if (global.argv.verbose) console.log(`Exporting ${n}...`);
        exporter[n](data);
      } else {
        console.log(`Requested dataset ${n} unknown.`);
      }
    });
  });
}
