function clearRange() {
  var sheet = SpreadsheetApp.getActiveSheet();
  
  var rowNum  = sheet.getRange("B12:P40").getNumRows();
  var colNum  = sheet.getRange("B12:P40").getNumColumns();
  
  var currentDate = sheet.getRange("Q2").getValue();
  
  for (var row = 12; row <= rowNum + 11; row++) {
    var appointmentDate = sheet.getRange(row, 9).getValue();
    if (currentDate > appointmentDate) {
      for (var column = 2; column <= colNum + 1; column++) {
        var range = sheet.getRange(row, column);
        range.clearContent();
      }
    }
  }
  
}
