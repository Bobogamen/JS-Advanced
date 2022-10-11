function solve() {
  let textarea = document.querySelectorAll('textarea');
  let buttons = document.querySelectorAll('button');
  let tbody = document.querySelector('tbody');

  let generate = buttons[0];
  let buy = buttons[1];

  generate.addEventListener('click', makeList);
  buy.addEventListener('click', buyProducts);

  function makeList() {
    let items = JSON.parse(textarea[0].value);

    for (const item of items) {
      let tr = document.createElement('tr');

      tr.innerHTML = 
      `<td><img src="${item.img}"></td>` +
      `<td><p>${item.name}</p></td>` +
      `<td><p>${item.price}</p></td>` + 
      `<td><p>${item.decFactor}</p>` + 
      `</td><td><input type="checkbox"/></td>`;

      tbody.appendChild(tr);
    }

  }

  function buyProducts() {
    let table = Array.from(tbody.querySelectorAll('tr'));

    let names = [];
    let sum = 0;
    let totalDecFactor = [];

    for (const row of table) {
      let current = row.querySelector('input[type=checkbox]:checked');

      if (current != null) {
        let currentRow = current.parentElement.parentElement.childNodes;

        let name = currentRow[1].textContent;
        let price = Number(currentRow[2].textContent);
        let itemDecFactor = Number(currentRow[3].textContent);

        names.push(name);
        sum += price;
        totalDecFactor.push(itemDecFactor);
      }
    }

    let output = textarea[1];
    output.value = `Bought furniture: ${names.join(", ")}\nTotal price: ${sum.toFixed(2)}\nAverage decoration factor: ${totalDecFactor.reduce((a,b) => a + b, 0) / totalDecFactor.length}`;
  }
}