"use strict";

const path = require('path');

// These datasets can be exported
const allDatasets = [
  "categories",
  "categorized",
  "occasiondata",
  "occasions",
  "parties"
];

const DEFAULT_DATA_DIR = path.join("..", "export");

const commandLineOptions = [
  { name: 'verbose', alias: 'v', type: Boolean, defaultValue: false },
  { name: 'datasets', type: String, multiple: true, defaultOption: true,
    defaultValue: allDatasets },
  { name: 'csv', type:Boolean, defaultValue: false },
  { name: 'help', alias: 'h', type: Boolean },
  { name: 'target', alias: 't', type: String, defaultValue: DEFAULT_DATA_DIR }
];

const optionDescriptions = [
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
  description: 'Export all occasions and theses as csv',
  type: Boolean
},
{
  name: 'target',
  alias: 't',
  description: 'Target directory for saving files. Default is `../export/`.',
  type: String
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
    optionList: optionDescriptions
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

module.exports = {
  allDatasets,
  DEFAULT_DATA_DIR,
  usageGuidelines,
  commandLineOptions
};
