/* globals SpreadsheetApp : true */

function uiToast(msg) {
  SpreadsheetApp.getActiveSpreadsheet().toast(msg);
}

export default uiToast;
