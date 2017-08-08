/*
 * Localiza o arquivo gerada pelo Memento Database e verifica 
 * a validade acessando o nome da planília.
 */
function getSheet() {
  var arquivo = SpreadsheetApp.openById(
    "1Kl7s_GfkIsEA2CFxrmamy6004GWWOT5zqyin-qmB1bo");
  var planilha = arquivo.getSheetByName("Registro de Pomodoros");
  var range = planilha.getRange(1, 1, planilha.getMaxRows(), 5);
  var rules = range.getDisplayValues();
  processSheet(rules);  
  Logger.log(arquivo.getName());
}

/*
 * Percorre toda planília até as células válidadas.
 * @param {Range} rules - Células que compõem a tabela
 */
function processSheet(rules){
  for (var i = 0; i < rules.length; i++) {
    if (rules[i][0] != "") {
      Logger.log(rules[i][0] + "\t" + 
                 rules[i][1] + "\t" +
                 rules[i][2] + "\t" +
                 rules[i][3] + "\t" +
                 rules[i][4]);
    } else {
      break;
    }
  }
}