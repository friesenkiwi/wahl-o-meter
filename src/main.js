'use strict'

const converter = require('./converter.js');

converter.load_data_by_occasionfile("../data/occasions.json", function(loadedData) {
  let convertedData = converter.wahlomat_convert_theses(loadedData.raw);
  convertedData = convertedData.concat(loadedData.additional);
  let mergedData = converter.merge_positions(convertedData);

  console.log(mergedData);

  converter.dump_json(mergedData);
});
