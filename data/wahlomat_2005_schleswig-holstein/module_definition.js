  var WOMT_aTexte=new Array();
  var WOMT_aBilder=new Array();
  var WOMT_nParteien=0;
  var WOMT_nThesen=0;
  var WOMT_nThemen=0;
  var WOMT_aSprachen_ID2Bez=new Array();
  var WOMT_aSprachen_ID2N=new Array();
  var WOMT_aSprachen_N2ID=new Array();
  var WOMT_aParteien_ID2N=new Array();
  var WOMT_aParteien_N2ID=new Array();
  var WOMT_aThesen_ID2N=new Array();
  var WOMT_aThesen_N2ID=new Array();
  var WOMT_aThemen_ID2N=new Array();
  var WOMT_aThemen_N2ID=new Array();
  var WOMT_aThesen=new Array();
  var WOMT_aThesenBilder=new Array();
  var WOMT_aThesenThema=new Array();
  var WOMT_aParteienURL=new Array();
  var WOMT_aParteienLogos=new Array();
  var WOMT_aParteienLogos2=new Array();
  var WOMT_aParteien=new Array();
  var WOMT_aThemen=new Array();
  var WOMT_aThesenParteien=new Array();
  var WAHLOMATEN_ID=1;
  var WOMT_nTableWidth=611-20;
  var WOMT_aThesenParteienText=new Array();
  var WOMT_aLaender=new Array();
  WOMT_aLaender[0]=new Array("0"," -- keine Angabe");
  WOMT_aLaender[1]=new Array("2","Bayern");
  WOMT_aLaender[2]=new Array("0","");
  WOMT_aLaender[3]=new Array("1","Baden-Württemberg");
  WOMT_aLaender[4]=new Array("3","Berlin");
  WOMT_aLaender[5]=new Array("4","Brandenburg");
  WOMT_aLaender[6]=new Array("5","Bremen");
  WOMT_aLaender[7]=new Array("6","Hamburg");
  WOMT_aLaender[8]=new Array("7","Hessen");
  WOMT_aLaender[9]=new Array("8","Mecklenburg-Vorpommern");
  WOMT_aLaender[10]=new Array("9","Niedersachsen");
  WOMT_aLaender[11]=new Array("10","Nordrhein-Westfalen");
  WOMT_aLaender[12]=new Array("11","Rheinland-Pfalz");
  WOMT_aLaender[13]=new Array("12","Sachsen");
  WOMT_aLaender[14]=new Array("13","Sachsen-Anhalt");
  WOMT_aLaender[15]=new Array("14","Saarland");
  WOMT_aLaender[16]=new Array("15","Schleswig-Holstein");
  WOMT_aLaender[17]=new Array("16","Thüringen");
  WOMT_aLaender[18]=new Array("0","");
  WOMT_aLaender[19]=new Array("17","außerhalb Deutschlands");




WAHLOMATEN_ID='6';
/*
  --------------------------------------------------------------
  Vordefinieren der in den Templates gefunden assoziativen Keys
  mit denenen auf WOMT_aTexte und WOMT_aBilder zugriffen wird
  nicht vorhanden Indexe f�hren in Javascript sonst zu Fehlern!

  Wenn mit Variablen auf die assoziativen Arrays zugegriffen wird
  kann dies nicht automatisch analsysit werden,
  die Variablen werden aber zur Erinnuner im output angezeigt!
  --------------------------------------------------------------
*/
WOMT_aBilder['fragen_0_0']=new Array();
WOMT_aBilder['fragen_0_0'][0]='';
WOMT_aBilder['fragen_0_0'][1]='';
WOMT_aBilder['fragen_0_0'][2]='';
WOMT_aBilder['fragen_0_1']=new Array();
WOMT_aBilder['fragen_0_1'][0]='';
WOMT_aBilder['fragen_0_1'][1]='';
WOMT_aBilder['fragen_0_1'][2]='';
WOMT_aBilder['fragen_1_0']=new Array();
WOMT_aBilder['fragen_1_0'][0]='';
WOMT_aBilder['fragen_1_0'][1]='';
WOMT_aBilder['fragen_1_0'][2]='';
WOMT_aBilder['fragen_1_1']=new Array();
WOMT_aBilder['fragen_1_1'][0]='';
WOMT_aBilder['fragen_1_1'][1]='';
WOMT_aBilder['fragen_1_1'][2]='';
WOMT_aBilder['fragen_2_0']=new Array();
WOMT_aBilder['fragen_2_0'][0]='';
WOMT_aBilder['fragen_2_0'][1]='';
WOMT_aBilder['fragen_2_0'][2]='';
WOMT_aBilder['fragen_2_1']=new Array();
WOMT_aBilder['fragen_2_1'][0]='';
WOMT_aBilder['fragen_2_1'][1]='';
WOMT_aBilder['fragen_2_1'][2]='';
WOMT_aBilder['fragen_3_0']=new Array();
WOMT_aBilder['fragen_3_0'][0]='';
WOMT_aBilder['fragen_3_0'][1]='';
WOMT_aBilder['fragen_3_0'][2]='';
WOMT_aBilder['fragen_3_1']=new Array();
WOMT_aBilder['fragen_3_1'][0]='';
WOMT_aBilder['fragen_3_1'][1]='';
WOMT_aBilder['fragen_3_1'][2]='';
WOMT_aBilder['fragen_0']=new Array();
WOMT_aBilder['fragen_0'][0]='';
WOMT_aBilder['fragen_0'][1]='';
WOMT_aBilder['fragen_0'][2]='';
WOMT_aBilder['fragen_1']=new Array();
WOMT_aBilder['fragen_1'][0]='';
WOMT_aBilder['fragen_1'][1]='';
WOMT_aBilder['fragen_1'][2]='';
WOMT_aBilder['fragen_2']=new Array();
WOMT_aBilder['fragen_2'][0]='';
WOMT_aBilder['fragen_2'][1]='';
WOMT_aBilder['fragen_2'][2]='';
WOMT_aBilder['fragen_3']=new Array();
WOMT_aBilder['fragen_3'][0]='';
WOMT_aBilder['fragen_3'][1]='';
WOMT_aBilder['fragen_3'][2]='';
WOMT_aSprachen_ID2Bez[1]='Deutsch';
WOMT_aSprachen_ID2Bez[2]='Englisch';
WOMT_aSprachen_ID2Bez[3]='Französisch';
WOMT_aSprachen_ID2Bez[4]='Italienisch';
WOMT_aSprachen_ID2Bez[5]='Türkisch';
WOMT_aSprachen_ID2Bez[6]='Russisch';
WOMT_aSprachen_ID2Bez[7]='Sorbisch';
WOMT_aSprachen_ID2Bez[8]='Daenisch';




WOMT_aTexte['wahlomat_titelzeile']=new Array();
WOMT_aTexte['wahlomat_titelzeile'][0]='';
WOMT_aTexte['wahlomat_titelzeile'][1]='';
WOMT_aTexte['fragen_von']=new Array();
WOMT_aTexte['fragen_von'][0]='';
WOMT_aTexte['fragen_von'][1]='';
WOMT_aTexte['fragen_these']=new Array();
WOMT_aTexte['fragen_these'][0]='';
WOMT_aTexte['fragen_these'][1]='';
WOMT_aTexte['bpb_bezeichnung']=new Array();
WOMT_aTexte['bpb_bezeichnung'][0]='';
WOMT_aTexte['bpb_bezeichnung'][1]='';
WOMT_aTexte['fragen_zustimmung']=new Array();
WOMT_aTexte['fragen_zustimmung'][0]='';
WOMT_aTexte['fragen_zustimmung'][1]='';
WOMT_aTexte['fragen_neutral']=new Array();
WOMT_aTexte['fragen_neutral'][0]='';
WOMT_aTexte['fragen_neutral'][1]='';
WOMT_aTexte['fragen_ablehnung']=new Array();
WOMT_aTexte['fragen_ablehnung'][0]='';
WOMT_aTexte['fragen_ablehnung'][1]='';
WOMT_aTexte['fragen_keine_meinung']=new Array();
WOMT_aTexte['fragen_keine_meinung'][0]='';
WOMT_aTexte['fragen_keine_meinung'][1]='';
WOMT_aTexte['wahlomat_faq']=new Array();
WOMT_aTexte['wahlomat_faq'][0]='';
WOMT_aTexte['wahlomat_faq'][1]='';
WOMT_aTexte['wahlomat_email']=new Array();
WOMT_aTexte['wahlomat_email'][0]='';
WOMT_aTexte['wahlomat_email'][1]='';
WOMT_aTexte['extern_bpb_wahlomat_url']=new Array();
WOMT_aTexte['extern_bpb_wahlomat_url'][0]='';
WOMT_aTexte['extern_bpb_wahlomat_url'][1]='';
WOMT_aTexte['wahlomat_info']=new Array();
WOMT_aTexte['wahlomat_info'][0]='';
WOMT_aTexte['wahlomat_info'][1]='';
WOMT_aTexte['wahlomat_impressum']=new Array();
WOMT_aTexte['wahlomat_impressum'][0]='';
WOMT_aTexte['wahlomat_impressum'][1]='';
WOMT_aTexte['fragen_zurueck']=new Array();
WOMT_aTexte['fragen_zurueck'][0]='';
WOMT_aTexte['fragen_zurueck'][1]='';
WOMT_aTexte['fragen_vor']=new Array();
WOMT_aTexte['fragen_vor'][0]='';
WOMT_aTexte['fragen_vor'][1]='';
WOMT_aTexte['wahlomat_auszeichnung']=new Array();
WOMT_aTexte['wahlomat_auszeichnung'][0]='';
WOMT_aTexte['wahlomat_auszeichnung'][1]='';
WOMT_aTexte['fragen_bogus']=new Array();
WOMT_aTexte['fragen_bogus'][0]='';
WOMT_aTexte['fragen_bogus'][1]='';
WOMT_aTexte['intro_willkommen']=new Array();
WOMT_aTexte['intro_willkommen'][0]='';
WOMT_aTexte['intro_willkommen'][1]='';
WOMT_aTexte['intro_kasten_absatz1']=new Array();
WOMT_aTexte['intro_kasten_absatz1'][0]='';
WOMT_aTexte['intro_kasten_absatz1'][1]='';
WOMT_aTexte['intro_kasten_absatz2']=new Array();
WOMT_aTexte['intro_kasten_absatz2'][0]='';
WOMT_aTexte['intro_kasten_absatz2'][1]='';
WOMT_aTexte['intro_kasten_absatz3']=new Array();
WOMT_aTexte['intro_kasten_absatz3'][0]='';
WOMT_aTexte['intro_kasten_absatz3'][1]='';
WOMT_aTexte['intro_start']=new Array();
WOMT_aTexte['intro_start'][0]='';
WOMT_aTexte['intro_start'][1]='';
WOMT_aTexte['ausw_detail_klein_pfeil']=new Array();
WOMT_aTexte['ausw_detail_klein_pfeil'][0]='';
WOMT_aTexte['ausw_detail_klein_pfeil'][1]='';
WOMT_aTexte['ausw_detail_gross_pfeil']=new Array();
WOMT_aTexte['ausw_detail_gross_pfeil'][0]='';
WOMT_aTexte['ausw_detail_gross_pfeil'][1]='';
WOMT_aTexte['auswertung_thesenvergleich']=new Array();
WOMT_aTexte['auswertung_thesenvergleich'][0]='';
WOMT_aTexte['auswertung_thesenvergleich'][1]='';
WOMT_aTexte['auswertung_link_zu_statistik']=new Array();
WOMT_aTexte['auswertung_link_zu_statistik'][0]='';
WOMT_aTexte['auswertung_link_zu_statistik'][1]='';
WOMT_aTexte['wahlomat_zurueck']=new Array();
WOMT_aTexte['wahlomat_zurueck'][0]='';
WOMT_aTexte['wahlomat_zurueck'][1]='';
WOMT_aTexte['wahlomat_neu_starten']=new Array();
WOMT_aTexte['wahlomat_neu_starten'][0]='';
WOMT_aTexte['wahlomat_neu_starten'][1]='';
WOMT_aTexte['weitere_informationen_ueber_eu']=new Array();
WOMT_aTexte['weitere_informationen_ueber_eu'][0]='';
WOMT_aTexte['weitere_informationen_ueber_eu'][1]='';
WOMT_aTexte['auswertung_titel']=new Array();
WOMT_aTexte['auswertung_titel'][0]='';
WOMT_aTexte['auswertung_titel'][1]='';
WOMT_aTexte['auswertung_text']=new Array();
WOMT_aTexte['auswertung_text'][0]='';
WOMT_aTexte['auswertung_text'][1]='';
WOMT_aTexte['auswertung_csu_hinweis']=new Array();
WOMT_aTexte['auswertung_csu_hinweis'][0]='';
WOMT_aTexte['auswertung_csu_hinweis'][1]='';
WOMT_aTexte['auswertung_text2']=new Array();
WOMT_aTexte['auswertung_text2'][0]='';
WOMT_aTexte['auswertung_text2'][1]='';
WOMT_aTexte['auswertung_uebereinstimmung']=new Array();
WOMT_aTexte['auswertung_uebereinstimmung'][0]='';
WOMT_aTexte['auswertung_uebereinstimmung'][1]='';
WOMT_aTexte['auswertung_uebereinstimmung_klein']=new Array();
WOMT_aTexte['auswertung_uebereinstimmung_klein'][0]='';
WOMT_aTexte['auswertung_uebereinstimmung_klein'][1]='';
WOMT_aTexte['auswertung_uebereinstimmung_gross']=new Array();
WOMT_aTexte['auswertung_uebereinstimmung_gross'][0]='';
WOMT_aTexte['auswertung_uebereinstimmung_gross'][1]='';
WOMT_aTexte['auswertung_andere_user']=new Array();
WOMT_aTexte['auswertung_andere_user'][0]='';
WOMT_aTexte['auswertung_andere_user'][1]='';
WOMT_aTexte['gewichtung_ergebnis']=new Array();
WOMT_aTexte['gewichtung_ergebnis'][0]='';
WOMT_aTexte['gewichtung_ergebnis'][1]='';
WOMT_aTexte['gewichtung_text']=new Array();
WOMT_aTexte['gewichtung_text'][0]='';
WOMT_aTexte['gewichtung_text'][1]='';
WOMT_aTexte['impressum_inhalt']=new Array();
WOMT_aTexte['impressum_inhalt'][0]='';
WOMT_aTexte['impressum_inhalt'][1]='';
WOMT_aTexte['fenster_schliessen']=new Array();
WOMT_aTexte['fenster_schliessen'][0]='';
WOMT_aTexte['fenster_schliessen'][1]='';
WOMT_aTexte['faq_frage1_frage']=new Array();
WOMT_aTexte['faq_frage1_frage'][0]='';
WOMT_aTexte['faq_frage1_frage'][1]='';
WOMT_aTexte['faq_frage2_frage']=new Array();
WOMT_aTexte['faq_frage2_frage'][0]='';
WOMT_aTexte['faq_frage2_frage'][1]='';
WOMT_aTexte['faq_frage3_frage']=new Array();
WOMT_aTexte['faq_frage3_frage'][0]='';
WOMT_aTexte['faq_frage3_frage'][1]='';
WOMT_aTexte['faq_frage4_frage']=new Array();
WOMT_aTexte['faq_frage4_frage'][0]='';
WOMT_aTexte['faq_frage4_frage'][1]='';
WOMT_aTexte['faq_frage5_frage']=new Array();
WOMT_aTexte['faq_frage5_frage'][0]='';
WOMT_aTexte['faq_frage5_frage'][1]='';
WOMT_aTexte['faq_frage6_frage']=new Array();
WOMT_aTexte['faq_frage6_frage'][0]='';
WOMT_aTexte['faq_frage6_frage'][1]='';
WOMT_aTexte['faq_frage7_frage']=new Array();
WOMT_aTexte['faq_frage7_frage'][0]='';
WOMT_aTexte['faq_frage7_frage'][1]='';
WOMT_aTexte['faq_frage1_antwort']=new Array();
WOMT_aTexte['faq_frage1_antwort'][0]='';
WOMT_aTexte['faq_frage1_antwort'][1]='';
WOMT_aTexte['faq_zu_den_fragen']=new Array();
WOMT_aTexte['faq_zu_den_fragen'][0]='';
WOMT_aTexte['faq_zu_den_fragen'][1]='';
WOMT_aTexte['faq_frage2_antwort']=new Array();
WOMT_aTexte['faq_frage2_antwort'][0]='';
WOMT_aTexte['faq_frage2_antwort'][1]='';
WOMT_aTexte['faq_frage3_antwort']=new Array();
WOMT_aTexte['faq_frage3_antwort'][0]='';
WOMT_aTexte['faq_frage3_antwort'][1]='';
WOMT_aTexte['faq_frage4_antwort']=new Array();
WOMT_aTexte['faq_frage4_antwort'][0]='';
WOMT_aTexte['faq_frage4_antwort'][1]='';
WOMT_aTexte['faq_frage5_antwort']=new Array();
WOMT_aTexte['faq_frage5_antwort'][0]='';
WOMT_aTexte['faq_frage5_antwort'][1]='';
WOMT_aTexte['faq_frage6_antwort']=new Array();
WOMT_aTexte['faq_frage6_antwort'][0]='';
WOMT_aTexte['faq_frage6_antwort'][1]='';
WOMT_aTexte['faq_frage7_antwort']=new Array();
WOMT_aTexte['faq_frage7_antwort'][0]='';
WOMT_aTexte['faq_frage7_antwort'][1]='';
WOMT_aTexte['faq_weitere_informationen']=new Array();
WOMT_aTexte['faq_weitere_informationen'][0]='';
WOMT_aTexte['faq_weitere_informationen'][1]='';
WOMT_aTexte['faq_erklaerung_wahlomat']=new Array();
WOMT_aTexte['faq_erklaerung_wahlomat'][0]='';
WOMT_aTexte['faq_erklaerung_wahlomat'][1]='';
WOMT_aTexte['faq_wahlhilfe']=new Array();
WOMT_aTexte['faq_wahlhilfe'][0]='';
WOMT_aTexte['faq_wahlhilfe'][1]='';
WOMT_aTexte['faq_parteien']=new Array();
WOMT_aTexte['faq_parteien'][0]='';
WOMT_aTexte['faq_parteien'][1]='';
WOMT_aTexte['faq_erklaerung_faq']=new Array();
WOMT_aTexte['faq_erklaerung_faq'][0]='';
WOMT_aTexte['faq_erklaerung_faq'][1]='';
WOMT_aTexte['faq_fragen_zum_wahlomat']=new Array();
WOMT_aTexte['faq_fragen_zum_wahlomat'][0]='';
WOMT_aTexte['faq_fragen_zum_wahlomat'][1]='';
WOMT_aTexte['ausw_details_benutzer_zustimmung']=new Array();
WOMT_aTexte['ausw_details_benutzer_zustimmung'][0]='';
WOMT_aTexte['ausw_details_benutzer_zustimmung'][1]='';
WOMT_aTexte['ausw_details_benutzer_neutral']=new Array();
WOMT_aTexte['ausw_details_benutzer_neutral'][0]='';
WOMT_aTexte['ausw_details_benutzer_neutral'][1]='';
WOMT_aTexte['ausw_details_benutzer_ablehnung']=new Array();
WOMT_aTexte['ausw_details_benutzer_ablehnung'][0]='';
WOMT_aTexte['ausw_details_benutzer_ablehnung'][1]='';
WOMT_aTexte['ausw_details_benutzer_keine_meinung']=new Array();
WOMT_aTexte['ausw_details_benutzer_keine_meinung'][0]='';
WOMT_aTexte['ausw_details_benutzer_keine_meinung'][1]='';
WOMT_aTexte['ausw_details_partei_zustimmung']=new Array();
WOMT_aTexte['ausw_details_partei_zustimmung'][0]='';
WOMT_aTexte['ausw_details_partei_zustimmung'][1]='';
WOMT_aTexte['ausw_details_partei_neutral']=new Array();
WOMT_aTexte['ausw_details_partei_neutral'][0]='';
WOMT_aTexte['ausw_details_partei_neutral'][1]='';
WOMT_aTexte['ausw_details_partei_ablehnung']=new Array();
WOMT_aTexte['ausw_details_partei_ablehnung'][0]='';
WOMT_aTexte['ausw_details_partei_ablehnung'][1]='';
WOMT_aTexte['ausw_details_partei_keine_meinung']=new Array();
WOMT_aTexte['ausw_details_partei_keine_meinung'][0]='';
WOMT_aTexte['ausw_details_partei_keine_meinung'][1]='';
WOMT_aTexte['ausw_detail_thesenvergleich']=new Array();
WOMT_aTexte['ausw_detail_thesenvergleich'][0]='';
WOMT_aTexte['ausw_detail_thesenvergleich'][1]='';
WOMT_aTexte['ausw_detail_auswaehlen']=new Array();
WOMT_aTexte['ausw_detail_auswaehlen'][0]='';
WOMT_aTexte['ausw_detail_auswaehlen'][1]='';
WOMT_aTexte['ausw_detail_text_popup']=new Array();
WOMT_aTexte['ausw_detail_text_popup'][0]='';
WOMT_aTexte['ausw_detail_text_popup'][1]='';
WOMT_aTexte['ausw_detail_text']=new Array();
WOMT_aTexte['ausw_detail_text'][0]='';
WOMT_aTexte['ausw_detail_text'][1]='';
WOMT_aTexte['ausw_detail_these']=new Array();
WOMT_aTexte['ausw_detail_these'][0]='';
WOMT_aTexte['ausw_detail_these'][1]='';
WOMT_aTexte['ausw_detail_siedu']=new Array();
WOMT_aTexte['ausw_detail_siedu'][0]='';
WOMT_aTexte['ausw_detail_siedu'][1]='';
WOMT_aTexte['ausw_detail_partei']=new Array();
WOMT_aTexte['ausw_detail_partei'][0]='';
WOMT_aTexte['ausw_detail_partei'][1]='';
WOMT_aTexte['ausw_detail_gross']=new Array();
WOMT_aTexte['ausw_detail_gross'][0]='';
WOMT_aTexte['ausw_detail_gross'][1]='';
WOMT_aTexte['ausw_detail_klein']=new Array();
WOMT_aTexte['ausw_detail_klein'][0]='';
WOMT_aTexte['ausw_detail_klein'][1]='';
WOMT_aTexte['wichtiger_hinweis_wichtiger_hinweis']=new Array();
WOMT_aTexte['wichtiger_hinweis_wichtiger_hinweis'][0]='';
WOMT_aTexte['wichtiger_hinweis_wichtiger_hinweis'][1]='';
WOMT_aTexte['wichtiger_hinweis_absatz1']=new Array();
WOMT_aTexte['wichtiger_hinweis_absatz1'][0]='';
WOMT_aTexte['wichtiger_hinweis_absatz1'][1]='';
WOMT_aTexte['wichtiger_hinweis_absatz2']=new Array();
WOMT_aTexte['wichtiger_hinweis_absatz2'][0]='';
WOMT_aTexte['wichtiger_hinweis_absatz2'][1]='';
WOMT_aTexte['wichtiger_hinweis_absatz3']=new Array();
WOMT_aTexte['wichtiger_hinweis_absatz3'][0]='';
WOMT_aTexte['wichtiger_hinweis_absatz3'][1]='';
WOMT_aTexte['wichtiger_hinweis_absatz4']=new Array();
WOMT_aTexte['wichtiger_hinweis_absatz4'][0]='';
WOMT_aTexte['wichtiger_hinweis_absatz4'][1]='';
WOMT_aTexte['statistik_titel']=new Array();
WOMT_aTexte['statistik_titel'][0]='';
WOMT_aTexte['statistik_titel'][1]='';
WOMT_aTexte['statistik_text']=new Array();
WOMT_aTexte['statistik_text'][0]='';
WOMT_aTexte['statistik_text'][1]='';
WOMT_aTexte['statistik_praeferenz']=new Array();
WOMT_aTexte['statistik_praeferenz'][0]='';
WOMT_aTexte['statistik_praeferenz'][1]='';
WOMT_aTexte['statistik_user']=new Array();
WOMT_aTexte['statistik_user'][0]='';
WOMT_aTexte['statistik_user'][1]='';
WOMT_aTexte['statistik_verteilung']=new Array();
WOMT_aTexte['statistik_verteilung'][0]='';
WOMT_aTexte['statistik_verteilung'][1]='';
WOMT_aTexte['statistik_summe']=new Array();
WOMT_aTexte['statistik_summe'][0]='';
WOMT_aTexte['statistik_summe'][1]='';
WOMT_aTexte['statistik_stand']=new Array();
WOMT_aTexte['statistik_stand'][0]='';
WOMT_aTexte['statistik_stand'][1]='';
WOMT_aTexte['parteien_these_these']=new Array();
WOMT_aTexte['parteien_these_these'][0]='';
WOMT_aTexte['parteien_these_these'][1]='';
WOMT_aTexte['parteien_these_sie']=new Array();
WOMT_aTexte['parteien_these_sie'][0]='';
WOMT_aTexte['parteien_these_sie'][1]='';
WOMT_aTexte['parteien_these_statement']=new Array();
WOMT_aTexte['parteien_these_statement'][0]='';
WOMT_aTexte['parteien_these_statement'][1]='';
WOMT_aTexte['parteien_thesen_kommtnoch']=new Array();
WOMT_aTexte['parteien_thesen_kommtnoch'][0]='';
WOMT_aTexte['parteien_thesen_kommtnoch'][1]='';
WOMT_aTexte['wahlomat_download']=new Array();
WOMT_aTexte['wahlomat_download'][0]='';
WOMT_aTexte['wahlomat_download'][1]='';
WOMT_aTexte['statistik_detail_titel']=new Array();
WOMT_aTexte['statistik_detail_titel'][0]='';
WOMT_aTexte['statistik_detail_titel'][1]='';
WOMT_aTexte['statistik_detail_titel_text']=new Array();
WOMT_aTexte['statistik_detail_titel_text'][0]='';
WOMT_aTexte['statistik_detail_titel_text'][1]='';
WOMT_aTexte['statistik_detail_text_partei']=new Array();
WOMT_aTexte['statistik_detail_text_partei'][0]='';
WOMT_aTexte['statistik_detail_text_partei'][1]='';
WOMT_aTexte['statistik_detail_gesamt_titel']=new Array();
WOMT_aTexte['statistik_detail_gesamt_titel'][0]='';
WOMT_aTexte['statistik_detail_gesamt_titel'][1]='';
WOMT_aTexte['statistik_detail_parteien_titel']=new Array();
WOMT_aTexte['statistik_detail_parteien_titel'][0]='';
WOMT_aTexte['statistik_detail_parteien_titel'][1]='';
WOMT_aTexte['statistik_detail_zustimmung']=new Array();
WOMT_aTexte['statistik_detail_zustimmung'][0]='';
WOMT_aTexte['statistik_detail_zustimmung'][1]='';
WOMT_aTexte['statistik_detail_neutral']=new Array();
WOMT_aTexte['statistik_detail_neutral'][0]='';
WOMT_aTexte['statistik_detail_neutral'][1]='';
WOMT_aTexte['statistik_detail_ablehnung']=new Array();
WOMT_aTexte['statistik_detail_ablehnung'][0]='';
WOMT_aTexte['statistik_detail_ablehnung'][1]='';
WOMT_aTexte['statistik_detail_keinemeinung']=new Array();
WOMT_aTexte['statistik_detail_keinemeinung'][0]='';
WOMT_aTexte['statistik_detail_keinemeinung'][1]='';




