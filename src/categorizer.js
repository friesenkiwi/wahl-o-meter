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
