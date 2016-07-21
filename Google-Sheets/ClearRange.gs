function clearRange() {
  var ss1 = SpreadsheetApp.getActiveSheet();
  
  var rowNum  = ss1.getRange("B12:P200").getNumRows();
  var colNum  = ss1.getRange("B12:P200").getNumColumns();
  
  // Logger.log(rowNum);
  // Logger.log(colNum);
  
  var currentDate = ss1.getRange("Q2").getValue();
  
  // Since row starts at 12, add 12 to rowNum to iterate through all rows
  for (var row = 12; row <= rowNum + 12; row++) {
    var appointmentDate = ss1.getRange(row, 9).getValue();
    if (currentDate > appointmentDate) {
      // Since column starts at 2, add 2 to colNum to iterate through all columns
      for (var column = 2; column <= colNum + 2; column++) {
        var range1 = ss1.getRange(row, column);
        range1.clearContent();
        
      }
    }
  }
  
  var ss2 = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss2.getSheets()[0];
  var range2 = sheet.getRange("B12:P200");
  range2.sort(2)
  
}
