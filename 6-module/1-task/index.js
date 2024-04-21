/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  #rows = [];

  constructor(rows) {
    this.#rows = rows;
    this.elem = this.#render();
  }

  #templateHeader() {
    return `
      <thead>
        <tr>
          <th>Имя</th>
          <th>Возраст</th>
          <th>Зарплата</th>
          <th>Город</th>
          <th></th>
        </tr>
      </thead>
      `;
  }

  #templateBody = () => {
    for (let i = 0; i < this.#rows.length; i++) {
      this.elem.innerHTML += `
        <tr class = 'rowId'>
          <td>${this.#rows[i].name}</td>
          <td>${this.#rows[i].age}</td>
          <td>${this.#rows[i].salary}</td>
          <td>${this.#rows[i].city}</td>
          <td><button data-action = "remove">X</button></td>
        </tr>
      `;
    }
  };

  #remover = () => {
    const rowsInTable = Array.from(this.elem.querySelectorAll(".rowId"));
    rowsInTable.forEach((row) => {
      let deleteButton = row.querySelector('[data-action = "remove"]');
      deleteButton.addEventListener("click", () => {
        row.remove();
      });
    });
  };

  #render() {
    this.elem = document.createElement("table");
    this.elem.innerHTML = this.#templateHeader();
    this.#templateBody();
    this.#remover();
    return this.elem;
  }
}
