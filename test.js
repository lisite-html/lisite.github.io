const container = document.getElementById("container");

// 左から 7 / 10 / 10
const tableCounts = [7, 10, 10];

// 2×3テーブル
function createTable() {
  const table = document.createElement("table");
  table.classList.add("check-table");

  for (let i = 0; i < 2; i++) {
    const tr = document.createElement("tr");

    for (let j = 0; j < 3; j++) {
      const td = document.createElement("td");

      const label = document.createElement("label");
      label.classList.add("custom-checkbox");

      const input = document.createElement("input");
      input.type = "checkbox";

      const span = document.createElement("span");

      label.appendChild(input);
      label.appendChild(span);
      td.appendChild(label);
      tr.appendChild(td);
    }

    table.appendChild(tr);
  }

  return table;
}

// 1×3テーブル
function createOneByThreeTable() {
  const table = document.createElement("table");
  table.classList.add("check-table");

  const tr = document.createElement("tr");

  for (let j = 0; j < 3; j++) {
    const td = document.createElement("td");

    const label = document.createElement("label");
    label.classList.add("custom-checkbox");

    const input = document.createElement("input");
    input.type = "checkbox";

    const span = document.createElement("span");

    label.appendChild(input);
    label.appendChild(span);
    td.appendChild(label);
    tr.appendChild(td);
  }

  table.appendChild(tr);
  return table;
}

