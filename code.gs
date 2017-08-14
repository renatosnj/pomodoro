/*
 * Localiza o arquivo gerada pelo Memento Database e verifica a 
 * validade acessando o nome da planília.
 */
function getSheet() {
  var arquivo = SpreadsheetApp.openById(
    "1Kl7s_GfkIsEA2CFxrmamy6004GWWOT5zqyin-qmB1bo");
  var planilha = arquivo.getSheetByName("Registro de Pomodoros");
  var range = planilha.getRange(1, 1, planilha.getMaxRows(), 5);
  var table = range.getDisplayValues();
  processSheet(table);  
  Logger.log(arquivo.getName());
}

/*
 * Percorre toda planília até as células válidadas.
 * @param {Range} table - Células que compõem a tabela
 */
function processSheet(table){
  for (var i = 0; i < table.length; i++) {
    if (table[i][0] != "") {
      //logLine(table[i]); 
      pomodorosPorSemana(table[i]);
      
    } else {
      break;
    }
  }
  Logger.log(numPorSemana)
}


/*
 * Localiza a semana em que o pomodoro ocorreu e computa na variável 
 * global numPorSemana
 * @param {Range} linha - linha da tabela que representa um registro 
 *                        de pomodoro
 */
var numPorSemana = {};
function pomodorosPorSemana(linha){
  var data = linha[4].split("/");
  var result = getWeekNumber(
    new Date("20"+data[2], 
             data[1] -1, 
             data[0]));
  
  // Checando se o resultado é válido
  if (!isNaN(result[1])){
    // Se for a primeira inserção, inicializa a variável
    if ( isNaN(numPorSemana[result[1]]) ) {
      numPorSemana[result[1]] = 0;
    }
    numPorSemana[result[1]]++;
  }
}

/*
 * Imprime uma linha da tabela no Log
 */
function logLine(linha){
  Logger.log(linha[0] + "\t" + 
             linha[1] + "\t" +
             linha[2] + "\t" +
             linha[3] + "\t" +
             linha[4]);
}