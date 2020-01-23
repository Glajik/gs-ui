import withSheet from './withSheet';

function uiUnselect(row, sheet) {
  withSheet(sheet).getRange(row, 1).setValue(false);
}

export default uiUnselect;
