'use strict'

const commandLineArgs = require('command-line-args')
const getUsage = require('command-line-usage')
const converter = require('./converter.js');
const exporter = require('./exporter.js');
const path = require('path');

// These datasets can be exported
const all_datasets = [
  "categories",
  "occasiondata",
  "occasions",
  "parties",
  "theses_categories"
];

const DEFAULT_DATA_DIR = path.join("..", "export");

// Command line options definition
const options = commandLineArgs([
  { name: 'verbose', alias: 'v', type: Boolean, defaultValue: false },
  { name: 'datasets', type: String, multiple: true, defaultOption: true,
    defaultValue: all_datasets },
  { name: 'csv', type:Boolean, defaultValue: false },
  { name: 'help', alias: 'h', type: Boolean },
  { name: 'target', alias: 't', type: String, defaultValue: DEFAULT_DATA_DIR }
]);


// Command line options usage description
// See https://github.com/75lb/command-line-usage
if (options.help) {
  const optionDefinitions = [
    {
      name: 'datasets',
      description: 'Names of datasets to export. See section `Datasets` below.',
      multiple: true,
      defaultOption: true,
      typeLabel: '[underline]{name} ...'
    },
    {
      name: 'verbose',
      description: 'Enable verbose output',
      alias: 'v',
      type: Boolean
    },
    {
      name: 'csv',
      description: 'Export all occastions and theses as csv',
      type: Boolean
    },
    {
      name: 'target',
      alias: 't',
      description: 'Target directory for saving files. Default is `../data/`.',
      type: String,
    },
    {
      name: 'help',
      alias: 'h',
      description: 'Display this help text',
      type: Boolean
    }
  ];

  const usageGuidelines = [
    {
      header: 'Wahl-o-Meter Export',
      content: "Digging up the data treasure of the Wahl-O-Mat"
    },
    {
      header: 'Options',
      optionList: optionDefinitions
    },
    {
      header: 'Datasets',
      content: [
        { name: 'categories', summary: 'Categories' },
        { name: 'occasiondata', summary: 'Theses and positions for all occasions' },
        { name: 'occasions', summary: 'Metadata for all occasions' },
        { name: 'parties', summary: 'Metadata for all parties' },
        { name: 'theses_categories', summary: 'Mapping of thesis IDs to categories' }
      ]
    },
    {
      header: 'Examples',
      content: [
        {
          desc: "Export all data to ../data/",
          example: '$ node main.js'
        },
        {
          desc: "Export all theses as CSV",
          exmaple: '$ node main.js occasiondata --csv'
        }
      ]
    }
  ];

  console.log(getUsage(usageGuidelines));

} else {
  console.log("Exporting " + options.datasets.join());

  // Convert and merge data here
  converter.load_data_by_occasionfile("../data/occasions.json", options, function(loadedData) {
    var convertedData = converter.wahlomat_convert_theses(loadedData.raw);
    convertedData = convertedData.concat(loadedData.additional);
    var data = converter.merge_positions(convertedData);

    // data = converter.crunch_party_occurences(mergedData);

    // Select and export data
    options.datasets.map(n => {
      if (all_datasets.includes(n)) {
        if (options.verbose) console.log(`Exporting ${n}...`);
        exporter[n](data, options);
      } else {
        console.log(`Requested dataset ${n} unknown.`);
      }
    });
  });
}


