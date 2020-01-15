import withSheet from './withSheet';

function uiRemoveSelected(sheet) {
  function unselect(range) { range.setValue(false); }
  const sheet_ = withSheet(sheet);
  const last = sheet_.getLastRow();
  const a1Notation = 'A1:A'.concat(last);
  sheet_.getRange(a1Notation)
    .createTextFinder(true)
    .findAll()
    .forEach(unselect);
}

export default uiRemoveSelected;
