function uiSelectMany(rowList, sheet) {
  function select(row) { uiSelect(row, sheet); }
  rowList.forEach(select);
}

export default uiSelectMany;
