/* globals SpreadsheetApp : true */

function uiDialogAsk(title, prompt) {
  const ui = SpreadsheetApp.getUi();
  const buttons = ui.ButtonSet.OK_CANCEL;
  const response = ui.prompt(title, prompt, buttons);
  if (response.getSelectedButton() === ui.Button.CANCEL) {
    throw new Error('Действие отменено');
  }
  return response.getResponseText().trim();
}

export default uiDialogAsk;
