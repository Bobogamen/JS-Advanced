function solve() {
    let firstName = document.getElementById('fname');
    let lastName = document.getElementById('lname');
    let email = document.getElementById('email');
    let birth = document.getElementById('birth');
    let position = document.getElementById('position');
    let salary = document.getElementById('salary');

    let tbody = document.getElementById('tbody');

    let addWorker = document.getElementById('add-worker');

    let sum = document.getElementById('sum');

    addWorker.addEventListener('click', (event) => {
        event.preventDefault();
        hireWorker()});

    function hireWorker() {
        let fNameValue = firstName.value;
        let lNameValue = lastName.value;
        let emailValue = email.value;
        let birthValue = birth.value;
        let positionValue = position.value;
        let salaryValue = salary.value;

        if (fNameValue == "" || lNameValue =="" || emailValue == "" || 
        birthValue == ""  || positionValue == "" || salaryValue == "") {
            return;
        }

        const tr = HTMLGenerator("tr");
        HTMLGenerator("td", `${fNameValue}`, tr);
        HTMLGenerator("td", `${lNameValue}`, tr);
        HTMLGenerator("td", `${emailValue}`, tr);
        HTMLGenerator("td", `${birthValue}`, tr);
        HTMLGenerator("td", `${positionValue}`, tr);
        HTMLGenerator("td", `${salaryValue}`, tr);

        const td = HTMLGenerator("td", "", tr);
        let firedBtn = HTMLGenerator("button", "Fired", td);
        firedBtn.setAttribute("class", "fired");
        let editBtn = HTMLGenerator("button", "Edit", td);
        editBtn.setAttribute("class", "edit")

        tbody.appendChild(tr);

        editBtn.addEventListener('click', (event) => 
        editWorker(event, 
            fNameValue, 
            lNameValue, 
            emailValue, 
            birthValue, 
            positionValue, 
            salaryValue));
            
        firedBtn.addEventListener('click', (event) => fireWorker(event, salaryValue));

        let currentSum = Number(sum.textContent);

        currentSum += Number(salaryValue);

        sum.textContent = currentSum.toFixed(2);

        clearInput();
    }

    function editWorker(event, fName, lName, eml, brth, positionName, slr) {
        event.preventDefault();
        event.target.parentElement.parentElement.remove();

        firstName.value = fName;
        lastName.value = lName;
        email.value = eml;
        birth.value = brth;
        position.value = positionName;
        salary.value = slr;

        let currentSum = Number(sum.textContent);
        currentSum -= Number(slr);
        sum.textContent = currentSum.toFixed(2);
    };

    function fireWorker(event, salaryValue) {
        event.preventDefault();
        event.target.parentElement.parentElement.remove();

        let currentSum = Number(sum.textContent);
        currentSum -= Number(salaryValue);
        sum.textContent = currentSum.toFixed(2);
    };

    function clearInput () {
        firstName.value = "";
        lastName.value = "";
        email.value = "";
        birth.value = "";
        position.value = "";
        salary.value = "";
    }

    function HTMLGenerator(type, content, parent) {
        let element = document.createElement(type);
        element.textContent = content;

        if (parent) {
            parent.appendChild(element);
        }
        return element;
    }
};

solve()