
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

function wahlomat_convert_theses(allData){
  var convertedData=[];
  var curWOM;
  var currentThesis={}; //converted
  var curThe; //original
  for (var i = 0; i < allData.length; i++) {
    curWOM=allData[i];
    var theses=[];

    for(var j = 0; j < curWOM.theses.theses.length; j++) {
      curThe=curWOM.theses.theses[j][0];
    //  console.log(curThe);
      if(curThe[0]==curThe[1]){
        curThe[0]="";
      }
      currentThesis={"title":curThe[0], "description":curThe[1]};

      theses.push(currentThesis);
    }
    curWOM.theses=theses;

    convertedData.push(curWOM);
  }
  return convertedData;
}

function wahlomat_merge_positions(allData,allPartys){
  for (var i = 0; i < allData.length; i++) {
    allPartys.push(allData[i].partys.partys);  // use url here as well

    for (var j = 0; j < allData[i].theses.length; j++) {
      var positions = [];
      var positionTexts = allData[i].positions.positionTexts[j];

      allData[i].theses[j]={"title":allData[i].theses[j].title, "description":allData[i].theses[j].description, "positions":positions};

      for (var x = 0; x < allData[i].partys.partys.length; x++){
        var partyShort = allData[i].partys.partys[x][0][1];

        allData[i].theses[j].positions.push({"value":allData[i].positions.positions[j][x], "text": allData[i].positions.positionTexts[j][x][0], "party": partyShort});
      }
    }
    allData[i]={"theses":allData[i].theses, "wahlomat":allData[i].wahlomat};
  }
  return allData;
}

function wahlomat_dump_theses(allData,allPartyOccurences){
  for (var i = 0; i < allData.length; i++) {
    var title="";
    if(allData[i].wahlomat.texts["wahlomat_titelzeile"]!=undefined){
      title=allData[i].wahlomat.texts["wahlomat_titelzeile"][0];
    }else if (allData[i].wahlomat.texts["wahlomat_head_titel"]!=undefined) {
      title=allData[i].wahlomat.texts["wahlomat_head_titel"][0];
    }
    document.write("<table><tr><th><h2>"+allData[i].wahlomat.id+" - "+title+"</h2></th>");
    for (var x = 0; x < allPartyOccurences.perWOM[i].length; x++) {
      
      document.write("<th>"+allPartyOccurences.perWOM[i][x].name+"</th>");
    }

    document.write("</tr><tr>");

    for (var j = 0; j < allData[i].theses.length; j++) {
      var curThe=allData[i].theses[j];
      document.write("<td>"+curThe.title +": "+curThe.description+"</td>");
      for (var x = 0; x < curThe.positions.length; x++) {
        document.write("<td>"+curThe.positions[x].value+"</td>");
      }
      document.write("</tr>");
    }
    document.write("</table>");

  }


}

function normalizePartyName(partyName){
  partyName=partyName.toUpperCase();

  partyName=partyName.trim();

  if(partyName.includes("GRÜNE") || partyName.includes("GR&UUML;NE")){
    partyName="GRÜNE";
  } else if (partyName.includes("FREIE WÄHLER") || partyName.includes("FREIE W&AUML;HLER")) {
    partyName="FREIE WÄHLER";
  } else if (partyName.includes("CDU") || partyName.includes("CSU")) {
    partyName="CDU/CSU";
  } else if (partyName.includes("DIE LINKE") || partyName.includes("PDS")) {
    partyName="DIE LINKE";
  }
  return partyName;
}

function wahlomat_dump_party_occurences(allPartyOccurences){

  document.write("<table>");
  for (var x = 0; x < allPartyOccurences.all.length; x++){
    document.write("<tr><td>"+allPartyOccurences.all[x].id+" "+allPartyOccurences.all[x].name+"</td></tr>");
  }

  document.write("</table>");
}

function wahlomat_crunch_party_occurences(allPartys){
  var partyName="";
  var partyOccurencesPerParty=[];
  var partyOccurences=[];
  var partyOccurencesPerWOM=[];
  var curPartyId=-1;
  var curPartyOccurence={};
  for (var x = 0; x < allPartys.length; x++){
    for (var y = 0; y < allPartys[x].length; y++){
      partyName=normalizePartyName(allPartys[x][y][0][1]);

      if(partyOccurencesPerParty[partyName]==undefined){
        curPartyId=Object.keys(partyOccurencesPerParty).length;
        partyOccurencesPerParty[partyName]={"id":curPartyId, "occurences":[]};
      }

      if(partyOccurencesPerWOM[x]==undefined){
        partyOccurencesPerWOM[x]=[];
      }

      curPartyOccurence={"id":""+x+"-"+y,"wom-num":x,"party-num":y, "name":partyName,"party-id": curPartyId,"long-name":allPartys[x][y][0][0]};
      partyOccurences.push(curPartyOccurence); // all occurrences in womts
      partyOccurencesPerParty[partyName].occurences[x]=curPartyOccurence;
      partyOccurencesPerWOM[x].push(curPartyOccurence);
    }
  }

  return {"all":partyOccurences,"perWOM":partyOccurencesPerWOM,"perParty":partyOccurencesPerParty};
}
