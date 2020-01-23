/* globals SpreadsheetApp : true */

function withSheet(sheet) {
  if (!sheet) {
    return SpreadsheetApp.getActiveSheet();
  }
  if (typeof sheet === 'string') {
    return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheet);
  }
  return sheet;
}

export default withSheet;
