/* globals SpreadsheetApp : true */

function uiDialogAccept(title, prompt) {
  const ui = SpreadsheetApp.getUi();
  const buttons = ui.ButtonSet.OK_CANCEL;
  const response = ui.alert(title, prompt, buttons);
  if (response === ui.Button.CANCEL) throw new Error('Действие отменено');
}

