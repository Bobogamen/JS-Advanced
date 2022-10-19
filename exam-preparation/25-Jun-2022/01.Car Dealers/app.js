window.addEventListener("load", solve);

function solve() {
  let publish = document.getElementById('publish');

  let make = document.getElementById('make');
  let model = document.getElementById('model');
  let year = document.getElementById('year');
  let fuel = document.getElementById('fuel');
  let originalCost = document.getElementById('original-cost');
  let sellingprice = document.getElementById('selling-price');
  let profit = 0;

  publish.addEventListener('click', (event) => {
    event.preventDefault();
    addOffer(event);
  });

  function addOffer(event) {

    if (make.value === '' || 
    model.value === '' || 
    year.value === '' || 
    fuel.value === '' || 
    originalCost.value === '' || 
    sellingprice.value === '' ||
    Number(originalCost.value) > Number(sellingprice.value)) {
      return;
    }

    let current = {};

    current['make'] = make.value;
    current['model'] = model.value;
    current['year'] = year.value;
    current['fuel'] = fuel.value;
    current['originalCost'] = Number(originalCost.value);
    current['sellingprice'] = Number(sellingprice.value);

    let tbody = document.getElementById('table-body');

    let tr = document.createElement('tr');
    tr.classList.add = 'row';

    Object.values(current).forEach(k => {
      let td = document.createElement('td');
      td.textContent = k;
      tr.appendChild(td);
    });

    let edit = document.createElement('button');
    edit.textContent = 'Edit'
    edit.className = 'action-btn edit';

    let sell = document.createElement('button');
    sell.textContent = 'Sell'
    sell.className = 'action-btn sell';

    let td = document.createElement('td');

    td.appendChild(edit);
    td.appendChild(sell);

    tr.appendChild(td);

    tbody.appendChild(tr);

    clearFields();

    edit.addEventListener('click', (event) => editElement(
      event, 
      current.make,
      current.model,
      current.fuel,
      current.year,
      current.originalCost,
      current.sellingprice,
      ));
    sell.addEventListener('click', (event) => sellElement(
      event,
      current.make + ' ' + current.model,
      current.year,
      Number(current.sellingprice) - Number(current.originalCost)
      ));
  }

  function editElement(
    event, 
    currentRowMake, 
    currentRowModel,
    currentRowFuel,
    currentRowYear,
    currentRowOrginalCost,
    currentRowSellingPrice  
    ) {
    make.value = currentRowMake;
    model.value = currentRowModel;
    fuel.value = currentRowFuel;
    year.value = currentRowYear;
    originalCost.value = currentRowOrginalCost;
    sellingprice.value = currentRowSellingPrice;

    event.target.parentNode.parentNode.remove();
  };

  function sellElement(event, makeAndMode, year, profit) {
    let list = document.getElementById("cars-list");
    let li = document.createElement("li");
    li.className = "each-list";

    let carMakeAndModel = document.createElement('span');
    carMakeAndModel.textContent = makeAndMode;

    let carYear = document.createElement('span');
    carYear.textContent = year;

    let carProfit = document.createElement('span');
    carProfit.textContent += profit;

    li.appendChild(carMakeAndModel);
    li.appendChild(carYear);
    li.appendChild(carProfit);

    list.appendChild(li);

    let totalProfit = document.getElementById('profit');
    totalProfit.textContent = (Number(totalProfit.textContent) + profit).toFixed(2);

    event.target.parentNode.parentNode.remove();
  }

  function clearFields() {
    make.value = '';
    model.value = '';
    year.value = '';
    fuel.value = '';
    originalCost.value = '';
    sellingprice.value = '';
  }
};