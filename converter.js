
allData=[];

function wahlomat_collect(year, parliament){
  allData.push({"wahlomat":{"id": WAHLOMATEN_ID, "year":year, "parliament":parliament, "texts":WOMT_aTexte}, "theses":{"theses": WOMT_aThesen,"topics":WOMT_aThemen, "theses_topics":WOMT_aThesenThema},"positions":{"positions":WOMT_aThesenParteien,"positionTexts": WOMT_aThesenParteienText}, "partys": {"partys":WOMT_aParteien, "web":WOMT_aParteienURL}});
  WOMT_aThesen=undefined;
  WOMT_aThesenParteien=undefined;
  WOMT_aThesenParteienText=undefined;
  WOMT_aThemen=undefined;
  WOMT_aParteien=undefined;
  WOMT_aThesenThema=undefined;
  WOMT_aParteienURL=undefined;
  WOMT_aTexte=undefined;
}
