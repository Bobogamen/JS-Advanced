function addItem() {

    let name = document.getElementById("newItemText").value;

    let list = document.getElementById("items");

    let li = document.createElement("li");
    li.appendChild(document.createTextNode(name));
    
    list.appendChild(li);

    document.getElementById("newItemText").value = '';
}