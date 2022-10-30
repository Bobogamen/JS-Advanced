function generateReport() {
    let columns = document.querySelectorAll("input");
    let rows = document.querySelectorAll("tbody tr");

    let checkedColumns = [];

    let result = [];

    for (let i = 0; i < columns.length; i++) {
        if (columns[i].checked) {
            checkedColumns.push(i);
            checkedColumns.push(columns[i].name);
        }
    }

    for (const line of rows) {

        let current = {};

        for (let i = 0; i < checkedColumns.length; i += 2) {
            let key = checkedColumns[i + 1];
            let value = line.children[checkedColumns[i]].textContent;

            current[key] = value;
        }

        result.push(current);
        debugger;
    }
    document.getElementById("output").textContent = JSON.stringify(result);
}