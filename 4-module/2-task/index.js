function makeDiagonalRed(table) {
  for (let i = 0; i < table.rows.length; i++) {
    let number = table.rows[i].cells[i];
    number.style.background = "red";
  }
}
