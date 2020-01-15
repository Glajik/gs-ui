// import withSheet from './withSheet';

function uiSwitchTo(sheet, row) {
  withSheet(sheet).getRange(row || 1, 1).activate();
}

