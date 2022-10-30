function addItem() {
    let name = document.getElementById("newItemText").value;
    document.getElementById("newItemText").value = '';

    if (name.length === 0) return;

    let list = document.getElementById("items");
    let li = document.createElement("li");

    li.appendChild(document.createTextNode(name));
    list.appendChild(li);

    let remove = document.createElement("a");
    let removeText = document.createTextNode("[Delete]");

    remove.appendChild(removeText);
    remove.href = "#";
    remove.addEventListener("click", function(event) {
        event.target.parentElement.remove();
    });

    li.appendChild(remove);
    list.appendChild(li);
}