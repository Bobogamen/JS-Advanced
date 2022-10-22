window.addEventListener('load', solve);

function solve() {
    let model = document.getElementById('model');
    let year = document.getElementById('year');
    let description = document.getElementById('description');
    let price = document.getElementById('price');

    let add = document.getElementById('add');
    add.addEventListener('click', (event) => {
        if (model.value !== '' && year.value !== '' && description.value !== '' && price.value >= 0
            && Number(price.value) > 0 && Number(year.value) > 0) {
            event.preventDefault();
            addFurniture(event,
                model.value,
                year.value,
                description.value,
                price.value)
        }
    });

    let furnitureList = document.getElementById('furniture-list');
    let sum = document.querySelector('.total-price');

    function addFurniture(event, model, year, description, price) {

        let tr = document.createElement('tr');
        tr.className = "info";
        HTMLGenerator("td", model, tr);
        HTMLGenerator("td", Number(price).toFixed(2), tr);

        let td = document.createElement('td');

        let moreIfo = HTMLGenerator("button", "More Info", td);
        moreIfo.className = "moreBtn";
        let buyIt = HTMLGenerator("button", "Buy it", td);
        buyIt.className = "buyBtn";

        tr.appendChild(td);

        let trHide = document.createElement('tr');
        trHide.className = "hide";
        HTMLGenerator("td", `Year: ${year}`, trHide);

        let tdDescription = document.createElement('td');
        tdDescription.setAttribute('colspan', 3);
        tdDescription.textContent = `Description: ${description}`;

        trHide.appendChild(tdDescription);

        furnitureList.appendChild(tr);
        furnitureList.appendChild(trHide);

        moreIfo.addEventListener('click', (event) => {
            let button = event.target

            if (button.textContent == "More Info") {

                button.textContent = "Less Info";
                trHide.style.display = "contents"

            } else if (button.textContent == "Less Info") {

                button.textContent = "More Info";
                trHide.style.display = "none"
            }
        });
        buyIt.addEventListener('click', (event) => {
            tr.remove();
            trHide.remove();

            sum.textContent = (Number(sum.textContent) + Number(price)).toFixed(2);
        });

        clearInputs();
    }

    function clearInputs() {
        model.value = "";
        year.value = "";
        description.value = "";
        price.value = "";
    }

    function HTMLGenerator(type, content, parent) {
        let element = document.createElement(type);
        element.textContent = content;

        if (parent) {
            parent.appendChild(element);
        }

        return element;
    }
}
