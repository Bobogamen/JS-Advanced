window.addEventListener('load', solve);

function solve() {
    let clientName = document.getElementById('client-name');
    let clientPhone = document.getElementById('client-phone');
    let description = document.getElementById('description');
    let orderType = document.getElementById('type-product');

    let sendBtn = document.querySelectorAll('button')[0];
    let clearBtn = document.querySelectorAll('button')[1];

    let receivedOrders = document.getElementById('received-orders');
    let completedOrders = document.getElementById('completed-orders');

    sendBtn.addEventListener('click', (event) => {
        event.preventDefault();
        addOrder(event);
    });

    clearBtn.addEventListener('click', clearAll);

    function addOrder(event) {
        let name = clientName.value;
        let phone = clientPhone.value;
        let text = description.value;
        let type = orderType.value;

        if (name === "" || phone === "" || text === "") {
            return;
        }

        let div = document.createElement('div');
        div.className = 'container';

        let h2 = document.createElement('h2');
        h2.textContent = `Product type for repair: ${type}`;

        let h3 = document.createElement('h3');
        h3.textContent = `Client information: ${name}, ${phone}`;

        let h4 = document.createElement('h4');
        h4.textContent = `Description of the problem: ${text}`;

        let startBtn = document.createElement('button');
        startBtn.className = "start-btn";
        startBtn.textContent = "Start repair";
        startBtn.addEventListener('click', (event) => startRepair(event));

        let finishBtn = document.createElement('button');
        finishBtn.className = "finish-btn";
        finishBtn.setAttribute('disabled', '');
        finishBtn.textContent = "Finish repair";
        finishBtn.addEventListener('click', (event) => finishRepair(event, name, phone, text, type));

        div.appendChild(h2);
        div.appendChild(h3);
        div.appendChild(h4);
        div.appendChild(startBtn);
        div.appendChild(finishBtn);

        receivedOrders.appendChild(div);

        clientName.value = '';
        clientPhone.value = '';
        description.value = '';
    };

    function startRepair(event) {
        event.target.parentElement.querySelectorAll('button')[0].setAttribute('disabled', '');
        event.target.parentElement.querySelectorAll('button')[1].removeAttribute('disabled');
    };

    function finishRepair(event, name, phone, text, type) {
        let div = document.createElement('div');
        div.className = 'container';

        let h2 = document.createElement('h2');
        h2.textContent = `Product type for repair: ${type}`;

        let h3 = document.createElement('h3');
        h3.textContent = `Client information: ${name}, ${phone}`;

        let h4 = document.createElement('h4');
        h4.textContent = `Description of the problem: ${text}`;

        div.appendChild(h2);
        div.appendChild(h3);
        div.appendChild(h4);

        completedOrders.appendChild(div);

        event.target.parentElement.remove();
    };

    function clearAll() {
        completedOrders.innerHTML = `<h2>Completed orders:</h2>
                <img src="./style/img/completed-order.png">
                <button class="clear-btn">Clear</button>`
    };
};