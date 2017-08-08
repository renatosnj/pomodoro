function getSheet() {
  var arquivo = SpreadsheetApp.openById(
    "1Kl7s_GfkIsEA2CFxrmamy6004GWWOT5zqyin-qmB1bo");
  var planilha = arquivo.getSheetByName("Registro de Pomodoros");
  var range = planilha.getRange(1, 1, planilha.getMaxRows(), 5);
  var rules = range.getDisplayValues();
  processSheet(rules);  
  Logger.log(arquivo.getName());
}

