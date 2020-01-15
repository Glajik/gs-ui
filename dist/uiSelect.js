// import withSheet from './withSheet';

function uiSelect(row, sheet) {
  withSheet(sheet).getRange(row, 1).setValue(true);
}