WOMT_nParteien='5';
WOMT_nThesen='29';
WOMT_nThemen='6';
WOMT_aSprachen_N2ID[0]='1';
WOMT_aSprachen_ID2N[1]='0';
WOMT_aSprachen_N2ID[1]='8';
WOMT_aSprachen_ID2N[8]='1';
WOMT_aParteien_N2ID[0]='39';
WOMT_aParteien_ID2N[39]='0';
WOMT_aParteien_N2ID[1]='40';
WOMT_aParteien_ID2N[40]='1';
WOMT_aParteien_N2ID[2]='41';
WOMT_aParteien_ID2N[41]='2';
WOMT_aParteien_N2ID[3]='42';
WOMT_aParteien_ID2N[42]='3';
WOMT_aParteien_N2ID[4]='43';
WOMT_aParteien_ID2N[43]='4';
WOMT_aThesen_N2ID[0]='182';
WOMT_aThesen_ID2N[182]='0';
WOMT_aThesenBilder[0]=new Array();
WOMT_aThesenBilder[0][0]='images/';
WOMT_aThesenBilder[0][1]='';
WOMT_aThesenBilder[0][2]='';
WOMT_aThesen_N2ID[1]='181';
WOMT_aThesen_ID2N[181]='1';
WOMT_aThesenBilder[1]=new Array();
WOMT_aThesenBilder[1][0]='images/';
WOMT_aThesenBilder[1][1]='';
WOMT_aThesenBilder[1][2]='';
WOMT_aThesen_N2ID[2]='183';
WOMT_aThesen_ID2N[183]='2';
WOMT_aThesenBilder[2]=new Array();
WOMT_aThesenBilder[2][0]='images/';
WOMT_aThesenBilder[2][1]='';
WOMT_aThesenBilder[2][2]='';
WOMT_aThesen_N2ID[3]='184';
WOMT_aThesen_ID2N[184]='3';
WOMT_aThesenBilder[3]=new Array();
WOMT_aThesenBilder[3][0]='images/';
WOMT_aThesenBilder[3][1]='';
WOMT_aThesenBilder[3][2]='';
WOMT_aThesen_N2ID[4]='185';
WOMT_aThesen_ID2N[185]='4';
WOMT_aThesenBilder[4]=new Array();
WOMT_aThesenBilder[4][0]='images/';
WOMT_aThesenBilder[4][1]='';
WOMT_aThesenBilder[4][2]='';
WOMT_aThesen_N2ID[5]='186';
WOMT_aThesen_ID2N[186]='5';
WOMT_aThesenBilder[5]=new Array();
WOMT_aThesenBilder[5][0]='images/';
WOMT_aThesenBilder[5][1]='';
WOMT_aThesenBilder[5][2]='';
WOMT_aThesen_N2ID[6]='187';
WOMT_aThesen_ID2N[187]='6';
WOMT_aThesenBilder[6]=new Array();
WOMT_aThesenBilder[6][0]='images/';
WOMT_aThesenBilder[6][1]='';
WOMT_aThesenBilder[6][2]='';
WOMT_aThesen_N2ID[7]='188';
WOMT_aThesen_ID2N[188]='7';
WOMT_aThesenBilder[7]=new Array();
WOMT_aThesenBilder[7][0]='images/';
WOMT_aThesenBilder[7][1]='';
WOMT_aThesenBilder[7][2]='';
WOMT_aThesen_N2ID[8]='189';
WOMT_aThesen_ID2N[189]='8';
WOMT_aThesenBilder[8]=new Array();
WOMT_aThesenBilder[8][0]='images/';
WOMT_aThesenBilder[8][1]='';
WOMT_aThesenBilder[8][2]='';
WOMT_aThesen_N2ID[9]='190';
WOMT_aThesen_ID2N[190]='9';
WOMT_aThesenBilder[9]=new Array();
WOMT_aThesenBilder[9][0]='images/';
WOMT_aThesenBilder[9][1]='';
WOMT_aThesenBilder[9][2]='';
WOMT_aThesen_N2ID[10]='191';
WOMT_aThesen_ID2N[191]='10';
WOMT_aThesenBilder[10]=new Array();
WOMT_aThesenBilder[10][0]='images/';
WOMT_aThesenBilder[10][1]='';
WOMT_aThesenBilder[10][2]='';
WOMT_aThesen_N2ID[11]='192';
WOMT_aThesen_ID2N[192]='11';
WOMT_aThesenBilder[11]=new Array();
WOMT_aThesenBilder[11][0]='images/';
WOMT_aThesenBilder[11][1]='';
WOMT_aThesenBilder[11][2]='';
WOMT_aThesen_N2ID[12]='193';
WOMT_aThesen_ID2N[193]='12';
WOMT_aThesenBilder[12]=new Array();
WOMT_aThesenBilder[12][0]='images/';
WOMT_aThesenBilder[12][1]='';
WOMT_aThesenBilder[12][2]='';
WOMT_aThesen_N2ID[13]='194';
WOMT_aThesen_ID2N[194]='13';
WOMT_aThesenBilder[13]=new Array();
WOMT_aThesenBilder[13][0]='images/';
WOMT_aThesenBilder[13][1]='';
WOMT_aThesenBilder[13][2]='';
WOMT_aThesen_N2ID[14]='195';
WOMT_aThesen_ID2N[195]='14';
WOMT_aThesenBilder[14]=new Array();
WOMT_aThesenBilder[14][0]='images/';
WOMT_aThesenBilder[14][1]='';
WOMT_aThesenBilder[14][2]='';
WOMT_aThesen_N2ID[15]='196';
WOMT_aThesen_ID2N[196]='15';
WOMT_aThesenBilder[15]=new Array();
WOMT_aThesenBilder[15][0]='images/';
WOMT_aThesenBilder[15][1]='';
WOMT_aThesenBilder[15][2]='';
WOMT_aThesen_N2ID[16]='197';
WOMT_aThesen_ID2N[197]='16';
WOMT_aThesenBilder[16]=new Array();
WOMT_aThesenBilder[16][0]='images/';
WOMT_aThesenBilder[16][1]='';
WOMT_aThesenBilder[16][2]='';
WOMT_aThesen_N2ID[17]='198';
WOMT_aThesen_ID2N[198]='17';
WOMT_aThesenBilder[17]=new Array();
WOMT_aThesenBilder[17][0]='images/';
WOMT_aThesenBilder[17][1]='';
WOMT_aThesenBilder[17][2]='';
WOMT_aThesen_N2ID[18]='199';
WOMT_aThesen_ID2N[199]='18';
WOMT_aThesenBilder[18]=new Array();
WOMT_aThesenBilder[18][0]='images/';
WOMT_aThesenBilder[18][1]='';
WOMT_aThesenBilder[18][2]='';
WOMT_aThesen_N2ID[19]='200';
WOMT_aThesen_ID2N[200]='19';
WOMT_aThesenBilder[19]=new Array();
WOMT_aThesenBilder[19][0]='images/';
WOMT_aThesenBilder[19][1]='';
WOMT_aThesenBilder[19][2]='';
WOMT_aThesen_N2ID[20]='201';
WOMT_aThesen_ID2N[201]='20';
WOMT_aThesenBilder[20]=new Array();
WOMT_aThesenBilder[20][0]='images/';
WOMT_aThesenBilder[20][1]='';
WOMT_aThesenBilder[20][2]='';
WOMT_aThesen_N2ID[21]='210';
WOMT_aThesen_ID2N[210]='21';
WOMT_aThesenBilder[21]=new Array();
WOMT_aThesenBilder[21][0]='images/';
WOMT_aThesenBilder[21][1]='';
WOMT_aThesenBilder[21][2]='';
WOMT_aThesen_N2ID[22]='202';
WOMT_aThesen_ID2N[202]='22';
WOMT_aThesenBilder[22]=new Array();
WOMT_aThesenBilder[22][0]='images/';
WOMT_aThesenBilder[22][1]='';
WOMT_aThesenBilder[22][2]='';
WOMT_aThesen_N2ID[23]='203';
WOMT_aThesen_ID2N[203]='23';
WOMT_aThesenBilder[23]=new Array();
WOMT_aThesenBilder[23][0]='images/';
WOMT_aThesenBilder[23][1]='';
WOMT_aThesenBilder[23][2]='';
WOMT_aThesen_N2ID[24]='204';
WOMT_aThesen_ID2N[204]='24';
WOMT_aThesenBilder[24]=new Array();
WOMT_aThesenBilder[24][0]='images/';
WOMT_aThesenBilder[24][1]='';
WOMT_aThesenBilder[24][2]='';
WOMT_aThesen_N2ID[25]='205';
WOMT_aThesen_ID2N[205]='25';
WOMT_aThesenBilder[25]=new Array();
WOMT_aThesenBilder[25][0]='images/';
WOMT_aThesenBilder[25][1]='';
WOMT_aThesenBilder[25][2]='';
WOMT_aThesen_N2ID[26]='207';
WOMT_aThesen_ID2N[207]='26';
WOMT_aThesenBilder[26]=new Array();
WOMT_aThesenBilder[26][0]='images/';
WOMT_aThesenBilder[26][1]='';
WOMT_aThesenBilder[26][2]='';
WOMT_aThesen_N2ID[27]='208';
WOMT_aThesen_ID2N[208]='27';
WOMT_aThesenBilder[27]=new Array();
WOMT_aThesenBilder[27][0]='images/';
WOMT_aThesenBilder[27][1]='';
WOMT_aThesenBilder[27][2]='';
WOMT_aThesen_N2ID[28]='206';
WOMT_aThesen_ID2N[206]='28';
WOMT_aThesenBilder[28]=new Array();
WOMT_aThesenBilder[28][0]='images/';
WOMT_aThesenBilder[28][1]='';
WOMT_aThesenBilder[28][2]='';
WOMT_aThemen_N2ID[0]='55';
WOMT_aThemen_ID2N[55]='0';
WOMT_aThemen_N2ID[1]='56';
WOMT_aThemen_ID2N[56]='1';
WOMT_aThemen_N2ID[2]='57';
WOMT_aThemen_ID2N[57]='2';
WOMT_aThemen_N2ID[3]='58';
WOMT_aThemen_ID2N[58]='3';
WOMT_aThemen_N2ID[4]='59';
WOMT_aThemen_ID2N[59]='4';
WOMT_aThemen_N2ID[5]='60';
WOMT_aThemen_ID2N[60]='5';
WOMT_aThesen[0]=new Array();
WOMT_aThesen[0][0]=new Array();
WOMT_aThesen[0][0][0]='Der Besitz von illegalen Drogen muss stärker verfolgt werden.';
WOMT_aThesen[0][0][1]='Der Besitz von illegalen Drogen muss stärker verfolgt werden.';
WOMT_aThesen[0][1]=new Array();
WOMT_aThesen[0][1][0]='Den strafferetlige forfølgning af besiddelse af illegale narkotika skal øges';
WOMT_aThesen[0][1][1]='Den strafferetlige forfølgning af besiddelse af illegale narkotika skal øges';
WOMT_aThesenThema[0]='0';
WOMT_aThesenParteien[0]=new Array();
WOMT_aThesen[1]=new Array();
WOMT_aThesen[1][0]=new Array();
WOMT_aThesen[1][0][0]='Für die Krankenversicherung soll künftig jede/jeder den gleichen Betrag zahlen ("Kopfpauschale").';
WOMT_aThesen[1][0][1]='Für die Krankenversicherung soll künftig jede/jeder den gleichen Betrag zahlen ("Kopfpauschale").';
WOMT_aThesen[1][1]=new Array();
WOMT_aThesen[1][1][0]='Fremover skal alle betale samme sygesikringsbidrag (enhedsafgift)';
WOMT_aThesen[1][1][1]='Fremover skal alle betale samme sygesikringsbidrag (enhedsafgift)';
WOMT_aThesenThema[1]='0';
WOMT_aThesenParteien[1]=new Array();
WOMT_aThesen[2]=new Array();
WOMT_aThesen[2][0]=new Array();
WOMT_aThesen[2][0][0]='Flächendeckende Sprachkurse für ausländische Mitbürger/innen sollen vom Land gebührenfrei angeboten werden.';
WOMT_aThesen[2][0][1]='Flächendeckende Sprachkurse für ausländische Mitbürger/innen sollen vom Land gebührenfrei angeboten werden.';
WOMT_aThesen[2][1]=new Array();
WOMT_aThesen[2][1][0]='Delstaten skal tilbyde gratis og landsdækkende sprogkurser  til udenlandske medborgere.';
WOMT_aThesen[2][1][1]='Delstaten skal tilbyde gratis og landsdækkende sprogkurser  til udenlandske medborgere.';
WOMT_aThesenThema[2]='0';
WOMT_aThesenParteien[2]=new Array();
WOMT_aThesen[3]=new Array();
WOMT_aThesen[3][0]=new Array();
WOMT_aThesen[3][0][0]='Mehr Landesmittel für die Jugendverbände. ';
WOMT_aThesen[3][0][1]='Mehr Landesmittel für die Jugendverbände. ';
WOMT_aThesen[3][1]=new Array();
WOMT_aThesen[3][1][0]='Flere delstatstilskud til ungdomsforeninger og -forbund';
WOMT_aThesen[3][1][1]='Flere delstatstilskud til ungdomsforeninger og -forbund';
WOMT_aThesenThema[3]='0';
WOMT_aThesenParteien[3]=new Array();
WOMT_aThesen[4]=new Array();
WOMT_aThesen[4][0]=new Array();
WOMT_aThesen[4][0][0]='Lehrpläne für Kindergärten!';
WOMT_aThesen[4][0][1]='Lehrpläne für Kindergärten!';
WOMT_aThesen[4][1]=new Array();
WOMT_aThesen[4][1][0]='Læseplaner til børnehaver';
WOMT_aThesen[4][1][1]='Læseplaner til børnehaver';
WOMT_aThesenThema[4]='0';
WOMT_aThesenParteien[4]=new Array();
WOMT_aThesen[5]=new Array();
WOMT_aThesen[5][0]=new Array();
WOMT_aThesen[5][0][0]='Die Gliederung des Schulsystems in Haupt-, Realschule und Gymnasium soll erhalten bleiben.';
WOMT_aThesen[5][0][1]='Die Gliederung des Schulsystems in Haupt-, Realschule und Gymnasium soll erhalten bleiben.';
WOMT_aThesen[5][1]=new Array();
WOMT_aThesen[5][1][0]='Den tredelte skole (hoveskole, realskole og gymnasium) skal opretholdes.';
WOMT_aThesen[5][1][1]='Den tredelte skole (hoveskole, realskole og gymnasium) skal opretholdes.';
WOMT_aThesenThema[5]='1';
WOMT_aThesenParteien[5]=new Array();
WOMT_aThesen[6]=new Array();
WOMT_aThesen[6][0]=new Array();
WOMT_aThesen[6][0][0]='Verbot von Kopftüchern bei Lehrerinnen in öffentlichen Schulen!';
WOMT_aThesen[6][0][1]='Verbot von Kopftüchern bei Lehrerinnen in öffentlichen Schulen!';
WOMT_aThesen[6][1]=new Array();
WOMT_aThesen[6][1][0]='Hætteforbud for lærere i offentlige skoler.';
WOMT_aThesen[6][1][1]='Hætteforbud for lærere i offentlige skoler.';
WOMT_aThesenThema[6]='1';
WOMT_aThesenParteien[6]=new Array();
WOMT_aThesen[7]=new Array();
WOMT_aThesen[7][0]=new Array();
WOMT_aThesen[7][0][0]='Einführung einheitlicher Abschlussprüfungen für die jeweiligen Schularten!';
WOMT_aThesen[7][0][1]='Einführung einheitlicher Abschlussprüfungen für die jeweiligen Schularten!';
WOMT_aThesen[7][1]=new Array();
WOMT_aThesen[7][1][0]='Fælles sluteksaminer for de forskellige skoleformer!';
WOMT_aThesen[7][1][1]='Fælles sluteksaminer for de forskellige skoleformer!';
WOMT_aThesenThema[7]='1';
WOMT_aThesenParteien[7]=new Array();
WOMT_aThesen[8]=new Array();
WOMT_aThesen[8][0]=new Array();
WOMT_aThesen[8][0][0]='Das Schulfach "Wirtschaft und Politik" soll Pflicht ab Klassenstufe 5 werden.';
WOMT_aThesen[8][0][1]='Das Schulfach "Wirtschaft und Politik" soll Pflicht ab Klassenstufe 5 werden.';
WOMT_aThesen[8][1]=new Array();
WOMT_aThesen[8][1][0]='Skolefaget "erhverv og politik" skal være pligtfag fra og med 5. klassetrin.';
WOMT_aThesen[8][1][1]='Skolefaget "erhverv og politik" skal være pligtfag fra og med 5. klassetrin.';
WOMT_aThesenThema[8]='1';
WOMT_aThesenParteien[8]=new Array();
WOMT_aThesen[9]=new Array();
WOMT_aThesen[9][0]=new Array();
WOMT_aThesen[9][0][0]='Gemeinsame Schulzeit für alle bis zur Klasse neun.';
WOMT_aThesen[9][0][1]='Gemeinsame Schulzeit für alle bis zur Klasse neun.';
WOMT_aThesen[9][1]=new Array();
WOMT_aThesen[9][1][0]='Fælles skoletid for alle elever op til niende klasse.';
WOMT_aThesen[9][1][1]='Fælles skoletid for alle elever op til niende klasse.';
WOMT_aThesenThema[9]='1';
WOMT_aThesenParteien[9]=new Array();
WOMT_aThesen[10]=new Array();
WOMT_aThesen[10][0]=new Array();
WOMT_aThesen[10][0][0]='Das erste Studium soll gebührenfrei bleiben.';
WOMT_aThesen[10][0][1]='Das erste Studium soll gebührenfrei bleiben.';
WOMT_aThesen[10][1]=new Array();
WOMT_aThesen[10][1][0]='Der skal ikke opkræves gebyrer på det første studium.';
WOMT_aThesen[10][1][1]='Der skal ikke opkræves gebyrer på det første studium.';
WOMT_aThesenThema[10]='1';
WOMT_aThesenParteien[10]=new Array();
WOMT_aThesen[11]=new Array();
WOMT_aThesen[11][0]=new Array();
WOMT_aThesen[11][0][0]='Wir brauchen eine feste Fehmarn-Belt-Querung! ';
WOMT_aThesen[11][0][1]='Wir brauchen eine feste Fehmarn-Belt-Querung! ';
WOMT_aThesen[11][1]=new Array();
WOMT_aThesen[11][1][0]='Vi har brug for en fast Femerbælt-forbindelse';
WOMT_aThesen[11][1][1]='Vi har brug for en fast Femerbælt-forbindelse';
WOMT_aThesenThema[11]='2';
WOMT_aThesenParteien[11]=new Array();
WOMT_aThesen[12]=new Array();
WOMT_aThesen[12][0]=new Array();
WOMT_aThesen[12][0][0]='Keine Verlängerung der A 20 ("Ostseeautobahn") in Schleswig-Holstein.';
WOMT_aThesen[12][0][1]='Keine Verlängerung der A 20 ("Ostseeautobahn") in Schleswig-Holstein.';
WOMT_aThesen[12][1]=new Array();
WOMT_aThesen[12][1][0]='Ingen udvidelse af A20 (Østersømotorvejen) i Slesvig-Holsten.';
WOMT_aThesen[12][1][1]='Ingen udvidelse af A20 (Østersømotorvejen) i Slesvig-Holsten.';
WOMT_aThesenThema[12]='2';
WOMT_aThesenParteien[12]=new Array();
WOMT_aThesen[13]=new Array();
WOMT_aThesen[13][0]=new Array();
WOMT_aThesen[13][0][0]='Ausbau regionaler Flughäfen in Schleswig-Holstein!';
WOMT_aThesen[13][0][1]='Ausbau regionaler Flughäfen in Schleswig-Holstein!';
WOMT_aThesen[13][1]=new Array();
WOMT_aThesen[13][1][0]='Regionale lufthavne i Slesvig-Holsten skal udvides.';
WOMT_aThesen[13][1][1]='Regionale lufthavne i Slesvig-Holsten skal udvides.';
WOMT_aThesenThema[13]='2';
WOMT_aThesenParteien[13]=new Array();
WOMT_aThesen[14]=new Array();
WOMT_aThesen[14][0]=new Array();
WOMT_aThesen[14][0][0]='Dreispuriger Ausbau der A 7 bis zur dänischen Grenze.';
WOMT_aThesen[14][0][1]='Dreispuriger Ausbau der A 7 bis zur dänischen Grenze.';
WOMT_aThesen[14][1]=new Array();
WOMT_aThesen[14][1][0]='Tresporet udvidelse af motorvejen A7 til den danske grænse.';
WOMT_aThesen[14][1][1]='Tresporet udvidelse af motorvejen A7 til den danske grænse.';
WOMT_aThesenThema[14]='2';
WOMT_aThesenParteien[14]=new Array();
WOMT_aThesen[15]=new Array();
WOMT_aThesen[15][0]=new Array();
WOMT_aThesen[15][0][0]='Das Land darf Aufträge nur an Unternehmen vergeben, die ihre Mitarbeiter/innen nach Tarif bezahlen.';
WOMT_aThesen[15][0][1]='Das Land darf Aufträge nur an Unternehmen vergeben, die ihre Mitarbeiter/innen nach Tarif bezahlen.';
WOMT_aThesen[15][1]=new Array();
WOMT_aThesen[15][1][0]='Delstaten må kun udstede ordrer til virksomheder, der betaler deres ansatte efter overenskomsten.';
WOMT_aThesen[15][1][1]='Delstaten må kun udstede ordrer til virksomheder, der betaler deres ansatte efter overenskomsten.';
WOMT_aThesenThema[15]='3';
WOMT_aThesenParteien[15]=new Array();
WOMT_aThesen[16]=new Array();
WOMT_aThesen[16][0]=new Array();
WOMT_aThesen[16][0][0]='Betriebe, die keine Ausbildungsplätze anbieten, müssen eine Abgabe zahlen.';
WOMT_aThesen[16][0][1]='Betriebe, die keine Ausbildungsplätze anbieten, müssen eine Abgabe zahlen.';
WOMT_aThesen[16][1]=new Array();
WOMT_aThesen[16][1][0]='Virksomheder, der ikke tilbyder uddannelsespladser skal betale afgift.';
WOMT_aThesen[16][1][1]='Virksomheder, der ikke tilbyder uddannelsespladser skal betale afgift.';
WOMT_aThesenThema[16]='3';
WOMT_aThesenParteien[16]=new Array();
WOMT_aThesen[17]=new Array();
WOMT_aThesen[17][0]=new Array();
WOMT_aThesen[17][0][0]='Völlige Freigabe der Ladenöffnungszeiten in Schleswig-Holstein.';
WOMT_aThesen[17][0][1]='Völlige Freigabe der Ladenöffnungszeiten in Schleswig-Holstein.';
WOMT_aThesen[17][1]=new Array();
WOMT_aThesen[17][1][0]='Lukkeloven for forretninger skal ophæves i Slesvig-Holsten.';
WOMT_aThesen[17][1][1]='Lukkeloven for forretninger skal ophæves i Slesvig-Holsten.';
WOMT_aThesenThema[17]='3';
WOMT_aThesenParteien[17]=new Array();
WOMT_aThesen[18]=new Array();
WOMT_aThesen[18][0]=new Array();
WOMT_aThesen[18][0][0]='Geschlossene Unterbringung für jugendliche Mehrfachtäter/innen!';
WOMT_aThesen[18][0][1]='Geschlossene Unterbringung für jugendliche Mehrfachtäter/innen!';
WOMT_aThesen[18][1]=new Array();
WOMT_aThesen[18][1][0]='Lukket forvaring for unge recidivister (kriminelle gengangere)!';
WOMT_aThesen[18][1][1]='Lukket forvaring for unge recidivister (kriminelle gengangere)!';
WOMT_aThesenThema[18]='4';
WOMT_aThesenParteien[18]=new Array();
WOMT_aThesen[19]=new Array();
WOMT_aThesen[19][0]=new Array();
WOMT_aThesen[19][0][0]='Keine Ausweitung der Video-Überwachung von öffentlichen Plätzen!';
WOMT_aThesen[19][0][1]='Keine Ausweitung der Video-Überwachung von öffentlichen Plätzen!';
WOMT_aThesen[19][1]=new Array();
WOMT_aThesen[19][1][0]='Ingen udvidelse af videoovervågningen på offentlige steder!';
WOMT_aThesen[19][1][1]='Ingen udvidelse af videoovervågningen på offentlige steder!';
WOMT_aThesenThema[19]='4';
WOMT_aThesenParteien[19]=new Array();
WOMT_aThesen[20]=new Array();
WOMT_aThesen[20][0]=new Array();
WOMT_aThesen[20][0][0]='Härtere Strafen für Graffiti-Sprayer/innen!';
WOMT_aThesen[20][0][1]='Härtere Strafen für Graffiti-Sprayer/innen!';
WOMT_aThesen[20][1]=new Array();
WOMT_aThesen[20][1][0]='Hårdere straf for grafitti-sprayere!';
WOMT_aThesen[20][1][1]='Hårdere straf for grafitti-sprayere!';
WOMT_aThesenThema[20]='4';
WOMT_aThesenParteien[20]=new Array();
WOMT_aThesen[21]=new Array();
WOMT_aThesen[21][0]=new Array();
WOMT_aThesen[21][0][0]='Cannabis soll legalisiert werden.';
WOMT_aThesen[21][0][1]='Cannabis soll legalisiert werden.';
WOMT_aThesen[21][1]=new Array();
WOMT_aThesen[21][1][0]='Cannabis skal legaliseres.';
WOMT_aThesen[21][1][1]='Cannabis skal legaliseres.';
WOMT_aThesenThema[21]='4';
WOMT_aThesenParteien[21]=new Array();
WOMT_aThesen[22]=new Array();
WOMT_aThesen[22][0]=new Array();
WOMT_aThesen[22][0][0]='Lehrer/innen sollen nicht mehr verbeamtet werden.';
WOMT_aThesen[22][0][1]='Lehrer/innen sollen nicht mehr verbeamtet werden.';
WOMT_aThesen[22][1]=new Array();
WOMT_aThesen[22][1][0]='Lærere skal ikke længere ansættes efter tjenestemandslignende forhold.';
WOMT_aThesen[22][1][1]='Lærere skal ikke længere ansættes efter tjenestemandslignende forhold.';
WOMT_aThesenThema[22]='4';
WOMT_aThesenParteien[22]=new Array();
WOMT_aThesen[23]=new Array();
WOMT_aThesen[23][0]=new Array();
WOMT_aThesen[23][0][0]='Die Landkreise und kreisfreien Städte in Schleswig-Holstein müssen erhalten bleiben - keine Zusammenlegung.';
WOMT_aThesen[23][0][1]='Die Landkreise und kreisfreien Städte in Schleswig-Holstein müssen erhalten bleiben - keine Zusammenlegung.';
WOMT_aThesen[23][1]=new Array();
WOMT_aThesen[23][1][0]='Amterne og de amtsfrie byer skal bevares i Slesvig-Holsten - ingen tvangssammenlægninger.';
WOMT_aThesen[23][1][1]='Amterne og de amtsfrie byer skal bevares i Slesvig-Holsten - ingen tvangssammenlægninger.';
WOMT_aThesenThema[23]='4';
WOMT_aThesenParteien[23]=new Array();
WOMT_aThesen[24]=new Array();
WOMT_aThesen[24][0]=new Array();
WOMT_aThesen[24][0][0]='Bei Landtags- und Kommunalwahlen: Stimmabgabe per Internet ermöglichen!';
WOMT_aThesen[24][0][1]='Bei Landtags- und Kommunalwahlen: Stimmabgabe per Internet ermöglichen!';
WOMT_aThesen[24][1]=new Array();
WOMT_aThesen[24][1][0]='Ved landdags- og kommunalvalg: Mulighed for at stemme via internettet';
WOMT_aThesen[24][1][1]='Ved landdags- og kommunalvalg: Mulighed for at stemme via internettet';
WOMT_aThesenThema[24]='4';
WOMT_aThesenParteien[24]=new Array();
WOMT_aThesen[25]=new Array();
WOMT_aThesen[25][0]=new Array();
WOMT_aThesen[25][0][0]='Bei Landtagswahlen: Wählen ab 16 Jahren!';
WOMT_aThesen[25][0][1]='Bei Landtagswahlen: Wählen ab 16 Jahren!';
WOMT_aThesen[25][1]=new Array();
WOMT_aThesen[25][1][0]='Ved landdagsvalg: Stemmeret fra og med 16 år.';
WOMT_aThesen[25][1][1]='Ved landdagsvalg: Stemmeret fra og med 16 år.';
WOMT_aThesenThema[25]='4';
WOMT_aThesenParteien[25]=new Array();
WOMT_aThesen[26]=new Array();
WOMT_aThesen[26][0]=new Array();
WOMT_aThesen[26][0][0]='Mehr Landesmittel für erneuerbare Energie.';
WOMT_aThesen[26][0][1]='Mehr Landesmittel für erneuerbare Energie.';
WOMT_aThesen[26][1]=new Array();
WOMT_aThesen[26][1][0]='Flere delstatstilskud til vedvarende energi.';
WOMT_aThesen[26][1][1]='Flere delstatstilskud til vedvarende energi.';
WOMT_aThesenThema[26]='5';
WOMT_aThesenParteien[26]=new Array();
WOMT_aThesen[27]=new Array();
WOMT_aThesen[27][0]=new Array();
WOMT_aThesen[27][0][0]='Naturschutzgebiete ausweiten!';
WOMT_aThesen[27][0][1]='Naturschutzgebiete ausweiten!';
WOMT_aThesen[27][1]=new Array();
WOMT_aThesen[27][1][0]='Naturbeskyttede områder skal udvides!';
WOMT_aThesen[27][1][1]='Naturbeskyttede områder skal udvides!';
WOMT_aThesenThema[27]='5';
WOMT_aThesenParteien[27]=new Array();
WOMT_aThesen[28]=new Array();
WOMT_aThesen[28][0]=new Array();
WOMT_aThesen[28][0][0]='Schleswig-Holstein soll auf Atomkraftwerke vollständig verzichten.';
WOMT_aThesen[28][0][1]='Schleswig-Holstein soll auf Atomkraftwerke vollständig verzichten.';
WOMT_aThesen[28][1]=new Array();
WOMT_aThesen[28][1][0]='Slesvig-Holsten skal give fuldstændig afkald på atomkraftværker.';
WOMT_aThesen[28][1][1]='Slesvig-Holsten skal give fuldstændig afkald på atomkraftværker.';
WOMT_aThesenThema[28]='5';
WOMT_aThesenParteien[28]=new Array();
WOMT_aThesenParteienText[0]=new Array();
WOMT_aThesenParteienText[0][0]=new Array();
WOMT_aThesenParteienText[0][1]=new Array();
WOMT_aThesenParteienText[0][2]=new Array();
WOMT_aThesenParteienText[0][3]=new Array();
WOMT_aThesenParteienText[0][4]=new Array();
WOMT_aThesenParteienText[1]=new Array();
WOMT_aThesenParteienText[1][0]=new Array();
WOMT_aThesenParteienText[1][1]=new Array();
WOMT_aThesenParteienText[1][2]=new Array();
WOMT_aThesenParteienText[1][3]=new Array();
WOMT_aThesenParteienText[1][4]=new Array();
WOMT_aThesenParteienText[2]=new Array();
WOMT_aThesenParteienText[2][0]=new Array();
WOMT_aThesenParteienText[2][1]=new Array();
WOMT_aThesenParteienText[2][2]=new Array();
WOMT_aThesenParteienText[2][3]=new Array();
WOMT_aThesenParteienText[2][4]=new Array();
WOMT_aThesenParteienText[3]=new Array();
WOMT_aThesenParteienText[3][0]=new Array();
WOMT_aThesenParteienText[3][1]=new Array();
WOMT_aThesenParteienText[3][2]=new Array();
WOMT_aThesenParteienText[3][3]=new Array();
WOMT_aThesenParteienText[3][4]=new Array();
WOMT_aThesenParteienText[4]=new Array();
WOMT_aThesenParteienText[4][0]=new Array();
WOMT_aThesenParteienText[4][1]=new Array();
WOMT_aThesenParteienText[4][2]=new Array();
WOMT_aThesenParteienText[4][3]=new Array();
WOMT_aThesenParteienText[4][4]=new Array();
WOMT_aThesenParteienText[5]=new Array();
WOMT_aThesenParteienText[5][0]=new Array();
WOMT_aThesenParteienText[5][1]=new Array();
WOMT_aThesenParteienText[5][2]=new Array();
WOMT_aThesenParteienText[5][3]=new Array();
WOMT_aThesenParteienText[5][4]=new Array();
WOMT_aThesenParteienText[6]=new Array();
WOMT_aThesenParteienText[6][0]=new Array();
WOMT_aThesenParteienText[6][1]=new Array();
WOMT_aThesenParteienText[6][2]=new Array();
WOMT_aThesenParteienText[6][3]=new Array();
WOMT_aThesenParteienText[6][4]=new Array();
WOMT_aThesenParteienText[7]=new Array();
WOMT_aThesenParteienText[7][0]=new Array();
WOMT_aThesenParteienText[7][1]=new Array();
WOMT_aThesenParteienText[7][2]=new Array();
WOMT_aThesenParteienText[7][3]=new Array();
WOMT_aThesenParteienText[7][4]=new Array();
WOMT_aThesenParteienText[8]=new Array();
WOMT_aThesenParteienText[8][0]=new Array();
WOMT_aThesenParteienText[8][1]=new Array();
WOMT_aThesenParteienText[8][2]=new Array();
WOMT_aThesenParteienText[8][3]=new Array();
WOMT_aThesenParteienText[8][4]=new Array();
WOMT_aThesenParteienText[9]=new Array();
WOMT_aThesenParteienText[9][0]=new Array();
WOMT_aThesenParteienText[9][1]=new Array();
WOMT_aThesenParteienText[9][2]=new Array();
WOMT_aThesenParteienText[9][3]=new Array();
WOMT_aThesenParteienText[9][4]=new Array();
WOMT_aThesenParteienText[10]=new Array();
WOMT_aThesenParteienText[10][0]=new Array();
WOMT_aThesenParteienText[10][1]=new Array();
WOMT_aThesenParteienText[10][2]=new Array();
WOMT_aThesenParteienText[10][3]=new Array();
WOMT_aThesenParteienText[10][4]=new Array();
WOMT_aThesenParteienText[11]=new Array();
WOMT_aThesenParteienText[11][0]=new Array();
WOMT_aThesenParteienText[11][1]=new Array();
WOMT_aThesenParteienText[11][2]=new Array();
WOMT_aThesenParteienText[11][3]=new Array();
WOMT_aThesenParteienText[11][4]=new Array();
WOMT_aThesenParteienText[12]=new Array();
WOMT_aThesenParteienText[12][0]=new Array();
WOMT_aThesenParteienText[12][1]=new Array();
WOMT_aThesenParteienText[12][2]=new Array();
WOMT_aThesenParteienText[12][3]=new Array();
WOMT_aThesenParteienText[12][4]=new Array();
WOMT_aThesenParteienText[13]=new Array();
WOMT_aThesenParteienText[13][0]=new Array();
WOMT_aThesenParteienText[13][1]=new Array();
WOMT_aThesenParteienText[13][2]=new Array();
WOMT_aThesenParteienText[13][3]=new Array();
WOMT_aThesenParteienText[13][4]=new Array();
WOMT_aThesenParteienText[14]=new Array();
WOMT_aThesenParteienText[14][0]=new Array();
WOMT_aThesenParteienText[14][1]=new Array();
WOMT_aThesenParteienText[14][2]=new Array();
WOMT_aThesenParteienText[14][3]=new Array();
WOMT_aThesenParteienText[14][4]=new Array();
WOMT_aThesenParteienText[15]=new Array();
WOMT_aThesenParteienText[15][0]=new Array();
WOMT_aThesenParteienText[15][1]=new Array();
WOMT_aThesenParteienText[15][2]=new Array();
WOMT_aThesenParteienText[15][3]=new Array();
WOMT_aThesenParteienText[15][4]=new Array();
WOMT_aThesenParteienText[16]=new Array();
WOMT_aThesenParteienText[16][0]=new Array();
WOMT_aThesenParteienText[16][1]=new Array();
WOMT_aThesenParteienText[16][2]=new Array();
WOMT_aThesenParteienText[16][3]=new Array();
WOMT_aThesenParteienText[16][4]=new Array();
WOMT_aThesenParteienText[17]=new Array();
WOMT_aThesenParteienText[17][0]=new Array();
WOMT_aThesenParteienText[17][1]=new Array();
WOMT_aThesenParteienText[17][2]=new Array();
WOMT_aThesenParteienText[17][3]=new Array();
WOMT_aThesenParteienText[17][4]=new Array();
WOMT_aThesenParteienText[18]=new Array();
WOMT_aThesenParteienText[18][0]=new Array();
WOMT_aThesenParteienText[18][1]=new Array();
WOMT_aThesenParteienText[18][2]=new Array();
WOMT_aThesenParteienText[18][3]=new Array();
WOMT_aThesenParteienText[18][4]=new Array();
WOMT_aThesenParteienText[19]=new Array();
WOMT_aThesenParteienText[19][0]=new Array();
WOMT_aThesenParteienText[19][1]=new Array();
WOMT_aThesenParteienText[19][2]=new Array();
WOMT_aThesenParteienText[19][3]=new Array();
WOMT_aThesenParteienText[19][4]=new Array();
WOMT_aThesenParteienText[20]=new Array();
WOMT_aThesenParteienText[20][0]=new Array();
WOMT_aThesenParteienText[20][1]=new Array();
WOMT_aThesenParteienText[20][2]=new Array();
WOMT_aThesenParteienText[20][3]=new Array();
WOMT_aThesenParteienText[20][4]=new Array();
WOMT_aThesenParteienText[21]=new Array();
WOMT_aThesenParteienText[21][0]=new Array();
WOMT_aThesenParteienText[21][1]=new Array();
WOMT_aThesenParteienText[21][2]=new Array();
WOMT_aThesenParteienText[21][3]=new Array();
WOMT_aThesenParteienText[21][4]=new Array();
WOMT_aThesenParteienText[22]=new Array();
WOMT_aThesenParteienText[22][0]=new Array();
WOMT_aThesenParteienText[22][1]=new Array();
WOMT_aThesenParteienText[22][2]=new Array();
WOMT_aThesenParteienText[22][3]=new Array();
WOMT_aThesenParteienText[22][4]=new Array();
WOMT_aThesenParteienText[23]=new Array();
WOMT_aThesenParteienText[23][0]=new Array();
WOMT_aThesenParteienText[23][1]=new Array();
WOMT_aThesenParteienText[23][2]=new Array();
WOMT_aThesenParteienText[23][3]=new Array();
WOMT_aThesenParteienText[23][4]=new Array();
WOMT_aThesenParteienText[24]=new Array();
WOMT_aThesenParteienText[24][0]=new Array();
WOMT_aThesenParteienText[24][1]=new Array();
WOMT_aThesenParteienText[24][2]=new Array();
WOMT_aThesenParteienText[24][3]=new Array();
WOMT_aThesenParteienText[24][4]=new Array();
WOMT_aThesenParteienText[25]=new Array();
WOMT_aThesenParteienText[25][0]=new Array();
WOMT_aThesenParteienText[25][1]=new Array();
WOMT_aThesenParteienText[25][2]=new Array();
WOMT_aThesenParteienText[25][3]=new Array();
WOMT_aThesenParteienText[25][4]=new Array();
WOMT_aThesenParteienText[26]=new Array();
WOMT_aThesenParteienText[26][0]=new Array();
WOMT_aThesenParteienText[26][1]=new Array();
WOMT_aThesenParteienText[26][2]=new Array();
WOMT_aThesenParteienText[26][3]=new Array();
WOMT_aThesenParteienText[26][4]=new Array();
WOMT_aThesenParteienText[27]=new Array();
WOMT_aThesenParteienText[27][0]=new Array();
WOMT_aThesenParteienText[27][1]=new Array();
WOMT_aThesenParteienText[27][2]=new Array();
WOMT_aThesenParteienText[27][3]=new Array();
WOMT_aThesenParteienText[27][4]=new Array();
WOMT_aThesenParteienText[28]=new Array();
WOMT_aThesenParteienText[28][0]=new Array();
WOMT_aThesenParteienText[28][1]=new Array();
WOMT_aThesenParteienText[28][2]=new Array();
WOMT_aThesenParteienText[28][3]=new Array();
WOMT_aThesenParteienText[28][4]=new Array();
WOMT_aThesenParteien[1][4]='-1';
WOMT_aThesenParteienText[1][4][0]='Dieses wäre unsolidarisch. Die stärksten Schultern müssen immer noch die größten Lasten tragen.\
<br>';
WOMT_aThesenParteienText[1][4][1]='Det ville være usolidarisk. De stærkeste skuldre skal fortsat bære den tungeste byrde.';
WOMT_aThesenParteien[1][3]='-1';
WOMT_aThesenParteienText[1][3][0]='Die FDP will für alle Bürgerinnen und Bürger eine private Versicherungspflicht in der Krankenversicherung einführen. Weg von der Umlagefinanzierung hin zur Kapitaldeckung.';
WOMT_aThesenParteienText[1][3][1]='FDP vil indføre en privat forsikringspligt for alle borgere. Væk fra bidragsfinansieringen og hen imod kapitaldækning.';
WOMT_aThesenParteien[1][2]='-1';
WOMT_aThesenParteienText[1][2][0]='';
WOMT_aThesenParteienText[1][2][1]='';
WOMT_aThesenParteien[1][1]='-1';
WOMT_aThesenParteienText[1][1][0]='Eine Kopfpauschale schafft keine Gerechtigkeit, im Gegenteil. Unser Modell ist das der Bürgerversicherung. Damit werden alle zur Krankenversicherung herangezogen.\
<br>';
WOMT_aThesenParteienText[1][1][1]='En enhedsafgift skaber ikke retfærdighed, tværtimod. Vores model er medborgerforsikringen. Dermed er alle med til at finansiere sygesikringen.';
WOMT_aThesenParteien[1][0]='1';
WOMT_aThesenParteienText[1][0][0]='Einheitliche Gesundheitsprämie, Berücksichtigung der Einkommenshöhe über Steuerentlastungen/ Ziel: Reduzierung der Lohnnebenkosten\
<br>';
WOMT_aThesenParteienText[1][0][1]='Enhedsafgift (sundhedspræmie), Hensyntagen til indkomstforhold via skattelettelser. Målet: Reduktion af ekstra lønomkostninger (Lohnnebenkosten)';
WOMT_aThesenParteien[0][0]='1';
WOMT_aThesenParteienText[0][0][0]='';
WOMT_aThesenParteienText[0][0][1]='';
WOMT_aThesenParteien[0][1]='-1';
WOMT_aThesenParteienText[0][1][0]='Die Strafverfolgung funktioniert in Schleswig-Holstein ausgezeichnet. Wir setzen auf die Kombination von Prävention zur Vermeidung von Abhängigkeit, Hilfe für Abhängige \
<br>und strafrechtiche Verfolgung von Rauschgiftkriminalität.';
WOMT_aThesenParteienText[0][1][1]='Den strafferetlige forfølgning i Slesvig-Holsten fungerer udmærket. Vi satser på en kombination af forebyggelse mod afhængighed, hjælp til afhængige og strafferetlig forfølgning af narkokriminalitet.';
WOMT_aThesenParteien[0][2]='-1';
WOMT_aThesenParteienText[0][2][0]='';
WOMT_aThesenParteienText[0][2][1]='';
WOMT_aThesenParteien[0][3]='0';
WOMT_aThesenParteienText[0][3][0]='';
WOMT_aThesenParteienText[0][3][1]='';
WOMT_aThesenParteien[0][4]='-1';
WOMT_aThesenParteienText[0][4][0]='Das Strafrecht löst nicht die Probleme der Drogenpolitik, sondern verschärft sie teilweise noch.';
WOMT_aThesenParteienText[0][4][1]='Strafferetten løser ikke problemerne inden for narkopolitik men er tværtimod med til at øge dem.';
WOMT_aThesenParteien[2][0]='-1';
WOMT_aThesenParteienText[2][0][0]='';
WOMT_aThesenParteienText[2][0][1]='';
WOMT_aThesenParteien[2][1]='0';
WOMT_aThesenParteienText[2][1][0]='Nicht erforderlich, da Kosten für Sprachkurse - nach dem Zuwanderungsgesetz - vom Bund getragen werden.\
<br>';
WOMT_aThesenParteienText[2][1][1]='Unødvendigt, da sprogkurserne - jævnfør indvandringsloven - finansieres af staten.';
WOMT_aThesenParteien[2][2]='1';
WOMT_aThesenParteienText[2][2][0]='Nach dem neuen Zuwanderungsgesetz werden die Kosten allerdings überwiegend vom Bund übernommen.   \
<br>';
WOMT_aThesenParteienText[2][2][1]='Efter den nye indvandringslov bliver omkostningerne dog overvejende finansieret af staten.';
WOMT_aThesenParteien[2][3]='1';
WOMT_aThesenParteienText[2][3][0]='';
WOMT_aThesenParteienText[2][3][1]='';
WOMT_aThesenParteien[2][4]='1';
WOMT_aThesenParteienText[2][4][0]='Diese Kurse sind zu wichtig, als dass sie vom Geldbeutel abhängen dürfen.';
WOMT_aThesenParteienText[2][4][1]='Disse kurser er for vigtige til, at de bliver afhængige af den økonomiske situation.';
WOMT_aThesenParteien[3][0]='0';
WOMT_aThesenParteienText[3][0][0]='Keine generellen Kürzungen/ Förderung an Bildungsarbeit ausrichten.';
WOMT_aThesenParteienText[3][0][1]='Ingen generelle nedskæringer/tilskud alt efter kvalitet.';
WOMT_aThesenParteien[3][1]='-1';
WOMT_aThesenParteienText[3][1][0]='wünschenswert, aber angesichts der Haushaltslage nicht realistisch\
<br>';
WOMT_aThesenParteienText[3][1][1]='Ønskeligt men ikke realistisk delstatens økonomiske situation taget i betragtning.';
WOMT_aThesenParteien[3][2]='1';
WOMT_aThesenParteienText[3][2][0]='';
WOMT_aThesenParteienText[3][2][1]='';
WOMT_aThesenParteien[3][3]='1';
WOMT_aThesenParteienText[3][3][0]='';
WOMT_aThesenParteienText[3][3][1]='';
WOMT_aThesenParteien[3][4]='1';
WOMT_aThesenParteienText[3][4][0]='';
WOMT_aThesenParteienText[3][4][1]='';
WOMT_aThesenParteien[4][0]='0';
WOMT_aThesenParteienText[4][0][0]='Konkretisierung Bildungsauftrag/Zielvorgaben für letztes Kindertagesstättenjahr\
<br>';
WOMT_aThesenParteienText[4][0][1]='Konkretisering af dannelsesopdrag/målsætning for det sidste børnehaveår.';
WOMT_aThesenParteien[4][1]='1';
WOMT_aThesenParteienText[4][1][0]='Bildungsstandards für Kitas sind bereits veröffentlicht.\
<br>';
WOMT_aThesenParteienText[4][1][1]='Dannelsesstandarder for børnehaver er allerede offentliggjort.';
WOMT_aThesenParteien[4][2]='-1';
WOMT_aThesenParteienText[4][2][0]='Kinder sollen schon vor der Einschulung gefördert und gefordert werden, wobei dem Erlernen der deutschen Sprache angemessener Raum gegeben werden soll. Dies soll jedoch auf spielerische Weise geschehen und nicht mit festen Lehrplänen und Notengebung.\
<br>';
WOMT_aThesenParteienText[4][2][1]='Børn skal allerede udfordres og støttes inden indskolingen, samtidig med at der lægges rimelig vægt på indlæringen af det tyske sprog. Dette bør dog realiseres på legende vi og ikke med faste læseplaner og karaktergivning.';
WOMT_aThesenParteien[4][3]='1';
WOMT_aThesenParteienText[4][3][0]='Keine Verschulung, sondern frühkindliche Bildung.';
WOMT_aThesenParteienText[4][3][1]='Ingen forskoling, men tidlig vidensformidling.';
WOMT_aThesenParteien[4][4]='1';
WOMT_aThesenParteienText[4][4][0]='';
WOMT_aThesenParteienText[4][4][1]='';
WOMT_aThesenParteien[5][0]='1';
WOMT_aThesenParteienText[5][0][0]='Schulsystem weiterentwickeln durch Qualitätsverbesserung, mehr Unterricht, Ganztagsschule - keine Einheitsschule!\
<br>';
WOMT_aThesenParteienText[5][0][1]='Skolevæsenet skal videreudvikles gennem kvalitetsforbedring, mere undervisning, heldagsskoler - ingen enhedsskoler/fællesskoler.';
WOMT_aThesenParteien[5][1]='-1';
WOMT_aThesenParteienText[5][1][0]='';
WOMT_aThesenParteienText[5][1][1]='';
WOMT_aThesenParteien[5][2]='-1';
WOMT_aThesenParteienText[5][2][0]='Unser Ziel ist 9 Jahre gemeinsame Schule für alle Schülerinnen und Schüler, damit alle entsprechend ihren Möglichkeiten gefordert und gefördert werden. \
<br>';
WOMT_aThesenParteienText[5][2][1]='Vores mål er ni år fællesskole for alle elever, så de kan støttes og udfordres på basis af deres evner og muligheder.';
WOMT_aThesenParteien[5][3]='1';
WOMT_aThesenParteienText[5][3][0]='';
WOMT_aThesenParteienText[5][3][1]='';
WOMT_aThesenParteien[5][4]='-1';
WOMT_aThesenParteienText[5][4][0]='';
WOMT_aThesenParteienText[5][4][1]='';
WOMT_aThesenParteien[6][0]='1';
WOMT_aThesenParteienText[6][0][0]='';
WOMT_aThesenParteienText[6][0][1]='';
WOMT_aThesenParteien[6][1]='0';
WOMT_aThesenParteienText[6][1][0]='Wie in fast allen Parteien wird über dieses Frage auch bei uns sehr kontrovers diskutiert, weil die Bewertung des Kopftuchtragens nicht einheitlich ist. Wir \
<br>treten weiterhin für eine verbesserte Integration unserer muslimischen MitbürgerInnen ein.';
WOMT_aThesenParteienText[6][1][1]='Dette spørgsmål bliver diskuteret meget kontrovers hos os - ligesom i næsten alle partier - fordi der i partiet er meget forskellige holdninger til hætteforbudet. Vi går fortsat ind for en bedre intergration af vore muslimske medborgere.';
WOMT_aThesenParteien[6][2]='-1';
WOMT_aThesenParteienText[6][2][0]='Wir sehen hier derzeit keinen Handlungsbedarf. Das Neutralitätsgebot des Staates und das demokratische Bürgerrecht der Einzelnen gehen vor. Gleichzeitig sind LehrerInnen dem Neutralitätsgebot des Beamtenrechts verpflichtet. Bei Zweifeln an ihrer Neutralität muss nach geltendem Recht der Schulleiter eingreifen. \
<br>';
WOMT_aThesenParteienText[6][2][1]='Vi ser for tiden ingen grund til handling. Det statslige neutralitetspåbud og de demokratiske borgerrettigheder har højeste prioritet. Samtidig er lærere forpligtet til at overholde neutralitetspåbudet jævnfør tjenestemandsloven. Er der tvivl om deres neutralitet, er skolelederen efter loven  forpligtet til at gribe ind.';
WOMT_aThesenParteien[6][3]='-1';
WOMT_aThesenParteienText[6][3][0]='Wenn ein Kopftuch als politisches Kampfinstrument eingestzt wird, kann es auch heute schon verboten werden.';
WOMT_aThesenParteienText[6][3][1]='Hvis et hovedtørklæde misbruges som politisk kampredskab, er der allerede i dag mulighed for at forbyde det.';
WOMT_aThesenParteien[6][4]='1';
WOMT_aThesenParteienText[6][4][0]='Religiöse Symbole haben bei Lehrerinnen und Lehrern in öffentlichen Schulen nichts zu suchen - egal ob muslimische, christliche oder andere.';
WOMT_aThesenParteienText[6][4][1]='Religiøse symboler hører ikke hjemme hos lærere på offentlige skoler - uanset om det muslimer, kristne eller andre.';
WOMT_aThesenParteien[7][0]='1';
WOMT_aThesenParteienText[7][0][0]='';
WOMT_aThesenParteienText[7][0][1]='';
WOMT_aThesenParteien[7][1]='-1';
WOMT_aThesenParteienText[7][1][0]='Das gute Abschneiden Schleswig-Holsteins bei PISA-E belegt, dass ein dezentrales Abitur erfolgreich sein kann und zugleich der pädagogischen Gestaltungsfreiheit der Schule Rechnung trägt.\
<br>';
WOMT_aThesenParteienText[7][1][1]='De gode slesvig-holstenske resultater ved PISA-E beviser, at en decentral studentereksamen kan føre til succes og samtidig bevarer skolens pædagogiske frihed.';
WOMT_aThesenParteien[7][2]='-1';
WOMT_aThesenParteienText[7][2][0]='Entscheidend ist, dass die Abschlussprüfungen Vergleichbarkeit herstellen. Dazu ist keine Zentralprüfung erforderlich. \
<br>';
WOMT_aThesenParteienText[7][2][1]='Det afgørende er, at sluteksaminer kan sammenlignes. Så er der ikke brug for enhedseksaminer.';
WOMT_aThesenParteien[7][3]='1';
WOMT_aThesenParteienText[7][3][0]='Prüfungen nach einheitlichen Standards, aber keine zentrale Aufgabenstellung.';
WOMT_aThesenParteienText[7][3][1]='Eksaminer efter enhedsstandarder, men uden central definering af opgaven.';
WOMT_aThesenParteien[7][4]='-1';
WOMT_aThesenParteienText[7][4][0]='';
WOMT_aThesenParteienText[7][4][1]='';
WOMT_aThesenParteien[8][0]='0';
WOMT_aThesenParteienText[8][0][0]='Inhalte verstärkt vermitteln, aber nicht als eigenes Fach bereits in der Unterstufe.\
<br>';
WOMT_aThesenParteienText[8][0][1]='Formidling af faget bør styrkes, men ikke som selvstændigt fag på mellemtrin (Unterstufe).';
WOMT_aThesenParteien[8][1]='-1';
WOMT_aThesenParteienText[8][1][0]='Die dabei zu vermittelnden Inhalte müssen im Mittelpunkt stehen, der fachliche Rahmen ist sekundär.\
<br>';
WOMT_aThesenParteienText[8][1][1]='Formidlingen af indholdet bør stå i centrum, de faglige rammer er sekundære.';
WOMT_aThesenParteien[8][2]='1';
WOMT_aThesenParteienText[8][2][0]='';
WOMT_aThesenParteienText[8][2][1]='';
WOMT_aThesenParteien[8][3]='1';
WOMT_aThesenParteienText[8][3][0]='Wipo soll alternierend mit Erdkunde angeboten werden.';
WOMT_aThesenParteienText[8][3][1]='Erhverv og politik bør tilbydes alternerende med geografi.';
WOMT_aThesenParteien[8][4]='1';
WOMT_aThesenParteienText[8][4][0]='';
WOMT_aThesenParteienText[8][4][1]='';
WOMT_aThesenParteien[9][0]='-1';
WOMT_aThesenParteienText[9][0][0]='';
WOMT_aThesenParteienText[9][0][1]='';
WOMT_aThesenParteien[9][1]='1';
WOMT_aThesenParteienText[9][1][0]='Im Hinblick auf die Oberstufe sind wir für gemeinsamen Unterricht in den ersten zehn Jahren.\
<br>';
WOMT_aThesenParteienText[9][1][1]='Vi er - med henblik på overbygningen - for fælles undervisning i de første ti skoleår.';
WOMT_aThesenParteien[9][2]='1';
WOMT_aThesenParteienText[9][2][0]='';
WOMT_aThesenParteienText[9][2][1]='';
WOMT_aThesenParteien[9][3]='-1';
WOMT_aThesenParteienText[9][3][0]='';
WOMT_aThesenParteienText[9][3][1]='';
WOMT_aThesenParteien[9][4]='1';
WOMT_aThesenParteienText[9][4][0]='';
WOMT_aThesenParteienText[9][4][1]='';
WOMT_aThesenParteien[10][0]='-1';
WOMT_aThesenParteienText[10][0][0]='Studiengebühren sollen in voller Höhe zur Verbesserung der Studienbedingungen verwendet werden.\
<br>';
WOMT_aThesenParteienText[10][0][1]='Studiegebyrer skal ubeskåret investeres i bedre studieforhold.';
WOMT_aThesenParteien[10][1]='1';
WOMT_aThesenParteienText[10][1][0]='Wir lehnen Studiengebühren ab; sie würden zu einem sozialen Numerus Clausus führen.\
<br>';
WOMT_aThesenParteienText[10][1][1]='Vi afviser studiegebyrer; de ville føre til social adgangsregulering.';
WOMT_aThesenParteien[10][2]='1';
WOMT_aThesenParteienText[10][2][0]='';
WOMT_aThesenParteienText[10][2][1]='';
WOMT_aThesenParteien[10][3]='-1';
WOMT_aThesenParteienText[10][3][0]='Einführung von Studiengebühren nur in Verbindung mit Stipendien und Darlehen.';
WOMT_aThesenParteienText[10][3][1]='Studiegebyrer bør kun indføres i forbindelse med stipendier og lån.';
WOMT_aThesenParteien[10][4]='1';
WOMT_aThesenParteienText[10][4][0]='';
WOMT_aThesenParteienText[10][4][1]='';
WOMT_aThesenParteien[11][0]='1';
WOMT_aThesenParteienText[11][0][0]='';
WOMT_aThesenParteienText[11][0][1]='';
WOMT_aThesenParteien[11][1]='1';
WOMT_aThesenParteienText[11][1][0]='';
WOMT_aThesenParteienText[11][1][1]='';
WOMT_aThesenParteien[11][2]='-1';
WOMT_aThesenParteienText[11][2][0]='';
WOMT_aThesenParteienText[11][2][1]='';
WOMT_aThesenParteien[11][3]='1';
WOMT_aThesenParteienText[11][3][0]='';
WOMT_aThesenParteienText[11][3][1]='';
WOMT_aThesenParteien[11][4]='-1';
WOMT_aThesenParteienText[11][4][0]='Eine feste Fehmarnbelt-Querung würde den nördlichen Landesteil vom Skandinavien-Verkehr abkoppeln und so viel Geld schlucken, dass andere wichtige Verkehrsprojekte hinten herunter fallen.';
WOMT_aThesenParteienText[11][4][1]='En Femerbælt-forbindelse ville koble den nordlige landsdel fra Skandinavien-trafikken og blive en så dyr affære, at andre vigtige trafikprojekter ikke kunnd realiseres.';
WOMT_aThesenParteien[12][0]='-1';
WOMT_aThesenParteienText[12][0][0]='Wichtigstes Infrastrukturprojekt für Anbindung an internationale Verkehrs- und Handelswege\
<br>';
WOMT_aThesenParteienText[12][0][1]='Et vigtigt infrastrukturprojekt til fordel for en tilknytning til internationale trafik- og handelsveje.';
WOMT_aThesenParteien[12][1]='-1';
WOMT_aThesenParteienText[12][1][0]='Wir werden den Ausbau der A20 mit einer Elbquerung bei Glückstadt sicherstellen. \
<br>';
WOMT_aThesenParteienText[12][1][1]='Vi vil sikre udvidelsen af A20 med en Elb-forbindelse ved Glückstadt.';
WOMT_aThesenParteien[12][2]='1';
WOMT_aThesenParteienText[12][2][0]='Wir sehen keine verkehrspolitische Notwendigkeit für eine Weiterführung der A20 westlich von Segeberg. \
<br>';
WOMT_aThesenParteienText[12][2][1]='Vi ser ingen trafikpolitisk nødvendighed for at viderføre A20 vest for Segeberg.';
WOMT_aThesenParteien[12][3]='-1';
WOMT_aThesenParteienText[12][3][0]='';
WOMT_aThesenParteienText[12][3][1]='';
WOMT_aThesenParteien[12][4]='-1';
WOMT_aThesenParteienText[12][4][0]='Die westliche Elbquerung mit Straße (A 20) und Schiene ist erforderlich, um das Nadelöhr Hamburg zu umgehen.';
WOMT_aThesenParteienText[12][4][1]='Den vestlige elbforbindelse med veje (A 20) og skinner er nødvendig for at undgå flaskehalsproblemerne ved Hamborg.';
WOMT_aThesenParteien[13][0]='1';
WOMT_aThesenParteienText[13][0][0]='Unterstützung durch private Finanzierung\
<br>';
WOMT_aThesenParteienText[13][0][1]='Støtte gennem privat finansiering.';
WOMT_aThesenParteien[13][1]='1';
WOMT_aThesenParteienText[13][1][0]='Den regionalen Flughafen Lübeck Blankensee bauen wir aus. Der Ausbau des Flughafens Kiel-Holtenau macht nur Sinn, wenn die Wirtschaftlichkeit gewährleistet ist und die Landeshauptstadt Kiel hinter dem Projekt steht. \
<br>';
WOMT_aThesenParteienText[13][1][1]='Vi udvider den regionale lufthavn Lübeck Blankensee. En udvidelse af lufthavnen Kiel-Holtenau giver kun mening, hvis rentabiliteten er sikret, og hvis hovedstaden Kiel bakker op om projektet.';
WOMT_aThesenParteien[13][2]='-1';
WOMT_aThesenParteienText[13][2][0]='Der Hauptflughafen für Schleswig-Holstein ist Hamburg. Wir sehen keine verkehrspolitischen Gründe für einen Ausbau des Flughafens Kiel-Holtenau. Der Lübecker Flughafen kann durch seine Abhängigkeit von einer einzigen Fluggesellschaft nicht als nachhaltig gesichert angesehen werden. \
<br>';
WOMT_aThesenParteienText[13][2][1]='Hovedlufthavnen for Slesvig-Holsten er Hamborg. Vi ser ingen trafikpolitisk nødvendighed for en udvidelse af lufthavnen Kiel-Holtenau. Lufthavnen i  Lübeck kan ikke betragtes som vedvarende sikret, eftersom den er afhængig af et eneste flyselskab.';
WOMT_aThesenParteien[13][3]='1';
WOMT_aThesenParteienText[13][3][0]='Ausbau der regionalen Flughäfen im Zusammenhang mit einem norddeutschen Luftverkehrskonzept';
WOMT_aThesenParteienText[13][3][1]='Udvidelse af de regionale lufthavne i fobindelse med et koncept for den nordtyske lufttrafik.';
WOMT_aThesenParteien[13][4]='-1';
WOMT_aThesenParteienText[13][4][0]='Wir lehnen den Ausbau von Kiel-Holtenau oder einen Neubau in Kaltenkirchen ab.';
WOMT_aThesenParteienText[13][4][1]='Vi afviser en udvidelse af Kiel-Holtenau ligesom en nybyggeri i Kaltenkirchen.';
WOMT_aThesenParteien[14][0]='1';
WOMT_aThesenParteienText[14][0][0]='1. Bauabschnitt Hamburg bis Dreieck Bordesholm/ 2. Bauabschnitt bis Staatsgrenze.\
<br>';
WOMT_aThesenParteienText[14][0][1]='1. byggeafsnit Hamborg til motorvejstrekanten Bordesholm/ 2. byggeafsnit til statsgrænsen.';
WOMT_aThesenParteien[14][1]='-1';
WOMT_aThesenParteienText[14][1][0]='Vordringliches Projekt ist der 6-streifige Ausbau zwischen der Landesgrenze \
<br>Schleswig-Holstein-Hamburg und dem Bordesholmer Dreieck.';
WOMT_aThesenParteienText[14][1][1]='Vigtigste projekt er den 6-sporede udvidelse mellem delstatsgrænsen Slesvig-Holsten/Hamborg og motorvejstrekanten Bordesholm.';
WOMT_aThesenParteien[14][2]='-1';
WOMT_aThesenParteienText[14][2][0]='Wir befürworten ausschließlich den Ausbau der A 7 bis Bordesholm.   \
<br>';
WOMT_aThesenParteienText[14][2][1]='Vi anbefaler udelukkende for en udvidele af motorvejen A7 til Bordesholm.';
WOMT_aThesenParteien[14][3]='1';
WOMT_aThesenParteienText[14][3][0]='';
WOMT_aThesenParteienText[14][3][1]='';
WOMT_aThesenParteien[14][4]='-1';
WOMT_aThesenParteienText[14][4][0]='';
WOMT_aThesenParteienText[14][4][1]='';
WOMT_aThesenParteien[15][0]='-1';
WOMT_aThesenParteienText[15][0][0]='In der Umsetzung nicht realisierbar.\
<br>';
WOMT_aThesenParteienText[15][0][1]='Ikke muligt at realisere i praksis';
WOMT_aThesenParteien[15][1]='1';
WOMT_aThesenParteienText[15][1][0]='Genau dafür haben wir das Tariftreuegesetz verabschiedet. \
<br>';
WOMT_aThesenParteienText[15][1][1]='Det er nøjagtigt det, vi har vedtaget den såkaldte Tariftreuegesetz til.';
WOMT_aThesenParteien[15][2]='1';
WOMT_aThesenParteienText[15][2][0]='Dies gilt für Bauten und öffentlichen Verkehr.  \
<br>';
WOMT_aThesenParteienText[15][2][1]='Det gælder for byggeri og offentlig trafik.';
WOMT_aThesenParteien[15][3]='-1';
WOMT_aThesenParteienText[15][3][0]='';
WOMT_aThesenParteienText[15][3][1]='';
WOMT_aThesenParteien[15][4]='1';
WOMT_aThesenParteienText[15][4][0]='Der SSW hat das Tariftreuegesetz für Schleswig-Holstein eingebracht.';
WOMT_aThesenParteienText[15][4][1]='Det var SSW, der fremsatte den såkaldte Tariftreuegesetz i Slesvig-Holsten.';
WOMT_aThesenParteien[16][0]='-1';
WOMT_aThesenParteienText[16][0][0]='';
WOMT_aThesenParteienText[16][0][1]='';
WOMT_aThesenParteien[16][1]='0';
WOMT_aThesenParteienText[16][1][0]='Wir setzen in erster Linie auf Freiwilligkeit. Das Bündnis für Ausbildung, in dem alle Akteure zusammenarbeiten, ist ein voller Erfolg. Schleswig-Holstein liegt seit Jahren vorn, was die Ausbildungssituation betrifft. Ziel des regionalen Ausbildungsbündnisses und des nationalen Ausbildungspaktes auf Bundesebene ist es, dass jeder ausbildungsfähige und -willige Jugendliche einen Ausbildungsplatz erhält. Wird diese Zielsetzung auf freiwilliger Basis nicht erreicht, dann wird nach Beschlusslage des Bundestages eine Ausbildungsplatzumlage eingeführt.\
<br>';
WOMT_aThesenParteienText[16][1][1]='Vi satser i første omgang på princippet om frivillighed. Uddannelsespagten (Bündnis für Ausbildung), som alle aktører samarbejder om, er en succes. Slesvig-Holsten har i årevis været i spidsen, hvad uddannelsessituationen angår. Målet med den regionale uddannelsespagt og den nationale uddannelsespagt på forbundsplan er, at alle uddannelsesdygtige og -villige unge skal få en uddannelsesplads. Hvis ikke denne opgave kan opfyldes på frivillig basis, så vil der efter en beslutning i forbundsdagen blive indført et uddannelsespladsafgift.';
WOMT_aThesenParteien[16][2]='1';
WOMT_aThesenParteienText[16][2][0]='Bei klein- und mittelständischen Betrieben kann eine Abgabe kontraproduktiv sein. Dort müssen andere Regelungen getroffen werden.  \
<br>';
WOMT_aThesenParteienText[16][2][1]='Ved små og mellemstore virksomheder kan en afgift være kontraproduktivt. Her skal der andre regler til.';
WOMT_aThesenParteien[16][3]='-1';
WOMT_aThesenParteienText[16][3][0]='';
WOMT_aThesenParteienText[16][3][1]='';
WOMT_aThesenParteien[16][4]='-1';
WOMT_aThesenParteienText[16][4][0]='Wir sind für positive Anreize für Betriebe, die ausbilden.';
WOMT_aThesenParteienText[16][4][1]='Vi foretrækker for positive tilskyndelser til virksomheder, der tilbyder uddannelsespladser.';
WOMT_aThesenParteien[17][0]='1';
WOMT_aThesenParteienText[17][0][0]='';
WOMT_aThesenParteienText[17][0][1]='';
WOMT_aThesenParteien[17][1]='-1';
WOMT_aThesenParteienText[17][1][0]='Wir sind für Freigabe der Öffnungszeiten von Montag bis Samstag. An Sonn- und Feiertagen sollen die Läden geschlossen bleiben.';
WOMT_aThesenParteienText[17][1][1]='Vi er for frie åbningstider fra mandag til lørdag. På søn- og helligdage skal butikkerne fortsat være lukket.';
WOMT_aThesenParteien[17][2]='-1';
WOMT_aThesenParteienText[17][2][0]='';
WOMT_aThesenParteienText[17][2][1]='';
WOMT_aThesenParteien[17][3]='1';
WOMT_aThesenParteienText[17][3][0]='';
WOMT_aThesenParteienText[17][3][1]='';
WOMT_aThesenParteien[17][4]='-1';
WOMT_aThesenParteienText[17][4][0]='';
WOMT_aThesenParteienText[17][4][1]='';
WOMT_aThesenParteien[18][0]='1';
WOMT_aThesenParteienText[18][0][0]='';
WOMT_aThesenParteienText[18][0][1]='';
WOMT_aThesenParteien[18][1]='-1';
WOMT_aThesenParteienText[18][1][0]='Einer kleinen Zahl strafunmündiger Intensiv- und Mehrfachtäter kann nur dann erfolgreich geholfen werden, wenn sie sich der Erziehung nicht durch Verweigerung oder Flucht entziehen können. Schon heute steht in den Einrichtungen der Jugendhilfe ein differenziertes Angebot für die intensive und umfassende Betreuung dieser Kinder und Jugendlichen zur Verfügung. Diese Möglichkeiten sind auszuschöpfen. Die Errichtung einer institutionellen ,geschlossenen Einrichtung´lehnen wir ab.\
<br>';
WOMT_aThesenParteienText[18][1][1]='Man kan kun hjælpe et lille antal ikke strafbare recidivister, hvis disse ikke har mulighed for at unddrage sig opdragelsen ved nægtelse eller flugt. Ungdomsforsorgens institutioner råder allerede i dag over et differenceret tilbud om intensiv og omfattende forsorg for børn og unge. Det gælder om at udnytte disse muligheder. Vi afviser en etablering af en lukket institution.';
WOMT_aThesenParteien[18][2]='0';
WOMT_aThesenParteienText[18][2][0]='Wir wollen keine geschlossenen Heime, Jugendarrest ist in bestimmten Fällen aber notwendig in dafür speziell eingerichteten Anstalten.';
WOMT_aThesenParteienText[18][2][1]='Vi vil ikke have lukkede børnehjem. Ungdomsfængsel kan dog i visse tilfælde være nødvendigt i specielt dertil indrettede anstalter.';
WOMT_aThesenParteien[18][3]='-1';
WOMT_aThesenParteienText[18][3][0]='';
WOMT_aThesenParteienText[18][3][1]='';
WOMT_aThesenParteien[18][4]='-1';
WOMT_aThesenParteienText[18][4][0]='';
WOMT_aThesenParteienText[18][4][1]='';
WOMT_aThesenParteien[19][0]='-1';
WOMT_aThesenParteienText[19][0][0]='';
WOMT_aThesenParteienText[19][0][1]='';
WOMT_aThesenParteien[19][1]='-1';
WOMT_aThesenParteienText[19][1][0]='Die Videoüberwachung ist ein Mittel gegen die Verwahrlosung des öffentlichen Raumes. Wir werden sie aber nur dort unterstützen, wo es sinnvoll ist und die Möglichkeit der direkten Intervention, z.B. durch Polizeibeamte, besteht.\
<br>';
WOMT_aThesenParteienText[19][1][1]='Videoovervågning er et redskab mod vanrøgtelse af offentlige steder. Vi vil dog kun understøtte videovågning dér, hvor det giver mening, og hvor der er mulighed for at skride direkte ind, for eksempel ved hjælp af politiet.';
WOMT_aThesenParteien[19][2]='1';
WOMT_aThesenParteienText[19][2][0]='';
WOMT_aThesenParteienText[19][2][1]='';
WOMT_aThesenParteien[19][3]='1';
WOMT_aThesenParteienText[19][3][0]='';
WOMT_aThesenParteienText[19][3][1]='';
WOMT_aThesenParteien[19][4]='1';
WOMT_aThesenParteienText[19][4][0]='';
WOMT_aThesenParteienText[19][4][1]='';
WOMT_aThesenParteien[20][0]='1';
WOMT_aThesenParteienText[20][0][0]='';
WOMT_aThesenParteienText[20][0][1]='';
WOMT_aThesenParteien[20][1]='1';
WOMT_aThesenParteienText[20][1][0]='Illegales Graffiti ist keine Kunst, sondern eine Sachbeschädigung. Wir werden die rechtlichen Voraussetzungen für eine schnelle und konsequente Strafverfolgung solcher Delikte schaffen. \
<br>';
WOMT_aThesenParteienText[20][1][1]='Illegal grafitti er ikke kunst men hærværk. Vi vil bringe de retslige forudsætninger for en hurtig og konsekvent strafforfølgelse på vejen.';
WOMT_aThesenParteien[20][2]='-1';
WOMT_aThesenParteienText[20][2][0]='';
WOMT_aThesenParteienText[20][2][1]='';
WOMT_aThesenParteien[20][3]='1';
WOMT_aThesenParteienText[20][3][0]='';
WOMT_aThesenParteienText[20][3][1]='';
WOMT_aThesenParteien[20][4]='-1';
WOMT_aThesenParteienText[20][4][0]='';
WOMT_aThesenParteienText[20][4][1]='';
WOMT_aThesenParteien[22][0]='-1';
WOMT_aThesenParteienText[22][0][0]='';
WOMT_aThesenParteienText[22][0][1]='';
WOMT_aThesenParteien[22][1]='0';
WOMT_aThesenParteienText[22][1][0]='Der Alleingang Schleswig-Holsteins bei der Entbeamtung war nicht erfolgreich, weil andere Bundesländer nicht mitgezogen haben. Wir treten dafür ein, Statusveränderungen im bundesweiten Zusammenwirken einzuleiten.\
<br>';
WOMT_aThesenParteienText[22][1][1]='Slesvig-Holstens sololøb ved afskaffelsen af tjenestemandsstatus for lærere blev ingen succes, fordi de andre delstater ikke fulgte efter. Vi anbefaler derfor at indlede statusændringer via et forbundsdækkende samarbejde.';
WOMT_aThesenParteien[22][2]='1';
WOMT_aThesenParteienText[22][2][0]='LehrerInnen sollen in Zukunft nicht mehr verbeamtet werden. Stattdessen soll es tarifliche Vereinbarungen über Arbeitsbedingungen und eine Bezahlung geben, die gute Leistungen belohnt und eine Aufstiegsperspektive beinhaltet. Der Tarif soll unabhängig von der Schulart für alle LehrerInnen gleich sein. Schleswig-Holstein soll dazu eine bundesweite Initiative starten.';
WOMT_aThesenParteienText[22][2][1]='Lærere skal fremover ikke længere have tjenestemandsstatus. I stedet skal der træffes overenskomstaftaler om arbejdsvilkår og løn, så godt arbejde belønnes og indeholder perspektiver for en karriereudvikling. Overenskomsten skal være ens for alle lærere uanset skoleform. Slesvig-Holsten skal tage et forbundsdækkende initiativ på dette område.';
WOMT_aThesenParteien[22][3]='-1';
WOMT_aThesenParteienText[22][3][0]='';
WOMT_aThesenParteienText[22][3][1]='';
WOMT_aThesenParteien[22][4]='1';
WOMT_aThesenParteienText[22][4][0]='';
WOMT_aThesenParteienText[22][4][1]='';
WOMT_aThesenParteien[23][0]='1';
WOMT_aThesenParteienText[23][0][0]='Kooperation auf freiwilliger Basis fördern.\
<br>';
WOMT_aThesenParteienText[23][0][1]='Samarbejde på frivillig basis skal støttes.';
WOMT_aThesenParteien[23][1]='1';
WOMT_aThesenParteienText[23][1][0]='Zusammenschlüsse auf freiwilliger Basis werden von uns unterstützt.\
<br>';
WOMT_aThesenParteienText[23][1][1]='Vi støtter sammenlægninger på frivillig basis.';
WOMT_aThesenParteien[23][2]='-1';
WOMT_aThesenParteienText[23][2][0]='';
WOMT_aThesenParteienText[23][2][1]='';
WOMT_aThesenParteien[23][3]='0';
WOMT_aThesenParteienText[23][3][0]='Kooperationen sollen über ein Anreizsystem gefördert werden. Zusammenschlüsse sollen nur auf freiwilliger Basis passieren.';
WOMT_aThesenParteienText[23][3][1]='Samarbejde bør tilskyndes ved hjælp af et incitamentsystem. Sammenlægninger skal kun ske på frivillig basis.';
WOMT_aThesenParteien[23][4]='0';
WOMT_aThesenParteienText[23][4][0]='Viel wichtiger ist es, dass sich kleine Gemeinden endlich zusammenlegen.';
WOMT_aThesenParteienText[23][4][1]='Det er meget vigtigere, at de små kommuner endelig når frem til sammenlægninger.';
WOMT_aThesenParteien[24][0]='-1';
WOMT_aThesenParteienText[24][0][0]='';
WOMT_aThesenParteienText[24][0][1]='';
WOMT_aThesenParteien[24][1]='-1';
WOMT_aThesenParteienText[24][1][0]='Die Stimmabgabe per Internet bei Wahlen halten wir wegen der enormen Missbrauchs- und Manipulationsgefahr für nicht realisierbar.\
<br>';
WOMT_aThesenParteienText[24][1][1]='At borgerne kan afgive deres stemme pr. internet vil næppe kunne realiseres på grund af stor fare for misbrug og manipulation.';
WOMT_aThesenParteien[24][2]='1';
WOMT_aThesenParteienText[24][2][0]='';
WOMT_aThesenParteienText[24][2][1]='';
WOMT_aThesenParteien[24][3]='1';
WOMT_aThesenParteienText[24][3][0]='Nur wenn die technischen Voraussetzungen gegeben sind, dass eine freie, gleiche, geheime Wahl gesichert ist.';
WOMT_aThesenParteienText[24][3][1]='Kun hvis de tekniske betingelser er opfyldt for at kunne garantere for et frit, ens og hemmeligt valg.';
WOMT_aThesenParteien[24][4]='-1';
WOMT_aThesenParteienText[24][4][0]='';
WOMT_aThesenParteienText[24][4][1]='';
WOMT_aThesenParteien[25][0]='-1';
WOMT_aThesenParteienText[25][0][0]='';
WOMT_aThesenParteienText[25][0][1]='';
WOMT_aThesenParteien[25][1]='1';
WOMT_aThesenParteienText[25][1][0]='';
WOMT_aThesenParteienText[25][1][1]='';
WOMT_aThesenParteien[25][2]='1';
WOMT_aThesenParteienText[25][2][0]='';
WOMT_aThesenParteienText[25][2][1]='';
WOMT_aThesenParteien[25][3]='-1';
WOMT_aThesenParteienText[25][3][0]='';
WOMT_aThesenParteienText[25][3][1]='';
WOMT_aThesenParteien[25][4]='1';
WOMT_aThesenParteienText[25][4][0]='';
WOMT_aThesenParteienText[25][4][1]='';
WOMT_aThesenParteien[28][0]='-1';
WOMT_aThesenParteienText[28][0][0]='';
WOMT_aThesenParteienText[28][0][1]='';
WOMT_aThesenParteien[28][1]='1';
WOMT_aThesenParteienText[28][1][0]='Schrittweiser Ausstieg mit wirtschaftlichen Alternativen für die betroffenen Regionen\
<br>';
WOMT_aThesenParteienText[28][1][1]='Trinvis afskaffelse med økonomiske alternativer til den berørte region.';
WOMT_aThesenParteien[28][2]='1';
WOMT_aThesenParteienText[28][2][0]='Bündnis 90/DIE GRÜNEN halten am Ziel des Ausstiegs aus der Atomenergie fest.';
WOMT_aThesenParteienText[28][2][1]='Bündnis 90/De Grønne holder fast i kravet om at give fuldstændig afkald på atomenergi.';
WOMT_aThesenParteien[28][3]='0';
WOMT_aThesenParteienText[28][3][0]='Energiekonsens wird umgesetzt. Bund ist zuständig.';
WOMT_aThesenParteienText[28][3][1]='Energikonsensus bliver ført ud i livet. Det er et statsanliggende.';
WOMT_aThesenParteien[28][4]='1';
WOMT_aThesenParteienText[28][4][0]='';
WOMT_aThesenParteienText[28][4][1]='';
WOMT_aThesenParteien[26][0]='-1';
WOMT_aThesenParteienText[26][0][0]='';
WOMT_aThesenParteienText[26][0][1]='';
WOMT_aThesenParteien[26][1]='1';
WOMT_aThesenParteienText[26][1][0]='Ziel bis 2010: 50% des Stromverbrauchs in Schleswig-Holstein mit regenerativen Energien decken.\
<br>';
WOMT_aThesenParteienText[26][1][1]='Målsætningen til 2010: 50% af strømforbruget i Slesvig-Holsten skal kunne dækkes af vedvarende energi.';
WOMT_aThesenParteien[26][2]='1';
WOMT_aThesenParteienText[26][2][0]='';
WOMT_aThesenParteienText[26][2][1]='';
WOMT_aThesenParteien[26][3]='0';
WOMT_aThesenParteienText[26][3][0]='';
WOMT_aThesenParteienText[26][3][1]='';
WOMT_aThesenParteien[26][4]='1';
WOMT_aThesenParteienText[26][4][0]='';
WOMT_aThesenParteienText[26][4][1]='';
WOMT_aThesenParteien[27][0]='-1';
WOMT_aThesenParteienText[27][0][0]='';
WOMT_aThesenParteienText[27][0][1]='';
WOMT_aThesenParteien[27][1]='1';
WOMT_aThesenParteienText[27][1][0]='Über 11% Naturschutzfläche in SH sind ein guter Stand. Die Qualität des Naturschutzes in und außerhalb des Naturschutzgesetzes wollen wir  verbessern.\
<br>';
WOMT_aThesenParteienText[27][1][1]='Over 11% naturfredet areal i Slesvig-Holsten er en god status. Vi vil forbedre kvaliteten af naturfredning i og uden for naturfredningsloven.';
WOMT_aThesenParteien[27][2]='1';
WOMT_aThesenParteienText[27][2][0]='15% der Landesfläche müssen gemäß unserem Landesnaturschutzgesetz zu Vorrangflächen für den Naturschutz erklärt werden. 11,3% der Landesfläche sind bereits vor allem durch die Umsetzung der Natura 2000 geschützt. Um 15% zu erreichen, ist zu erwägen, ob noch  weitere zusätzliche Naturschutzgebiete ausgewiesen werden müssen. In der nächsten Legislaturperiode wird die Umsetzung der EU-Wasserrahmenrichtlinie Vorrang haben.\
<br>';
WOMT_aThesenParteienText[27][2][1]='15% af delstatsarealet skal ifølge Slesvig-Holstens naturfredningslov primært udpeges til naturfredningsområder. 11,3% af delstaten er allerede fredet som led i Natura 2000. For at opnå de 15% bør man overveje, om der skal udpeges yderligere naturfredningsarealer. I den kommende valgperiode vil realiseringen af EUs-vandrammedirektiv have første prioritet.';
WOMT_aThesenParteien[27][3]='-1';
WOMT_aThesenParteienText[27][3][0]='';
WOMT_aThesenParteienText[27][3][1]='';
WOMT_aThesenParteien[27][4]='1';
WOMT_aThesenParteienText[27][4][0]='Aber im Dialog mit den Menschen vor Ort.';
WOMT_aThesenParteienText[27][4][1]='Men kun i dialog med menneskene i de berørte lokalområder.';
WOMT_aThesenParteien[21][4]='0';
WOMT_aThesenParteienText[21][4][0]='Wir sind dagegen, dass die Konsumenten von Cannabis bestraft werden. Eine vollkommene Freigabe lehnen wir aber ab.';
WOMT_aThesenParteienText[21][4][1]='Vi er imod, at cannabiskonsumeter straffes. Vi afviser dog en ubetinget frigivelse af cannabis.';
WOMT_aThesenParteien[21][3]='0';
WOMT_aThesenParteienText[21][3][0]='Die FDP setzt sich für die Entkriminalisierung von sog. ,weichen Drogen´ ein.';
WOMT_aThesenParteienText[21][3][1]='FDP sætter sig ind for afkriminaliseringen af såkaldt "blød narko".';
WOMT_aThesenParteien[21][2]='1';
WOMT_aThesenParteienText[21][2][0]='Um Kleinkriminalität und der Verbreitung von unreiner Ware entgegenzuwirken.';
WOMT_aThesenParteienText[21][2][1]='For at forebygge småkriminalitet og for at undgå, at der kommer "uren" cannabis (tilsat andre stoffer) i omløb.';
WOMT_aThesenParteien[21][1]='-1';
WOMT_aThesenParteienText[21][1][0]='';
WOMT_aThesenParteienText[21][1][1]='';
WOMT_aThesenParteien[21][0]='-1';
WOMT_aThesenParteienText[21][0][0]='';
WOMT_aThesenParteienText[21][0][1]='';
WOMT_aParteienLogos[0]=new Array();
WOMT_aParteienLogos2[0]=new Array();
WOMT_aParteienLogos[0][0]='images/parteien_39.gif';
WOMT_aParteienLogos2[0][0]='images/parteien_logo2_39.gif';
WOMT_aParteienLogos[0][1]='183';
WOMT_aParteienLogos[0][2]='42';
WOMT_aParteienLogos2[0][1]='225';
WOMT_aParteienLogos2[0][2]='72';
WOMT_aParteien[0]=new Array();
WOMT_aParteien[0][0]=new Array();
WOMT_aParteien[0][0][0]='CDU';
WOMT_aParteien[0][0][1]='CDU';
WOMT_aParteien[0][1]=new Array();
WOMT_aParteien[0][1][0]='CDU';
WOMT_aParteien[0][1][1]='CDU';
WOMT_aParteienLogos[1]=new Array();
WOMT_aParteienLogos2[1]=new Array();
WOMT_aParteienLogos[1][0]='images/parteien_40.gif';
WOMT_aParteienLogos2[1][0]='images/parteien_logo2_40.gif';
WOMT_aParteienLogos[1][1]='71';
WOMT_aParteienLogos[1][2]='71';
WOMT_aParteienLogos2[1][1]='225';
WOMT_aParteienLogos2[1][2]='72';
WOMT_aParteien[1]=new Array();
WOMT_aParteien[1][0]=new Array();
WOMT_aParteien[1][0][0]='SPD';
WOMT_aParteien[1][0][1]='SPD';
WOMT_aParteien[1][1]=new Array();
WOMT_aParteien[1][1][0]='SPD';
WOMT_aParteien[1][1][1]='SPD';
WOMT_aParteienLogos[2]=new Array();
WOMT_aParteienLogos2[2]=new Array();
WOMT_aParteienLogos[2][0]='images/parteien_41.gif';
WOMT_aParteienLogos2[2][0]='images/parteien_logo2_41.gif';
WOMT_aParteienLogos[2][1]='92';
WOMT_aParteienLogos[2][2]='62';
WOMT_aParteienLogos2[2][1]='225';
WOMT_aParteienLogos2[2][2]='72';
WOMT_aParteien[2]=new Array();
WOMT_aParteien[2][0]=new Array();
WOMT_aParteien[2][0][0]='Bündnis 90 / Die Grünen';
WOMT_aParteien[2][0][1]='Die Grünen';
WOMT_aParteien[2][1]=new Array();
WOMT_aParteien[2][1][0]='Bündnis 90 / Die Grünen';
WOMT_aParteien[2][1][1]='Die Grünen';
WOMT_aParteienLogos[3]=new Array();
WOMT_aParteienLogos2[3]=new Array();
WOMT_aParteienLogos[3][0]='images/parteien_42.gif';
WOMT_aParteienLogos2[3][0]='images/parteien_logo2_42.gif';
WOMT_aParteienLogos[3][1]='73';
WOMT_aParteienLogos[3][2]='72';
WOMT_aParteienLogos2[3][1]='225';
WOMT_aParteienLogos2[3][2]='72';
WOMT_aParteien[3]=new Array();
WOMT_aParteien[3][0]=new Array();
WOMT_aParteien[3][0][0]='FDP';
WOMT_aParteien[3][0][1]='FDP';
WOMT_aParteien[3][1]=new Array();
WOMT_aParteien[3][1][0]='FDP';
WOMT_aParteien[3][1][1]='FDP';
WOMT_aParteienLogos[4]=new Array();
WOMT_aParteienLogos2[4]=new Array();
WOMT_aParteienLogos[4][0]='images/parteien_43.gif';
WOMT_aParteienLogos2[4][0]='images/parteien_logo2_43.gif';
WOMT_aParteienLogos[4][1]='123';
WOMT_aParteienLogos[4][2]='72';
WOMT_aParteienLogos2[4][1]='225';
WOMT_aParteienLogos2[4][2]='72';
WOMT_aParteien[4]=new Array();
WOMT_aParteien[4][0]=new Array();
WOMT_aParteien[4][0][0]='SSW';
WOMT_aParteien[4][0][1]='SSW';
WOMT_aParteien[4][1]=new Array();
WOMT_aParteien[4][1][0]='SSW';
WOMT_aParteien[4][1][1]='SSW';
WOMT_aThemen[0]=new Array();
WOMT_aThemen[0][0]='Gesundheit, Familie, Soziales';
WOMT_aThemen[0][1]='Sundhed, familie, socialpolitik';
WOMT_aThemen[1]=new Array();
WOMT_aThemen[1][0]='Schule und Hochschule';
WOMT_aThemen[1][1]='Skolevæsen og vidergående uddannelse';
WOMT_aThemen[2]=new Array();
WOMT_aThemen[2][0]='Verkehr und Infrastruktur';
WOMT_aThemen[2][1]='Trafik og infrastruktur';
WOMT_aThemen[3]=new Array();
WOMT_aThemen[3][0]='Arbeit und Wirtschaft';
WOMT_aThemen[3][1]='Arbejds-markeds- og erhverspolitik';
WOMT_aThemen[4]=new Array();
WOMT_aThemen[4][0]='Justiz und Inneres';
WOMT_aThemen[4][1]='Justits og indenrigspolitik';
WOMT_aThemen[5]=new Array();
WOMT_aThemen[5][0]='Umwelt und Energie';
WOMT_aThemen[5][1]='Miljø og energi';
WOMT_aTexte['auswertung_andere_user']=new Array();
WOMT_aTexte['auswertung_andere_user'][0]='Sollte Ihr Ergebnis nicht mit Ihrer Wahlabsicht übereinstimmen, liegt das auch daran, dass eine Wahlentscheidung noch von vielen anderen Faktoren beeinflusst wird. Auch können wir mit der Thesenauswahl nicht alle Fragen abdecken, die für Sie persönlich wichtig sind.\
<br>\
<br>Welches Ergebnis bekamen die anderen Nutzerinnen und Nutzer des Wahl-O-Mat?';
WOMT_aTexte['auswertung_andere_user'][1]='Sollte Ihr Ergebnis nicht mit Ihrer Wahlabsicht übereinstimmen, liegt das auch daran, dass eine Wahlentscheidung noch von vielen anderen Faktoren beeinflusst wird. Auch können wir mit der Thesenauswahl nicht alle Fragen abdecken, die für Sie persönlich wichtig sind.\
<br>\
<br>Welches Ergebnis bekamen die anderen Nutzerinnen und Nutzer des Wahl-O-Mat?';
WOMT_aTexte['auswertung_link_zu_statistik']=new Array();
WOMT_aTexte['auswertung_link_zu_statistik'][0]='Auswertung aller bisherigen Ergebnisse';
WOMT_aTexte['auswertung_link_zu_statistik'][1]='Auswertung aller bisherigen Ergebnisse';
WOMT_aTexte['auswertung_text']=new Array();
WOMT_aTexte['auswertung_text'][0]='Ihre Angaben haben die höchste Übereinstimmung mit der Partei XXXX';
WOMT_aTexte['auswertung_text'][1]='Ihre Angaben haben die höchste Übereinstimmung mit der Partei XXXX';
WOMT_aTexte['auswertung_text2']=new Array();
WOMT_aTexte['auswertung_text2'][0]='In der folgenden Liste sind alle Parteien aufgeführt - von der mit der größten bis zu der mit der geringsten Übereinstimmung mit Ihren Positionen. Wenn Sie auf einen Parteinamen klicken, erfahren Sie mehr über die Übereinstimmung bzw. Nichtübereinstimmung mit dieser Partei zu den einzelnen Thesen.';
WOMT_aTexte['auswertung_text2'][1]='In der folgenden Liste sind alle Parteien aufgeführt - von der mit der größten bis zu der mit der geringsten Übereinstimmung mit Ihren Positionen. Wenn Sie auf einen Parteinamen klicken, erfahren Sie mehr über die Übereinstimmung bzw. Nichtübereinstimmung mit dieser Partei zu den einzelnen Thesen.';
WOMT_aTexte['auswertung_thesenvergleich']=new Array();
WOMT_aTexte['auswertung_thesenvergleich'][0]='Thesenvergleich';
WOMT_aTexte['auswertung_thesenvergleich'][1]='Thesenvergleich';
WOMT_aTexte['auswertung_titel']=new Array();
WOMT_aTexte['auswertung_titel'][0]='Ergebnis';
WOMT_aTexte['auswertung_titel'][1]='Ergebnis';
WOMT_aTexte['auswertung_uebereinstimmung']=new Array();
WOMT_aTexte['auswertung_uebereinstimmung'][0]='Übereinstimmung';
WOMT_aTexte['auswertung_uebereinstimmung'][1]='Übereinstimmung';
WOMT_aTexte['auswertung_uebereinstimmung_gross']=new Array();
WOMT_aTexte['auswertung_uebereinstimmung_gross'][0]='gross';
WOMT_aTexte['auswertung_uebereinstimmung_gross'][1]='gross';
WOMT_aTexte['auswertung_uebereinstimmung_klein']=new Array();
WOMT_aTexte['auswertung_uebereinstimmung_klein'][0]='klein';
WOMT_aTexte['auswertung_uebereinstimmung_klein'][1]='klein';
WOMT_aTexte['ausw_details_benutzer_ablehnung']=new Array();
WOMT_aTexte['ausw_details_benutzer_ablehnung'][0]='Ich stimme nicht zu';
WOMT_aTexte['ausw_details_benutzer_ablehnung'][1]='Ich stimme nicht zu';
WOMT_aTexte['ausw_details_benutzer_keine_meinung']=new Array();
WOMT_aTexte['ausw_details_benutzer_keine_meinung'][0]='keine Angabe';
WOMT_aTexte['ausw_details_benutzer_keine_meinung'][1]='keine Angabe';
WOMT_aTexte['ausw_details_benutzer_neutral']=new Array();
WOMT_aTexte['ausw_details_benutzer_neutral'][0]='Ich bin neutral';
WOMT_aTexte['ausw_details_benutzer_neutral'][1]='Ich bin neutral';
WOMT_aTexte['ausw_details_benutzer_zustimmung']=new Array();
WOMT_aTexte['ausw_details_benutzer_zustimmung'][0]='Ich stimme zu';
WOMT_aTexte['ausw_details_benutzer_zustimmung'][1]='Ich stimme zu';
WOMT_aTexte['ausw_details_partei_ablehnung']=new Array();
WOMT_aTexte['ausw_details_partei_ablehnung'][0]='Partei stimmt nicht zu';
WOMT_aTexte['ausw_details_partei_ablehnung'][1]='Partei stimmt nicht zu';
WOMT_aTexte['ausw_details_partei_keine_meinung']=new Array();
WOMT_aTexte['ausw_details_partei_keine_meinung'][0]='keine Angabe';
WOMT_aTexte['ausw_details_partei_keine_meinung'][1]='keine Angabe';
WOMT_aTexte['ausw_details_partei_neutral']=new Array();
WOMT_aTexte['ausw_details_partei_neutral'][0]='Partei ist neutral';
WOMT_aTexte['ausw_details_partei_neutral'][1]='Partei ist neutral';
WOMT_aTexte['ausw_details_partei_zustimmung']=new Array();
WOMT_aTexte['ausw_details_partei_zustimmung'][0]='Partei stimmt zu';
WOMT_aTexte['ausw_details_partei_zustimmung'][1]='Partei stimmt zu';
WOMT_aTexte['ausw_detail_abstand']=new Array();
WOMT_aTexte['ausw_detail_abstand'][0]='Abstand';
WOMT_aTexte['ausw_detail_abstand'][1]='Abstand';
WOMT_aTexte['ausw_detail_abstand']=new Array();
WOMT_aTexte['ausw_detail_abstand'][0]='Wählen Sie aus!';
WOMT_aTexte['ausw_detail_abstand'][1]='Wählen Sie aus!';
WOMT_aTexte['ausw_detail_gross']=new Array();
WOMT_aTexte['ausw_detail_gross'][0]='groß';
WOMT_aTexte['ausw_detail_gross'][1]='groß';
WOMT_aTexte['ausw_detail_gross_pfeil']=new Array();
WOMT_aTexte['ausw_detail_gross_pfeil'][0]='große Übereinstimmung';
WOMT_aTexte['ausw_detail_gross_pfeil'][1]='große Übereinstimmung';
WOMT_aTexte['ausw_detail_klein']=new Array();
WOMT_aTexte['ausw_detail_klein'][0]='klein';
WOMT_aTexte['ausw_detail_klein'][1]='klein';
WOMT_aTexte['ausw_detail_klein_pfeil']=new Array();
WOMT_aTexte['ausw_detail_klein_pfeil'][0]='kleine Übereinstimmung';
WOMT_aTexte['ausw_detail_klein_pfeil'][1]='kleine Übereinstimmung';
WOMT_aTexte['ausw_detail_partei']=new Array();
WOMT_aTexte['ausw_detail_partei'][0]='Partei';
WOMT_aTexte['ausw_detail_partei'][1]='Partei';
WOMT_aTexte['ausw_detail_siedu']=new Array();
WOMT_aTexte['ausw_detail_siedu'][0]='Sie';
WOMT_aTexte['ausw_detail_siedu'][1]='Sie';
WOMT_aTexte['ausw_detail_text']=new Array();
WOMT_aTexte['ausw_detail_text'][0]='Diese Detailauswertung vergleicht Ihre Antworten zu jeder These mit den Antworten einer einzelnen Partei. Jede Partei kann einer These neutral, zustimmend oder ablehnend gegenüberstehen. Ihre Einschätzung wird mit dieser Position verglichen. Sollten Sie bei einer These "Keine Angabe" angekreuzt haben, wird diese These nicht mit gewertet.\
<br>\
<br>Mit einem Klick auf die Thesen erhalten Sie die Begründungen der oben angezeigten Partei.';
WOMT_aTexte['ausw_detail_text'][1]='Diese Detailauswertung vergleicht Ihre Antworten zu jeder These mit den Antworten einer einzelnen Partei. Jede Partei kann einer These neutral, zustimmend oder ablehnend gegenüberstehen. Ihre Einschätzung wird mit dieser Position verglichen. Sollten Sie bei einer These "Keine Angabe" angekreuzt haben, wird diese These nicht mit gewertet.\
<br>\
<br>Mit einem Klick auf die Thesen erhalten Sie die Begründungen der oben angezeigten Partei.';
WOMT_aTexte['ausw_detail_text_popup']=new Array();
WOMT_aTexte['ausw_detail_text_popup'][0]='Diese Detailauswertung vergleicht Ihre Antworten zu jeder These mit den Antworten einer einzelnen Partei. Jede Partei kann einer These neutral, zustimmend oder ablehnend gegenüberstehen. Ihre Einschätzung wird mit dieser Position verglichen. Sollten Sie bei einer These "Keine Angabe" angekreuzt haben, wird diese These nicht mit gewertet.\
<br>\
<br>Mit einem Klick auf die Thesen erhalten Sie die Begründungen der oben angezeigten Partei.';
WOMT_aTexte['ausw_detail_text_popup'][1]='Diese Detailauswertung vergleicht Ihre Antworten zu jeder These mit den Antworten einer einzelnen Partei. Jede Partei kann einer These neutral, zustimmend oder ablehnend gegenüberstehen. Ihre Einschätzung wird mit dieser Position verglichen. Sollten Sie bei einer These "Keine Angabe" angekreuzt haben, wird diese These nicht mit gewertet.\
<br>\
<br>Mit einem Klick auf die Thesen erhalten Sie die Begründungen der oben angezeigten Partei.';
WOMT_aTexte['ausw_detail_these']=new Array();
WOMT_aTexte['ausw_detail_these'][0]='These';
WOMT_aTexte['ausw_detail_these'][1]='Tese';
WOMT_aTexte['ausw_detail_thesenvergleich']=new Array();
WOMT_aTexte['ausw_detail_thesenvergleich'][0]='Thesenvergleich mit...';
WOMT_aTexte['ausw_detail_thesenvergleich'][1]='Thesenvergleich mit...';
WOMT_aTexte['bpb_bezeichnung']=new Array();
WOMT_aTexte['bpb_bezeichnung'][0]='© Bundeszentrale für politische Bildung';
WOMT_aTexte['bpb_bezeichnung'][1]='© Bundeszentrale für politische Bildung';
WOMT_aTexte['extern_bpb_wahlomat_url']=new Array();
WOMT_aTexte['extern_bpb_wahlomat_url'][0]='http://www.bpb.de/methodik/9YXJLT,0,0,WahlOMat_SchleswigHolstein.html';
WOMT_aTexte['extern_bpb_wahlomat_url'][1]='http://www.bpb.de/methodik/9YXJLT,0,0,WahlOMat_SchleswigHolstein.html';
WOMT_aTexte['extern_parteien_text']=new Array();
WOMT_aTexte['extern_parteien_text'][0]='Liste aller zur Wahl zugelassenen Parteien';
WOMT_aTexte['extern_parteien_text'][1]='Liste aller zur Wahl zugelassenen Parteien';
WOMT_aTexte['extern_wahlleiter_text']=new Array();
WOMT_aTexte['extern_wahlleiter_text'][0]='Landeswahlleiter Schleswig-Holstein';
WOMT_aTexte['extern_wahlleiter_text'][1]='Landeswahlleiter Schleswig-Holstein';
WOMT_aTexte['extern_wahlleiter_url']=new Array();
WOMT_aTexte['extern_wahlleiter_url'][0]='http://www.statistik-sh.de/LW05/index.htm';
WOMT_aTexte['extern_wahlleiter_url'][1]='http://www.statistik-sh.de/LW05/index.htm';
WOMT_aTexte['faq_erklaerung_wahlomat']=new Array();
WOMT_aTexte['faq_erklaerung_wahlomat'][0]='Der Wahl-O-Mat bietet Ihnen anhand von 29 Thesen einen Einblick in wichtige Fragen zur Landespolitik in Schleswig-Holstein. Vergleichen Sie Ihre eigenen Ansichten mit den Positionen der einzelnen Parteien und finden Sie heraus: Welche Partei vertritt Ihre Meinung am besten? Am Ende erhalten Sie Ihre persönliche Wahl-O-Mat Empfehlung: Die Angabe der Partei, mit der die größte Übereinstimmung herrscht.\
<br>\
<br>Die Thesen wurden von einem Redaktionsteam aus zwölf Jung- bzw. Erstwählerinnen und -wählern auf der Basis der Wahlprogramme der Parteien entwickelt. Sie wurden dabei unterstützt von der Bundeszentrale für politische Bildung/bpb, den Kooperationspartnern und den Wissenschaftlern Dr. Stefan Marschall, Wolf Dittmayer und Dr. Norbert Taubken. Alle Antworten wurden von den beteiligten Parteien autorisiert.\
<br>\
<br>Für die Landtagswahl in Schleswig-Holstein am 20. Februar 2005 sind SPD, CDU, Bündnis 90/Grüne, FDP und der SSW im Wahl-O-Mat vertreten.\
<br>\
<br>Die am häufigsten gestellten Fragen zum Wahl-O-Mat werden hier beantwortet. Sollten Sie weitere Fragen haben, schicken Sie uns einfach eine E-Mail: <a href="mailto:info@wahl-o-mat.de">info@wahl-o-mat.de</a>.';
WOMT_aTexte['faq_erklaerung_wahlomat'][1]='Der Wahl-O-Mat bietet Ihnen anhand von 29 Thesen einen Einblick in wichtige Fragen zur Landespolitik in Schleswig-Holstein. Vergleichen Sie Ihre eigenen Ansichten mit den Positionen der einzelnen Parteien und finden Sie heraus: Welche Partei vertritt Ihre Meinung am besten? Am Ende erhalten Sie Ihre persönliche Wahl-O-Mat Empfehlung: Die Angabe der Partei, mit der die größte Übereinstimmung herrscht.\
<br>\
<br>Die Thesen wurden von einem Redaktionsteam aus zwölf Jung- bzw. Erstwählerinnen und -wählern auf der Basis der Wahlprogramme der Parteien entwickelt. Sie wurden dabei unterstützt von der Bundeszentrale für politische Bildung/bpb, den Kooperationspartnern und den Wissenschaftlern Dr. Stefan Marschall, Wolf Dittmayer und Dr. Norbert Taubken. Alle Antworten wurden von den beteiligten Parteien autorisiert.\
<br>\
<br>Für die Landtagswahl in Schleswig-Holstein am 20. Februar 2005 sind SPD, CDU, Bündnis 90/Grüne, FDP und der SSW im Wahl-O-Mat vertreten.\
<br>\
<br>Die am häufigsten gestellten Fragen zum Wahl-O-Mat werden hier beantwortet. Sollten Sie weitere Fragen haben, schicken Sie uns einfach eine E-Mail: <a href="mailto:info@wahl-o-mat.de">info@wahl-o-mat.de</a>.';
WOMT_aTexte['faq_frage1_antwort']=new Array();
WOMT_aTexte['faq_frage1_antwort'][0]='Aus Gründen der statistischen Unterscheidbarkeit und der Handhabbarkeit des Tools können nicht alle zur Wahl zugelassenen Parteien in den Wahl-O-Mat aufgenommen werden. Wir legen bei der Auswahl der Parteien objektive und systematische Kriterien an. Aufgenommen werden,\
<br>\
<br>1. Parteien, die bereits im Landesparlament vertreten sind,\
<br>2. Parteien, die nach seriösen Prognosen eine realistische Chance haben, Parlamentsmandate zu erhalten (über drei Prozent in der "Sonntagsfrage").\
<br>\
<br>Damit werden sowohl die etablierten Parteien, aber auch neu aufkommende Gruppierungen hinreichend berücksichtigt. Mit diesen Kriterien sind Kleinstparteien und -gruppierungen ausgeschlossen, die sich nur auf wenige Themen oder gar nur auf einen Schwerpunkt konzentrieren. Diese passen auch aus inhaltlichen Gründen nicht in den Wahl-O-Mat, der mit seinen Thesen das gesamte Spektrum gesellschaftlicher und politischer Fragen abdeckt. Denn ein wesentliches Ziel des Wahl-O-Mat ist es, die programmatischen Unterschiede zwischen den Parteien in der Breite zu verdeutlichen.\
<br>\
<br>Eine derart abgestufte Behandlung von Parteien ist laut Parteiengesetz möglich und zulässig. Wir kommen dem Informationsbedürfnis über alle zur Wahl zugelassenen Parteien durch einen entsprechenden Link auf die Seite des Landeswahlleiters nach, wo diese dargestellt werden.';
WOMT_aTexte['faq_frage1_antwort'][1]='Aus Gründen der statistischen Unterscheidbarkeit und der Handhabbarkeit des Tools können nicht alle zur Wahl zugelassenen Parteien in den Wahl-O-Mat aufgenommen werden. Wir legen bei der Auswahl der Parteien objektive und systematische Kriterien an. Aufgenommen werden,\
<br>\
<br>1. Parteien, die bereits im Landesparlament vertreten sind,\
<br>2. Parteien, die nach seriösen Prognosen eine realistische Chance haben, Parlamentsmandate zu erhalten (über drei Prozent in der "Sonntagsfrage").\
<br>\
<br>Damit werden sowohl die etablierten Parteien, aber auch neu aufkommende Gruppierungen hinreichend berücksichtigt. Mit diesen Kriterien sind Kleinstparteien und -gruppierungen ausgeschlossen, die sich nur auf wenige Themen oder gar nur auf einen Schwerpunkt konzentrieren. Diese passen auch aus inhaltlichen Gründen nicht in den Wahl-O-Mat, der mit seinen Thesen das gesamte Spektrum gesellschaftlicher und politischer Fragen abdeckt. Denn ein wesentliches Ziel des Wahl-O-Mat ist es, die programmatischen Unterschiede zwischen den Parteien in der Breite zu verdeutlichen.\
<br>\
<br>Eine derart abgestufte Behandlung von Parteien ist laut Parteiengesetz möglich und zulässig. Wir kommen dem Informationsbedürfnis über alle zur Wahl zugelassenen Parteien durch einen entsprechenden Link auf die Seite des Landeswahlleiters nach, wo diese dargestellt werden.';
WOMT_aTexte['faq_frage1_frage']=new Array();
WOMT_aTexte['faq_frage1_frage'][0]='Nach welchen Kriterien werden die Parteien für den Wahl-O-Mat ausgesucht?';
WOMT_aTexte['faq_frage1_frage'][1]='Nach welchen Kriterien werden die Parteien für den Wahl-O-Mat ausgesucht?';
WOMT_aTexte['faq_frage2_antwort']=new Array();
WOMT_aTexte['faq_frage2_antwort'][0]='Der Wahl-O-Mat ist für die Bundesrepublik Deutschland erstmals zur Bundestagswahl 2002 eingesetzt worden. Er ist von einer unabhängigen Redaktion, die aus Jugendlichen und jungen Erwachsenen besteht, in Kooperation mit der Bundeszentrale für politische Bildung/bpb und mit Unterstützung ihrer Partner und des niederländischen Instituut voor Publiek en Politiek (Institut für Öffentlichkeit und Politik - IPP) entwickelt worden. Der Wahl-O-Mat ging aus dem StemWijzer hervor. Das ist ein vom IPP entwickelter Test, mit dem Sie feststellen können, wie Sie persönlich zu den Zielen und Positionen von Parteien stehen. Dieser Test ist in den Niederlanden seit Langem sehr populär: Über 2 Millionen Niederländerinnen und Niederländer haben bei den letzten Nationalwahlen 2002 und 2003 den Test gemacht! Auch bei der Bundestagswahl 2002 haben knapp vier Millionen Userinnen und User den Wahl-O-Mat getestet. Darüber hinaus kam der Wahl-O-Mat mittlerweile bei verschiedenen Landtagswahlen und bei der Europawahl 2004 zum Einsatz.\
<br>\
<br>Die Redaktion des Wahl-O-Mat Schleswig Holstein 2005 hat den Parteien SPD, CDU, Bündnis 90/Grüne, FDP und der SSW, die im Landtag vertreten sind bzw. nach Prognosen eine realistische Chance haben, in den Landtag einzuziehen, eine Liste mit 63 Thesen geschickt. Sie wurden gebeten, die Thesen entsprechend der Parteihaltung mit "stimme zu", "stimme nicht zu" oder "neutral" zu beantworten. Aus den ausgefüllten Listen wurden diejenigen Thesen rechnerisch ermittelt, die keine ausreichende Unterscheidung der Parteien möglich machten, und entfernt. Die Redaktion hat aus den verbleibenden Thesen eine endgültige Auswahl getroffen, die in den Wahl-O-Mat eingebunden wurden. Die Parteien waren an der Endauswahl der Thesen nicht beteiligt.';
WOMT_aTexte['faq_frage2_antwort'][1]='Der Wahl-O-Mat ist für die Bundesrepublik Deutschland erstmals zur Bundestagswahl 2002 eingesetzt worden. Er ist von einer unabhängigen Redaktion, die aus Jugendlichen und jungen Erwachsenen besteht, in Kooperation mit der Bundeszentrale für politische Bildung/bpb und mit Unterstützung ihrer Partner und des niederländischen Instituut voor Publiek en Politiek (Institut für Öffentlichkeit und Politik - IPP) entwickelt worden. Der Wahl-O-Mat ging aus dem StemWijzer hervor. Das ist ein vom IPP entwickelter Test, mit dem Sie feststellen können, wie Sie persönlich zu den Zielen und Positionen von Parteien stehen. Dieser Test ist in den Niederlanden seit Langem sehr populär: Über 2 Millionen Niederländerinnen und Niederländer haben bei den letzten Nationalwahlen 2002 und 2003 den Test gemacht! Auch bei der Bundestagswahl 2002 haben knapp vier Millionen Userinnen und User den Wahl-O-Mat getestet. Darüber hinaus kam der Wahl-O-Mat mittlerweile bei verschiedenen Landtagswahlen und bei der Europawahl 2004 zum Einsatz.\
<br>\
<br>Die Redaktion des Wahl-O-Mat Schleswig Holstein 2005 hat den Parteien SPD, CDU, Bündnis 90/Grüne, FDP und der SSW, die im Landtag vertreten sind bzw. nach Prognosen eine realistische Chance haben, in den Landtag einzuziehen, eine Liste mit 63 Thesen geschickt. Sie wurden gebeten, die Thesen entsprechend der Parteihaltung mit "stimme zu", "stimme nicht zu" oder "neutral" zu beantworten. Aus den ausgefüllten Listen wurden diejenigen Thesen rechnerisch ermittelt, die keine ausreichende Unterscheidung der Parteien möglich machten, und entfernt. Die Redaktion hat aus den verbleibenden Thesen eine endgültige Auswahl getroffen, die in den Wahl-O-Mat eingebunden wurden. Die Parteien waren an der Endauswahl der Thesen nicht beteiligt.';
WOMT_aTexte['faq_frage2_frage']=new Array();
WOMT_aTexte['faq_frage2_frage'][0]='Wie ist der Wahl-O-Mat entwickelt worden? Sind die Parteien daran beteiligt gewesen?';
WOMT_aTexte['faq_frage2_frage'][1]='Wie ist der Wahl-O-Mat entwickelt worden? Sind die Parteien daran beteiligt gewesen?';
WOMT_aTexte['faq_frage3_antwort']=new Array();
WOMT_aTexte['faq_frage3_antwort'][0]='Das ist eine schwierige Frage. Wer entscheidet, welche Themen wichtig sind und welche nicht? Die Regierung, die Parteien, die Medien und die Bürgerinnen und Bürger haben dazu sehr unterschiedliche Meinungen. Bei der Auswahl der Thesen für unseren Wahl-O-Mat bezogen wir uns vor allem auf jene Themen, zu denen die Parteien unterschiedliche Meinungen haben und auf jene, die besonders auch für junge Leute von Interesse sind. Leider sind während des Entstehungsprozesses auch "gute" Fragen aus dem Wahl-O-Mat gefallen. Dies kam vor, weil Fragen von einzelnen Parteien gar nicht oder nicht eindeutig mit stimme zu/stimme nicht zu/neutral beantwortet wurden oder weil die Parteipositionen in dieser Frage keine Unterscheidung zwischen den Parteien ermöglichten.\
<br>\
<br>Wir haben Interesse an Ihrer Meinung. Schicken Sie uns Ihre Überlegungen zu, am besten unter: <a href="mailto:info@wahl-o-mat.de">info@wahl-o-mat.de</a>';
WOMT_aTexte['faq_frage3_antwort'][1]='Das ist eine schwierige Frage. Wer entscheidet, welche Themen wichtig sind und welche nicht? Die Regierung, die Parteien, die Medien und die Bürgerinnen und Bürger haben dazu sehr unterschiedliche Meinungen. Bei der Auswahl der Thesen für unseren Wahl-O-Mat bezogen wir uns vor allem auf jene Themen, zu denen die Parteien unterschiedliche Meinungen haben und auf jene, die besonders auch für junge Leute von Interesse sind. Leider sind während des Entstehungsprozesses auch "gute" Fragen aus dem Wahl-O-Mat gefallen. Dies kam vor, weil Fragen von einzelnen Parteien gar nicht oder nicht eindeutig mit stimme zu/stimme nicht zu/neutral beantwortet wurden oder weil die Parteipositionen in dieser Frage keine Unterscheidung zwischen den Parteien ermöglichten.\
<br>\
<br>Wir haben Interesse an Ihrer Meinung. Schicken Sie uns Ihre Überlegungen zu, am besten unter: <a href="mailto:info@wahl-o-mat.de">info@wahl-o-mat.de</a>';
WOMT_aTexte['faq_frage3_frage']=new Array();
WOMT_aTexte['faq_frage3_frage'][0]='Wieso kommen manche wichtige Themen im Wahl-O-Mat nicht zur Sprache?';
WOMT_aTexte['faq_frage3_frage'][1]='Wieso kommen manche wichtige Themen im Wahl-O-Mat nicht zur Sprache?';
WOMT_aTexte['faq_frage4_antwort']=new Array();
WOMT_aTexte['faq_frage4_antwort'][0]='In solchen Fällen antworten Sie mit "neutral".';
WOMT_aTexte['faq_frage4_antwort'][1]='In solchen Fällen antworten Sie mit "neutral".';
WOMT_aTexte['faq_frage4_frage']=new Array();
WOMT_aTexte['faq_frage4_frage'][0]='Was kann ich antworten, wenn ich einer Aussage nur unter bestimmten Bedingungen zustimme?';
WOMT_aTexte['faq_frage4_frage'][1]='Was kann ich antworten, wenn ich einer Aussage nur unter bestimmten Bedingungen zustimme?';
WOMT_aTexte['faq_frage5_antwort']=new Array();
WOMT_aTexte['faq_frage5_antwort'][0]='Dann enthalten Sie sich Ihrer Stimme und klicken auf "weiß nicht". Diese Aussage wird dann beim Ergebnis nicht berücksichtigt. Letzteres sollten Sie aber nicht zu oft machen, denn wenn zu häufig "weiß nicht" geklickt wird, kann natürlich auch kein zuverlässiges Ergebnis gegeben werden. Sie haben jedoch auch die Möglichkeit, jederzeit wieder zu einer Frage zurückzukehren, um sie doch noch zu beantworten.';
WOMT_aTexte['faq_frage5_antwort'][1]='Dann enthalten Sie sich Ihrer Stimme und klicken auf "weiß nicht". Diese Aussage wird dann beim Ergebnis nicht berücksichtigt. Letzteres sollten Sie aber nicht zu oft machen, denn wenn zu häufig "weiß nicht" geklickt wird, kann natürlich auch kein zuverlässiges Ergebnis gegeben werden. Sie haben jedoch auch die Möglichkeit, jederzeit wieder zu einer Frage zurückzukehren, um sie doch noch zu beantworten.';
WOMT_aTexte['faq_frage5_frage']=new Array();
WOMT_aTexte['faq_frage5_frage'][0]='Was mache ich, wenn ich zu einem Thema nichts angeben möchte?';
WOMT_aTexte['faq_frage5_frage'][1]='Was mache ich, wenn ich zu einem Thema nichts angeben möchte?';
WOMT_aTexte['faq_frage6_antwort']=new Array();
WOMT_aTexte['faq_frage6_antwort'][0]='Ja, das wissen wir natürlich auch nicht. Bitte erwarten Sie von uns kein Urteil darüber, was eine "gute" oder eine "schlechte" Partei ist. Es ist jedoch bekannt, dass der Wahl-O-Mat manchmal überraschende Ergebnisse aufweist. Die von Ihnen ermittelte Wahl-O-Mat-Empfehlung ist eben ein Durchschnittsergebnis aus vielen Themengebieten. Es kann also sein, dass Sie bei einem Themengebiet die Meinung der Partei, der Sie bisher am nahesten stehen, treffen, aber im Gesamtergebnis noch besser mit einer anderen Partei übereinstimmen. Berücksichtigt werden muss außerdem, dass sich die Empfehlung des Wahl-O-Mat eben nur auf die bereit gestellte Thesenauswahl bezieht. Sicher gibt es auch sonstige gute Gründe, sich der einen oder anderen Partei nahe zu fühlen. Wir finden, dass dies eine gute Gelegenheit ist, sich mit den eigenen politischen Positionen und denen der Parteien auseinander zu setzen.';
WOMT_aTexte['faq_frage6_antwort'][1]='Ja, das wissen wir natürlich auch nicht. Bitte erwarten Sie von uns kein Urteil darüber, was eine "gute" oder eine "schlechte" Partei ist. Es ist jedoch bekannt, dass der Wahl-O-Mat manchmal überraschende Ergebnisse aufweist. Die von Ihnen ermittelte Wahl-O-Mat-Empfehlung ist eben ein Durchschnittsergebnis aus vielen Themengebieten. Es kann also sein, dass Sie bei einem Themengebiet die Meinung der Partei, der Sie bisher am nahesten stehen, treffen, aber im Gesamtergebnis noch besser mit einer anderen Partei übereinstimmen. Berücksichtigt werden muss außerdem, dass sich die Empfehlung des Wahl-O-Mat eben nur auf die bereit gestellte Thesenauswahl bezieht. Sicher gibt es auch sonstige gute Gründe, sich der einen oder anderen Partei nahe zu fühlen. Wir finden, dass dies eine gute Gelegenheit ist, sich mit den eigenen politischen Positionen und denen der Parteien auseinander zu setzen.';
WOMT_aTexte['faq_frage6_frage']=new Array();
WOMT_aTexte['faq_frage6_frage'][0]='Wie ist es möglich, dass ich als Ergebnis das Logo der Partei erhalte, die ich überhaupt nicht erwartet habe?';
WOMT_aTexte['faq_frage6_frage'][1]='Wie ist es möglich, dass ich als Ergebnis das Logo der Partei erhalte, die ich überhaupt nicht erwartet habe?';
WOMT_aTexte['faq_frage7_antwort']=new Array();
WOMT_aTexte['faq_frage7_antwort'][0]='Nach Beantwortung aller Fragen sehen Sie, bei welchen Thesen Sie mit dem Standpunkt der Partei übereinstimmen bzw. nicht übereinstimmen. Welche Antwort die verschiedenen anderen Parteien auf die einzelnen Thesen gegeben haben, sehen Sie ebenfalls auf dem Bildschirm mit der persönlichen Wahl-O-Mat-Empfehlung. Wenn Sie dort eine Partei anklicken, können Sie auf der dann folgenden Seite Ihre eigenen Stellungnahmen zu jeder These mit denen der verschiedenen Parteien im Detail vergleichen.';
WOMT_aTexte['faq_frage7_antwort'][1]='Nach Beantwortung aller Fragen sehen Sie, bei welchen Thesen Sie mit dem Standpunkt der Partei übereinstimmen bzw. nicht übereinstimmen. Welche Antwort die verschiedenen anderen Parteien auf die einzelnen Thesen gegeben haben, sehen Sie ebenfalls auf dem Bildschirm mit der persönlichen Wahl-O-Mat-Empfehlung. Wenn Sie dort eine Partei anklicken, können Sie auf der dann folgenden Seite Ihre eigenen Stellungnahmen zu jeder These mit denen der verschiedenen Parteien im Detail vergleichen.';
WOMT_aTexte['faq_frage7_frage']=new Array();
WOMT_aTexte['faq_frage7_frage'][0]='Ich möchte mehr sehen als nur das Endergebnis. Wie kann ich die Einstellungen der verschiedenen Parteien auf einzelne Thesen erfahren und vergleichen?';
WOMT_aTexte['faq_frage7_frage'][1]='Ich möchte mehr sehen als nur das Endergebnis. Wie kann ich die Einstellungen der verschiedenen Parteien auf einzelne Thesen erfahren und vergleichen?';
WOMT_aTexte['faq_fragen_zum_wahlomat']=new Array();
WOMT_aTexte['faq_fragen_zum_wahlomat'][0]='Fragen zum Wahl-O-Mat';
WOMT_aTexte['faq_fragen_zum_wahlomat'][1]='Fragen zum Wahl-O-Mat';
WOMT_aTexte['faq_zu_den_fragen']=new Array();
WOMT_aTexte['faq_zu_den_fragen'][0]='zu den Fragen';
WOMT_aTexte['faq_zu_den_fragen'][1]='zu den Fragen';
WOMT_aTexte['fenster_schliessen']=new Array();
WOMT_aTexte['fenster_schliessen'][0]='Fenster schließen';
WOMT_aTexte['fenster_schliessen'][1]='Fenster schließen';
WOMT_aTexte['fragen_ablehnung']=new Array();
WOMT_aTexte['fragen_ablehnung'][0]='Ich stimme nicht zu';
WOMT_aTexte['fragen_ablehnung'][1]='Ich stimme nicht zu';
WOMT_aTexte['fragen_bogus']=new Array();
WOMT_aTexte['fragen_bogus'][0]='Bitte beantworten Sie die Fragen genau und sorgfältig.';
WOMT_aTexte['fragen_bogus'][1]='Svar venligst nøjagtigt og omhyggeligt på spørgsmålene.';
WOMT_aTexte['fragen_keine_meinung']=new Array();
WOMT_aTexte['fragen_keine_meinung'][0]='Keine Meinung';
WOMT_aTexte['fragen_keine_meinung'][1]='Keine Meinung';
WOMT_aTexte['fragen_neutral']=new Array();
WOMT_aTexte['fragen_neutral'][0]='neutral';
WOMT_aTexte['fragen_neutral'][1]='neutral';
WOMT_aTexte['fragen_these']=new Array();
WOMT_aTexte['fragen_these'][0]='Thesen';
WOMT_aTexte['fragen_these'][1]='Tesen';
WOMT_aTexte['fragen_von']=new Array();
WOMT_aTexte['fragen_von'][0]='von';
WOMT_aTexte['fragen_von'][1]='ud af';
WOMT_aTexte['fragen_vor']=new Array();
WOMT_aTexte['fragen_vor'][0]='zur nächsten These';
WOMT_aTexte['fragen_vor'][1]='zur nächsten These';
WOMT_aTexte['fragen_zurueck']=new Array();
WOMT_aTexte['fragen_zurueck'][0]='zur vorherigen These';
WOMT_aTexte['fragen_zurueck'][1]='tilbage';
WOMT_aTexte['fragen_zustimmung']=new Array();
WOMT_aTexte['fragen_zustimmung'][0]='Ich stimme zu';
WOMT_aTexte['fragen_zustimmung'][1]='Ich stimme zu';
WOMT_aTexte['gewichtung_ergebnis']=new Array();
WOMT_aTexte['gewichtung_ergebnis'][0]='Ergebnis anzeigen';
WOMT_aTexte['gewichtung_ergebnis'][1]='Vis resultatet';
WOMT_aTexte['gewichtung_text']=new Array();
WOMT_aTexte['gewichtung_text'][0]='Sie haben alle Fragen beantwortet. Jetzt können Sie die Themenbereiche anklicken, die für Sie besonders wichtig sind.';
WOMT_aTexte['gewichtung_text'][1]='Du har svaret på alle spørgsmål. Nu kan Du klikke på de emner, som er særlig vigtige for Dig.';
WOMT_aTexte['impressum_inhalt']=new Array();
WOMT_aTexte['impressum_inhalt'][0]='<u><b><a name="oben"></a>Was ist der Wahl-O-Mat?</b></u><br>\
<br>Der Wahl-O-Mat Schleswig-Holstein 2005 ist ein Gemeinschaftsprodukt von <a href="http://www.bpb.de" target="_blank">Bundeszentrale für politische Bildung (bpb)</a>, <a href="http://landesregierung.schleswig-holstein.de/coremedia/generator/Kategorien/Landesverwaltung/Kultur/Landeszentrale__fuer__politische__Bildung/Uebersicht/lpb__uebersicht.html" target="_blank">Landeszentrale für politische Bildung Schleswig-Holstein (LpB)</a> und <a href="http://www.jugendserver-sh.de/" target="_blank">Landesjugendring Schleswig-Holstein (LJR)</a> mit Unterstützung des <a href="http://www.stemwijzer.nl" target="_blank">Instituut voor Publiek en Politiek (IPP)</a> in Amsterdam. Thesen und Inhalte des Wahl-O-Mat wurden von einem Redaktionsteam aus zwölf Jungwählerinnen und Jungwählern entwickelt. Beraten wurden sie von den institutionellen Trägern des Wahl-O-Mat Schleswig-Holstein 2005 und den Wissenschaftlern Wolf Dittmayer, Priv.-Doz. Dr. Stefan Marschall und Dr. Norbert Taubken. \
<br><br>\
<br><u><b><a name="oben"></a>Impressum</b></u><br>\
<br><b>Projektleitung</b>\
<br><b>für die Landeszentrale für politische Bildung Schleswig-Holstein:</b>\
<br>Dr. Rüdiger Wenzel\
<br>Kehdenstraße 27, 24103 Kiel\
<br>Tel.: 0431/ 988-59 37, Fax: 0431/ 988-59 42\
<br>E-Mail: <a href="mailto:info@lpb.landsh.de">info@lpb.landsh.de</a>\
<br>Internet: <a href="http://www.politische-bildung.schleswig-holstein.de" target="_blank">www.politische-bildung.schleswig-holstein.de</a><br>\
<br><b>für den Landesjugendring Schleswig-Holstein:</b>\
<br>Jens-Peter Jensen\
<br>Holtenauer Straße 99, 24105 Kiel\
<br>Tel.: 0431/ 800-98 40, Fax: 0431/ 800-98 41\
<br>Email: <a href="mailto:info@ljrsh.de">info@ljrsh.de</a>\
<br>Internet: <a href="http://www.ljrsh.de" target="_blank">www.ljrsh.de</a><br>\
<br><b>Inhalt und Redaktion:</b>\
<br>Malte Anutha\
<br>Ulf Bauer\
<br>Joana Berger\
<br>Fabian Burhenne\
<br>Kerstin Cornils\
<br>Alexandra Ehlers\
<br>Pascal Hübler\
<br>Marieke Klauder\
<br>Sebastian Mohr\
<br>Finn Sørensen \
<br>Sebastian Schwanke\
<br>Tanja Wulf\
<br><br>\
<br><b>Wissenschaftliche Begleitung:</b>\
<br><a href="mailto:stefan.marschall@uni-duesseldorf.de">Priv.-Doz. Dr. Stefan Marschall\
<br>(Universität Düsseldorf)</a>\
<br><br>\
<br><b>Didaktisches Material:</b>\
<br><a href="mailto:w.dittmayer@gmx.de">Wolf Dittmayer, Dipl. Soz.-Päd.\
<br>(Organisationsberatung)</a>\
<br><br>\
<br><b>Beratung und Projektkoordination:</b>\
<br><a href="http://www.csr-consult.de" target="_blank">Dr. Norbert Taubken,\
<br>(CSR consult, Hamburg)</a>\
<br><br>\
<br><b>Grafik & Design:</b>\
<br>Armin Berger\
<br>(3-point concepts GmbH, Berlin)\
<br><a href="mailto:info@3-point.de">info@3-point.de</a>\
<br><a href="http://3-point.de" target="_blank">www.3-point.de</a>\
<br><br>\
<br><b>Programmierung:</b>\
<br>Ulrich Santo\
<br>(GLAMUS GmbH, Bonn)\
<br><a href="mailto:info@glamus.de">info@glamus.de</a>\
<br><a href="http://www.glamus.de" target="_blank">www.glamus.de</a>\
<br><br>\
<br><b>Copyright:</b>\
<br><a href="http://www.bpb.de" target="_blank">Bundeszentrale für politische Bildung (bpb)</a>\
<br>Produktverantwortlich: <a href="mailto:brandt@bpb.de">Pamela Brandt</a> (V.i.S.d.P.)\
<br>\
<br>Adenauer Allee 86\
<br>D-53111 Bonn\
<br>Fon: 01888/ 515 539\
<br>Fax: 01888/ 515 498\
<br>\
<br><b>Lizenz:</b>\
<br><a href="http://www.stemwijzer.nl" target="_blank">Instituut voor Publiek en Politiek (IPP), NL-Amsterdam</a>\
<br>Supervision: <a href="mailto:j.degraaf@stemwijzer.nl">Jochum de Graaf (IPP)</a>';
WOMT_aTexte['impressum_inhalt'][1]='<u><b><a name="oben"></a>Was ist der Wahl-O-Mat?</b></u><br>\
<br>Der Wahl-O-Mat Schleswig-Holstein 2005 ist ein Gemeinschaftsprodukt von <a href="http://www.bpb.de" target="_blank">Bundeszentrale für politische Bildung (bpb)</a>, <a href="http://landesregierung.schleswig-holstein.de/coremedia/generator/Kategorien/Landesverwaltung/Kultur/Landeszentrale__fuer__politische__Bildung/Uebersicht/lpb__uebersicht.html" target="_blank">Landeszentrale für politische Bildung Schleswig-Holstein (LpB)</a> und <a href="http://www.jugendserver-sh.de/" target="_blank">Landesjugendring Schleswig-Holstein (LJR)</a> mit Unterstützung des <a href="http://www.stemwijzer.nl" target="_blank">Instituut voor Publiek en Politiek (IPP)</a> in Amsterdam. Thesen und Inhalte des Wahl-O-Mat wurden von einem Redaktionsteam aus zwölf Jungwählerinnen und Jungwählern entwickelt. Beraten wurden sie von den institutionellen Trägern des Wahl-O-Mat Schleswig-Holstein 2005 und den Wissenschaftlern Wolf Dittmayer, Priv.-Doz. Dr. Stefan Marschall und Dr. Norbert Taubken. \
<br><br>\
<br><u><b><a name="oben"></a>Impressum</b></u><br>\
<br><b>Projektleitung</b>\
<br><b>für die Landeszentrale für politische Bildung Schleswig-Holstein:</b>\
<br>Dr. Rüdiger Wenzel\
<br>Kehdenstraße 27, 24103 Kiel\
<br>Tel.: 0431/ 988-59 37, Fax: 0431/ 988-59 42\
<br>E-Mail: <a href="mailto:info@lpb.landsh.de">info@lpb.landsh.de</a>\
<br>Internet: <a href="http://www.politische-bildung.schleswig-holstein.de" target="_blank">www.politische-bildung.schleswig-holstein.de</a><br>\
<br><b>für den Landesjugendring Schleswig-Holstein:</b>\
<br>Jens-Peter Jensen\
<br>Holtenauer Straße 99, 24105 Kiel\
<br>Tel.: 0431/ 800-98 40, Fax: 0431/ 800-98 41\
<br>Email: <a href="mailto:info@ljrsh.de">info@ljrsh.de</a>\
<br>Internet: <a href="http://www.ljrsh.de" target="_blank">www.ljrsh.de</a><br>\
<br><b>Inhalt und Redaktion:</b>\
<br>Malte Anutha\
<br>Ulf Bauer\
<br>Joana Berger\
<br>Fabian Burhenne\
<br>Kerstin Cornils\
<br>Alexandra Ehlers\
<br>Pascal Hübler\
<br>Marieke Klauder\
<br>Sebastian Mohr\
<br>Finn Sørensen \
<br>Sebastian Schwanke\
<br>Tanja Wulf\
<br><br>\
<br><b>Wissenschaftliche Begleitung:</b>\
<br><a href="mailto:stefan.marschall@uni-duesseldorf.de">Priv.-Doz. Dr. Stefan Marschall\
<br>(Universität Düsseldorf)</a>\
<br><br>\
<br><b>Didaktisches Material:</b>\
<br><a href="mailto:w.dittmayer@gmx.de">Wolf Dittmayer, Dipl. Soz.-Päd.\
<br>(Organisationsberatung)</a>\
<br><br>\
<br><b>Beratung und Projektkoordination:</b>\
<br><a href="http://www.csr-consult.de" target="_blank">Dr. Norbert Taubken,\
<br>(CSR consult, Hamburg)</a>\
<br><br>\
<br><b>Grafik & Design:</b>\
<br>Armin Berger\
<br>(3-point concepts GmbH, Berlin)\
<br><a href="mailto:info@3-point.de">info@3-point.de</a>\
<br><a href="http://3-point.de" target="_blank">www.3-point.de</a>\
<br><br>\
<br><b>Programmierung:</b>\
<br>Ulrich Santo\
<br>(GLAMUS GmbH, Bonn)\
<br><a href="mailto:info@glamus.de">info@glamus.de</a>\
<br><a href="http://www.glamus.de" target="_blank">www.glamus.de</a>\
<br><br>\
<br><b>Copyright:</b>\
<br><a href="http://www.bpb.de" target="_blank">Bundeszentrale für politische Bildung (bpb)</a>\
<br>Produktverantwortlich: <a href="mailto:brandt@bpb.de">Pamela Brandt</a> (V.i.S.d.P.)\
<br>\
<br>Adenauer Allee 86\
<br>D-53111 Bonn\
<br>Fon: 01888/ 515 539\
<br>Fax: 01888/ 515 498\
<br>\
<br><b>Lizenz:</b>\
<br><a href="http://www.stemwijzer.nl" target="_blank">Instituut voor Publiek en Politiek (IPP), NL-Amsterdam</a>\
<br>Supervision: <a href="mailto:j.degraaf@stemwijzer.nl">Jochum de Graaf (IPP)</a>';
WOMT_aTexte['intro_kasten_absatz1']=new Array();
WOMT_aTexte['intro_kasten_absatz1'][0]='Der Wahl-O-Mat bietet Ihnen anhand von einfachen Thesen einen Einblick in wichtige landespolitische Fragen. Vergleichen Sie Ihre eigenen Ansichten mit den Positionen der einzelnen Parteien und finden Sie heraus: Welche Partei vertritt Ihre Meinung am besten?';
WOMT_aTexte['intro_kasten_absatz1'][1]='Wahl-O-Mat tilbyder Dig udfra enkle teser indblik i vigtige landspolitiske spørgsmål. Sammenlign Dine egne holdninger med de forskellige partiers positioner og find frem til det parti, der repræsenterer Dine standpunkter bedst.';
WOMT_aTexte['intro_kasten_absatz2']=new Array();
WOMT_aTexte['intro_kasten_absatz2'][0]='Am Ende erhalten Sie Ihr persönliches Wahl-O-Mat-Ergebnis: Die Angabe der Partei, mit der die größte Übereinstimmung herrscht.';
WOMT_aTexte['intro_kasten_absatz2'][1]='Afsluttende modtager Du Dit personlige Wahl-O-Mat-resultat: Du får at vide, hvilket parti der viser den størst mulige overensstemmelse med Dine holdninger.';
WOMT_aTexte['intro_kasten_absatz3']=new Array();
WOMT_aTexte['intro_kasten_absatz3'][0]='Für die Landtagswahl in Schleswig-Holstein am 20. Februar 2005 sind SPD, CDU, Bündnis 90/Grüne, FDP und SSW im Wahl-O-Mat vertreten.';
WOMT_aTexte['intro_kasten_absatz3'][1]='Til landdagsvalget i Slesvig-Holsten den 20. februar 2005 er SPD, CDU, Bündnis 90/Grüne, FDP og SSW repræsenteret på Wahl-O-Mat.';
WOMT_aTexte['intro_start']=new Array();
WOMT_aTexte['intro_start'][0]='Hier geht´s los!';
WOMT_aTexte['intro_start'][1]='Start!';
WOMT_aTexte['intro_willkommen']=new Array();
WOMT_aTexte['intro_willkommen'][0]='Willkommen beim Wahl-O-Mat zur Landtagswahl in Schleswig-Holstein am 20. Februar 2005';
WOMT_aTexte['intro_willkommen'][1]='Velkommen på den dansksprogede Wahl-O-Mat i anledning af landdagsvalget i\
<br>Slesvig-Holsten den 20. februar 2005';
WOMT_aTexte['parteien_thesen_kommtnoch']=new Array();
WOMT_aTexte['parteien_thesen_kommtnoch'][0]='Zu dieser These hat die Partei keine Begründung vorgelegt.';
WOMT_aTexte['parteien_thesen_kommtnoch'][1]='Zu dieser These hat die Partei keine Begründung vorgelegt.';
WOMT_aTexte['parteien_these_sie']=new Array();
WOMT_aTexte['parteien_these_sie'][0]='Sie';
WOMT_aTexte['parteien_these_sie'][1]='Sie';
WOMT_aTexte['parteien_these_statement']=new Array();
WOMT_aTexte['parteien_these_statement'][0]='Statement der Partei';
WOMT_aTexte['parteien_these_statement'][1]='Statement der Partei';
WOMT_aTexte['parteien_these_these']=new Array();
WOMT_aTexte['parteien_these_these'][0]='These';
WOMT_aTexte['parteien_these_these'][1]='Tese';
WOMT_aTexte['statistik_praeferenz']=new Array();
WOMT_aTexte['statistik_praeferenz'][0]='Präferenz';
WOMT_aTexte['statistik_praeferenz'][1]='Präferenz';
WOMT_aTexte['statistik_stand']=new Array();
WOMT_aTexte['statistik_stand'][0]='Stand:';
WOMT_aTexte['statistik_stand'][1]='Stand:';
WOMT_aTexte['statistik_summe']=new Array();
WOMT_aTexte['statistik_summe'][0]='Nutzeranzahl';
WOMT_aTexte['statistik_summe'][1]='Nutzeranzahl';
WOMT_aTexte['statistik_text']=new Array();
WOMT_aTexte['statistik_text'][0]='Hier erhalten Sie eine Übersicht, wie oft jede Partei bisher als die Partei mit der größten Übereinstimmung ermittelt wurde. Hierbei handelt es sich nicht um eine Meinungsumfrage oder ein Politbarometer. Das tatsächliche Wahlergebnis wird vermutlich ganz anders aussehen.';
WOMT_aTexte['statistik_text'][1]='Hier erhalten Sie eine Übersicht, wie oft jede Partei bisher als die Partei mit der größten Übereinstimmung ermittelt wurde. Hierbei handelt es sich nicht um eine Meinungsumfrage oder ein Politbarometer. Das tatsächliche Wahlergebnis wird vermutlich ganz anders aussehen.';
WOMT_aTexte['statistik_titel']=new Array();
WOMT_aTexte['statistik_titel'][0]='Erfolgte Ergebnisse Wahl-O-Mat';
WOMT_aTexte['statistik_titel'][1]='Erfolgte Ergebnisse Wahl-O-Mat';
WOMT_aTexte['statistik_user']=new Array();
WOMT_aTexte['statistik_user'][0]='User';
WOMT_aTexte['statistik_user'][1]='User';
WOMT_aTexte['statistik_verteilung']=new Array();
WOMT_aTexte['statistik_verteilung'][0]='Verteilung';
WOMT_aTexte['statistik_verteilung'][1]='Verteilung';
WOMT_aTexte['stat_detail_ablehnung']=new Array();
WOMT_aTexte['stat_detail_ablehnung'][0]='Ablehnung';
WOMT_aTexte['stat_detail_ablehnung'][1]='Ablehnung';
WOMT_aTexte['stat_detail_gesamt_titel']=new Array();
WOMT_aTexte['stat_detail_gesamt_titel'][0]='Gesamt:';
WOMT_aTexte['stat_detail_gesamt_titel'][1]='Gesamt:';
WOMT_aTexte['stat_detail_keinemeinung']=new Array();
WOMT_aTexte['stat_detail_keinemeinung'][0]='keine Angabe';
WOMT_aTexte['stat_detail_keinemeinung'][1]='keine Angabe';
WOMT_aTexte['stat_detail_titel']=new Array();
WOMT_aTexte['stat_detail_titel'][0]='Detaillierte Statistiken zu den einzelnen Thesen';
WOMT_aTexte['stat_detail_titel'][1]='Detaillierte Statistiken zu den einzelnen Thesen';
WOMT_aTexte['stat_detail_titel_text']=new Array();
WOMT_aTexte['stat_detail_titel_text'][0]='Hier sehen Sie detaillierte Statistiken zu den einzelnen Thesen. Diese gibt es einmal als Gesamtstatistik zu allen Thesen und zusätzlich für jede Partei einzeln. Die Aufteilung auf Parteien erfolgt nach der vom Wahl-O-Maten empfohlenen Partei.';
WOMT_aTexte['stat_detail_titel_text'][1]='Hier sehen Sie detaillierte Statistiken zu den einzelnen Thesen. Diese gibt es einmal als Gesamtstatistik zu allen Thesen und zusätzlich für jede Partei einzeln. Die Aufteilung auf Parteien erfolgt nach der vom Wahl-O-Maten empfohlenen Partei.';
WOMT_aTexte['stat_detail_zustimmung']=new Array();
WOMT_aTexte['stat_detail_zustimmung'][0]='Zustimmung';
WOMT_aTexte['stat_detail_zustimmung'][1]='Zustimmung';
WOMT_aTexte['wahlomat_auszeichnung']=new Array();
WOMT_aTexte['wahlomat_auszeichnung'][0]='Wahl-O-Mat ausgezeichnet durch:';
WOMT_aTexte['wahlomat_auszeichnung'][1]='Wahl-O-Mat ausgezeichnet durch:';
WOMT_aTexte['wahlomat_download']=new Array();
WOMT_aTexte['wahlomat_download'][0]='Wahl-O-Mat als ZIP-Datei downloaden';
WOMT_aTexte['wahlomat_download'][1]='Wahl-O-Mat als ZIP-Datei downloaden';
WOMT_aTexte['wahlomat_email']=new Array();
WOMT_aTexte['wahlomat_email'][0]='E-Mail';
WOMT_aTexte['wahlomat_email'][1]='E-Mail';
WOMT_aTexte['wahlomat_faq']=new Array();
WOMT_aTexte['wahlomat_faq'][0]='FAQ';
WOMT_aTexte['wahlomat_faq'][1]='FAQ';
WOMT_aTexte['wahlomat_impressum']=new Array();
WOMT_aTexte['wahlomat_impressum'][0]='Impressum';
WOMT_aTexte['wahlomat_impressum'][1]='Impressum';
WOMT_aTexte['wahlomat_info']=new Array();
WOMT_aTexte['wahlomat_info'][0]='Info';
WOMT_aTexte['wahlomat_info'][1]='Info';
WOMT_aTexte['wahlomat_neu_starten']=new Array();
WOMT_aTexte['wahlomat_neu_starten'][0]='Neu Starten';
WOMT_aTexte['wahlomat_neu_starten'][1]='Neu Starten';
WOMT_aTexte['wahlomat_partner']=new Array();
WOMT_aTexte['wahlomat_partner'][0]='unterstützt von:';
WOMT_aTexte['wahlomat_partner'][1]='unterstützt von:';
WOMT_aTexte['wahlomat_titelzeile']=new Array();
WOMT_aTexte['wahlomat_titelzeile'][0]='www.Wahl-O-Mat.de - Landtagswahl Schleswig-Holstein 2005';
WOMT_aTexte['wahlomat_titelzeile'][1]='www.Wahl-O-Mat.de - Landtagswahl Schleswig-Holstein 2005';
WOMT_aTexte['extern_parteien_url']=new Array();
WOMT_aTexte['extern_parteien_url'][0]='http://www.statistik-sh.de/LW05/la_3_08.htm';
WOMT_aTexte['extern_parteien_url'][1]='http://www.statistik-sh.de/LW05/la_3_08.htm';
WOMT_aTexte['wahlomat_zurueck']=new Array();
WOMT_aTexte['wahlomat_zurueck'][0]='zurück';
WOMT_aTexte['wahlomat_zurueck'][1]='tilbage';
WOMT_aTexte['wichtiger_hinweis_wichtiger_hinweis']=new Array();
WOMT_aTexte['wichtiger_hinweis_wichtiger_hinweis'][0]='Wichtiger Hinweis';
WOMT_aTexte['wichtiger_hinweis_wichtiger_hinweis'][1]='Wichtiger Hinweis';
WOMT_aTexte['faq_weitere_informationen']=new Array();
WOMT_aTexte['faq_weitere_informationen'][0]='Wenn Sie mehr über die Entstehung des Wahl-O-Mat wissen möchten, finden Sie weitere Informationen im didaktischen Anhang auf der Startseite <a href="http://www.wahl-o-mat.de" target="_blank">www.wahl-o-mat.de</a>.';
WOMT_aTexte['faq_weitere_informationen'][1]='Wenn Sie mehr über die Entstehung des Wahl-O-Mat wissen möchten, finden Sie weitere Informationen im didaktischen Anhang auf der Startseite <a href="http://www.wahl-o-mat.de" target="_blank">www.wahl-o-mat.de</a>.';
WOMT_aTexte['auswertung_keine_uebereinstimmung']=new Array();
WOMT_aTexte['auswertung_keine_uebereinstimmung'][0]='Keine Übereinstimmung';
WOMT_aTexte['auswertung_keine_uebereinstimmung'][1]='Keine Übereinstimmung';
WOMT_aTexte['auswertung_ausgeglichen']=new Array();
WOMT_aTexte['auswertung_ausgeglichen'][0]='Ausgeglichen';
WOMT_aTexte['auswertung_ausgeglichen'][1]='Ausgeglichen';
WOMT_aTexte['auswertung_neutral']=new Array();
WOMT_aTexte['auswertung_neutral'][0]='keine Wertung';
WOMT_aTexte['auswertung_neutral'][1]='keine Wertung';
WOMT_aTexte['ausw_detail_kleiner_abstand']=new Array();
WOMT_aTexte['ausw_detail_kleiner_abstand'][0]='Kleiner Abstand';
WOMT_aTexte['ausw_detail_kleiner_abstand'][1]='Kleiner Abstand';
WOMT_aTexte['ausw_detail_grosser_abstand']=new Array();
WOMT_aTexte['ausw_detail_grosser_abstand'][0]='Großer Abstand';
WOMT_aTexte['ausw_detail_grosser_abstand'][1]='Großer Abstand';
WOMT_aTexte['ausw_detail_mittlerer_abstand']=new Array();
WOMT_aTexte['ausw_detail_mittlerer_abstand'][0]='Mittlerer Abstand';
WOMT_aTexte['ausw_detail_mittlerer_abstand'][1]='Mittlerer Abstand';
WOMT_aTexte['ausw_detail_keine_wertung']=new Array();
WOMT_aTexte['ausw_detail_keine_wertung'][0]='Keine Wertung (Frage wurde übersprungen)';
WOMT_aTexte['ausw_detail_keine_wertung'][1]='Keine Wertung (Frage wurde übersprungen)';
WOMT_aTexte['ausw_detail_legende']=new Array();
WOMT_aTexte['ausw_detail_legende'][0]='Legende:';
WOMT_aTexte['ausw_detail_legende'][1]='Legende:';
WOMT_aBilder['fragen_0']=new Array();
WOMT_aBilder['fragen_0'][0]=new Array();
WOMT_aBilder['fragen_0'][0][0]='images/bilder_70_1.gif';
WOMT_aBilder['fragen_0'][0][1]='90';
WOMT_aBilder['fragen_0'][0][2]='20';
WOMT_aBilder['fragen_0'][0][3]='';
WOMT_aBilder['fragen_0'][1]=new Array();
WOMT_aBilder['fragen_0'][1][0]='images/bilder_70_8.jpg';
WOMT_aBilder['fragen_0'][1][1]='90';
WOMT_aBilder['fragen_0'][1][2]='20';
WOMT_aBilder['fragen_0'][1][3]='';
WOMT_aBilder['fragen_0_0']=new Array();
WOMT_aBilder['fragen_0_0'][0]=new Array();
WOMT_aBilder['fragen_0_0'][0][0]='images/bilder_71_1.gif';
WOMT_aBilder['fragen_0_0'][0][1]='90';
WOMT_aBilder['fragen_0_0'][0][2]='20';
WOMT_aBilder['fragen_0_0'][0][3]='';
WOMT_aBilder['fragen_0_0'][1]=new Array();
WOMT_aBilder['fragen_0_0'][1][0]='images/bilder_71_8.jpg';
WOMT_aBilder['fragen_0_0'][1][1]='90';
WOMT_aBilder['fragen_0_0'][1][2]='20';
WOMT_aBilder['fragen_0_0'][1][3]='';
WOMT_aBilder['fragen_0_1']=new Array();
WOMT_aBilder['fragen_0_1'][0]=new Array();
WOMT_aBilder['fragen_0_1'][0][0]='images/bilder_72_1.gif';
WOMT_aBilder['fragen_0_1'][0][1]='90';
WOMT_aBilder['fragen_0_1'][0][2]='20';
WOMT_aBilder['fragen_0_1'][0][3]='';
WOMT_aBilder['fragen_0_1'][1]=new Array();
WOMT_aBilder['fragen_0_1'][1][0]='images/bilder_72_8.jpg';
WOMT_aBilder['fragen_0_1'][1][1]='90';
WOMT_aBilder['fragen_0_1'][1][2]='20';
WOMT_aBilder['fragen_0_1'][1][3]='';
WOMT_aBilder['fragen_1']=new Array();
WOMT_aBilder['fragen_1'][0]=new Array();
WOMT_aBilder['fragen_1'][0][0]='images/bilder_73_1.gif';
WOMT_aBilder['fragen_1'][0][1]='90';
WOMT_aBilder['fragen_1'][0][2]='20';
WOMT_aBilder['fragen_1'][0][3]='';
WOMT_aBilder['fragen_1'][1]=new Array();
WOMT_aBilder['fragen_1'][1][0]='images/bilder_73_8.jpg';
WOMT_aBilder['fragen_1'][1][1]='90';
WOMT_aBilder['fragen_1'][1][2]='20';
WOMT_aBilder['fragen_1'][1][3]='';
WOMT_aBilder['fragen_1_0']=new Array();
WOMT_aBilder['fragen_1_0'][0]=new Array();
WOMT_aBilder['fragen_1_0'][0][0]='images/bilder_74_1.gif';
WOMT_aBilder['fragen_1_0'][0][1]='90';
WOMT_aBilder['fragen_1_0'][0][2]='20';
WOMT_aBilder['fragen_1_0'][0][3]='';
WOMT_aBilder['fragen_1_0'][1]=new Array();
WOMT_aBilder['fragen_1_0'][1][0]='images/bilder_74_8.jpg';
WOMT_aBilder['fragen_1_0'][1][1]='90';
WOMT_aBilder['fragen_1_0'][1][2]='20';
WOMT_aBilder['fragen_1_0'][1][3]='';
WOMT_aBilder['fragen_1_1']=new Array();
WOMT_aBilder['fragen_1_1'][0]=new Array();
WOMT_aBilder['fragen_1_1'][0][0]='images/bilder_75_1.gif';
WOMT_aBilder['fragen_1_1'][0][1]='90';
WOMT_aBilder['fragen_1_1'][0][2]='20';
WOMT_aBilder['fragen_1_1'][0][3]='';
WOMT_aBilder['fragen_1_1'][1]=new Array();
WOMT_aBilder['fragen_1_1'][1][0]='images/bilder_75_8.jpg';
WOMT_aBilder['fragen_1_1'][1][1]='90';
WOMT_aBilder['fragen_1_1'][1][2]='20';
WOMT_aBilder['fragen_1_1'][1][3]='';
WOMT_aBilder['fragen_2']=new Array();
WOMT_aBilder['fragen_2'][0]=new Array();
WOMT_aBilder['fragen_2'][0][0]='images/bilder_76_1.gif';
WOMT_aBilder['fragen_2'][0][1]='120';
WOMT_aBilder['fragen_2'][0][2]='20';
WOMT_aBilder['fragen_2'][0][3]='';
WOMT_aBilder['fragen_2'][1]=new Array();
WOMT_aBilder['fragen_2'][1][0]='images/bilder_76_8.jpg';
WOMT_aBilder['fragen_2'][1][1]='120';
WOMT_aBilder['fragen_2'][1][2]='20';
WOMT_aBilder['fragen_2'][1][3]='';
WOMT_aBilder['fragen_2_0']=new Array();
WOMT_aBilder['fragen_2_0'][0]=new Array();
WOMT_aBilder['fragen_2_0'][0][0]='images/bilder_77_1.gif';
WOMT_aBilder['fragen_2_0'][0][1]='120';
WOMT_aBilder['fragen_2_0'][0][2]='20';
WOMT_aBilder['fragen_2_0'][0][3]='';
WOMT_aBilder['fragen_2_0'][1]=new Array();
WOMT_aBilder['fragen_2_0'][1][0]='images/bilder_77_8.jpg';
WOMT_aBilder['fragen_2_0'][1][1]='120';
WOMT_aBilder['fragen_2_0'][1][2]='20';
WOMT_aBilder['fragen_2_0'][1][3]='';
WOMT_aBilder['fragen_2_1']=new Array();
WOMT_aBilder['fragen_2_1'][0]=new Array();
WOMT_aBilder['fragen_2_1'][0][0]='images/bilder_78_1.gif';
WOMT_aBilder['fragen_2_1'][0][1]='120';
WOMT_aBilder['fragen_2_1'][0][2]='20';
WOMT_aBilder['fragen_2_1'][0][3]='';
WOMT_aBilder['fragen_2_1'][1]=new Array();
WOMT_aBilder['fragen_2_1'][1][0]='images/bilder_78_8.jpg';
WOMT_aBilder['fragen_2_1'][1][1]='120';
WOMT_aBilder['fragen_2_1'][1][2]='20';
WOMT_aBilder['fragen_2_1'][1][3]='';
WOMT_aBilder['fragen_3']=new Array();
WOMT_aBilder['fragen_3'][0]=new Array();
WOMT_aBilder['fragen_3'][0][0]='images/bilder_79_1.gif';
WOMT_aBilder['fragen_3'][0][1]='100';
WOMT_aBilder['fragen_3'][0][2]='20';
WOMT_aBilder['fragen_3'][0][3]='';
WOMT_aBilder['fragen_3'][1]=new Array();
WOMT_aBilder['fragen_3'][1][0]='images/bilder_79_8.jpg';
WOMT_aBilder['fragen_3'][1][1]='100';
WOMT_aBilder['fragen_3'][1][2]='20';
WOMT_aBilder['fragen_3'][1][3]='';
WOMT_aBilder['fragen_3_0']=new Array();
WOMT_aBilder['fragen_3_0'][0]=new Array();
WOMT_aBilder['fragen_3_0'][0][0]='images/bilder_80_1.gif';
WOMT_aBilder['fragen_3_0'][0][1]='100';
WOMT_aBilder['fragen_3_0'][0][2]='20';
WOMT_aBilder['fragen_3_0'][0][3]='';
WOMT_aBilder['fragen_3_0'][1]=new Array();
WOMT_aBilder['fragen_3_0'][1][0]='images/bilder_80_8.jpg';
WOMT_aBilder['fragen_3_0'][1][1]='100';
WOMT_aBilder['fragen_3_0'][1][2]='20';
WOMT_aBilder['fragen_3_0'][1][3]='';
WOMT_aBilder['fragen_3_1']=new Array();
WOMT_aBilder['fragen_3_1'][0]=new Array();
WOMT_aBilder['fragen_3_1'][0][0]='images/bilder_81_1.gif';
WOMT_aBilder['fragen_3_1'][0][1]='100';
WOMT_aBilder['fragen_3_1'][0][2]='20';
WOMT_aBilder['fragen_3_1'][0][3]='';
WOMT_aBilder['fragen_3_1'][1]=new Array();
WOMT_aBilder['fragen_3_1'][1][0]='images/bilder_81_8.jpg';
WOMT_aBilder['fragen_3_1'][1][1]='100';
WOMT_aBilder['fragen_3_1'][1][2]='20';
WOMT_aBilder['fragen_3_1'][1][3]='';
WOMT_aBilder['wahlomat_dach']=new Array();
WOMT_aBilder['wahlomat_dach'][0]=new Array();
WOMT_aBilder['wahlomat_dach'][0][0]='images/bilder_82_1.gif';
WOMT_aBilder['wahlomat_dach'][0][1]='500';
WOMT_aBilder['wahlomat_dach'][0][2]='109';
WOMT_aBilder['wahlomat_dach'][0][3]='';
WOMT_aBilder['wahlomat_dach'][1]=new Array();
WOMT_aBilder['wahlomat_dach'][1][0]='images/bilder_82_8.gif';
WOMT_aBilder['wahlomat_dach'][1][1]='500';
WOMT_aBilder['wahlomat_dach'][1][2]='109';
WOMT_aBilder['wahlomat_dach'][1][3]='';
WOMT_aBilder['themen_ergebnis_anzeigen']=new Array();
WOMT_aBilder['themen_ergebnis_anzeigen'][0]=new Array();
WOMT_aBilder['themen_ergebnis_anzeigen'][0][0]='images/bilder_83_1.gif';
WOMT_aBilder['themen_ergebnis_anzeigen'][0][1]='214';
WOMT_aBilder['themen_ergebnis_anzeigen'][0][2]='72';
WOMT_aBilder['themen_ergebnis_anzeigen'][0][3]='';
WOMT_aBilder['themen_ergebnis_anzeigen'][1]=new Array();
WOMT_aBilder['themen_ergebnis_anzeigen'][1][0]='images/bilder_83_8.jpg';
WOMT_aBilder['themen_ergebnis_anzeigen'][1][1]='214';
WOMT_aBilder['themen_ergebnis_anzeigen'][1][2]='72';
WOMT_aBilder['themen_ergebnis_anzeigen'][1][3]='';
