function highlight(table) {
  for (let i = 0; i < table.rows.length; i++) {
    let stat = table.rows[i].cells[3];
    let genderB = table.rows[i].cells[2];
    let age = table.rows[i].cells[1];
    let str = table.rows[i];

    if (stat.getAttribute("data-available") === "true") {
      str.classList.add("available");
    }
    if (stat.getAttribute("data-available") === "false") {
      str.classList.add("unavailable");
    }
    if (stat.getAttribute("data-available") === null) {
      str.setAttribute("hidden", true);
    }
    if (genderB.textContent === "m") {
      str.classList.add("male");
    } else {
      str.classList.add("female");
    }
    if (age.textContent < 18) {
      str.style.textDecoration = "line-through";
    }
  }
}
