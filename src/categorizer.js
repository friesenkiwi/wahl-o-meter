var fs = require('fs');

function categorize_theses(mergedData, theses_categories) {
  var occasions = mergedData.occasions;
  thesis_ids = [];
  categories = [];
  categorized = [];
  for (var tc = 0; tc < theses_categories.length; tc++) {
    i = theses_categories[tc].occasion_num;
    t = theses_categories[tc].thesis_num;

    if (occasions[i].theses[t] != undefined) {
      occasions[i].theses[t].category = theses_categories[tc].category;
      occasions[i].theses[t].thesis_id = theses_categories[tc].thesis_id;
      occasions[i].theses[t].thesis_num = theses_categories[tc].thesis_num;
      occasions[i].theses[t].occasion = occasions[i].occasion;
      thesis_ids[theses_categories[tc].thesis_id] = occasions[i].theses[t];


      if (categories[theses_categories[tc].category] == undefined) {
        categories[theses_categories[tc].category] = [];
        categorized[theses_categories[tc].category] = [];
      }

      categories[theses_categories[tc].category].push(theses_categories[tc].thesis_id);
      categorized[theses_categories[tc].category].push(occasions[i].theses[t]);
    }
  }

  var categorizedData = {};

  categorizedData.occasions = occasions;
  categorizedData.theses = thesis_ids;
  categorizedData.categories = categories;
  categorizedData.categorized = categorized;

  return categorizedData;
}

/**
 * Return object with categories as keys and theses as values
 *
 * @param {object}   data     occasiondata object with `occasions` key
 * @param {Function} callback Callback receives categorized theses as param
 */
function add_categories(data, callback) {
  // Collect all theses by ID
  const theses_by_id = {};
  data.occasions.forEach(occ => occ.theses.forEach(thesis => {
    theses_by_id[thesis.id] = thesis;
  }));

  load_category_mappings(tcMappings => {
    const rv = {};
    let cur_id;

    // Assign related theses to each category
    tcMappings.forEach(tc => {
      // Initialise theses array for each category
      if (!Object.keys(rv).includes(tc.category)) rv[tc.category] = [];

      cur_id = `WOM-${tc.occasion_num}-${tc.thesis_num}`;

      if (theses_by_id[cur_id] == undefined) {
        console.log(`Thesis ${cur_id} not found in occasiondata`);
      } else {
        // Add thesis to category key in return value
        rv[tc.category].push({
          "id": cur_id,
          "title": theses_by_id[cur_id].title,
          "text": theses_by_id[cur_id].text,
        });
      }
    });
    callback(rv);
  });
}

/**
 * Load mapping of categories to theses from disk
 *
 * @param  {Function} callback Receives return value as callback parameter
 * @return {[object]}            Array of thesis_category mapping objects
 */
function load_category_mappings(callback) {
  cat_fpath = "../data/theses_categories.json";
  fs.readFile(cat_fpath, 'utf-8', function(err, response) {
    if (err) console.log("Error loading theses_categories from disk\n" + err);
    callback(JSON.parse(response));
  });
}

module.exports = {
  add_categories
};
