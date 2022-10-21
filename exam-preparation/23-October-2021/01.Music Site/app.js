window.addEventListener('load', solve);

function solve() {
    let genre = document.getElementById('genre');
    let name = document.getElementById('name');
    let author = document.getElementById('author');
    let date = document.getElementById('date');

    let allHits = document.querySelector('.all-hits-container');
    let savedHits = document.querySelector('.saved-container');

    let likes = document.getElementById('total-likes');

    document.getElementById('add-btn').
        addEventListener('click', (event) => {
            event.preventDefault();
            addSong(event, genre.value, name.value, author.value, date.value)
        });

    function addSong(event, genre, name, author, date) {
        if (genre == "" || name == "" || author == "" || date == "") {
            return;
        }

        let divInfo = document.createElement('div');
        divInfo.className = "hits-info";

        let img = document.createElement('img');
        img.src = "./static/img/img.png"

        divInfo.appendChild(img);

        HTMLGenerator("h2", `Genre: ${genre}`, divInfo);
        HTMLGenerator("h2", `Name: ${name}`, divInfo);
        HTMLGenerator("h2", `Author: ${author}`, divInfo);
        HTMLGenerator("h3", `Date: ${date}`, divInfo);

        let saveBtn = HTMLGenerator("button", "Save song", divInfo);
        saveBtn.className = "save-btn";
        let likeBtn = HTMLGenerator("button", "Like song", divInfo);
        likeBtn.className = "like-btn";
        let deleteBtn = HTMLGenerator("button", "Delete", divInfo);
        deleteBtn.className = "delete-btn";

        allHits.appendChild(divInfo);

        saveBtn.addEventListener('click',
            (event) => saveSong(event, genre, name, author, date));

        likeBtn.addEventListener('click', (event) => likeSong(event));

        deleteBtn.addEventListener('click', (event) => deleteSong(event));

        clearInputs();
    }

    function HTMLGenerator(type, content, parent) {
        let element = document.createElement(type);
        element.textContent = content;

        if (parent) {
            parent.appendChild(element);
        }

        return element;
    }

    function clearInputs() {
        genre.value = "";
        name.value = "";
        author.value = "";
        date.value = "";
    }

    function saveSong(event, genre, name, author, date) {
        let div = document.createElement('div');
        div.className = "hits-info";

        let img = document.createElement('img');
        img.src = "./static/img/img.png"

        div.appendChild(img);

        HTMLGenerator("h2", `Genre: ${genre}`, div);
        HTMLGenerator("h2", `Name: ${name}`, div);
        HTMLGenerator("h2", `Author: ${author}`, div);
        HTMLGenerator("h3", `Date: ${date}`, div);

        let deleteBtn = HTMLGenerator("button", "Delete", div);
        deleteBtn.className = "delete-btn";

        savedHits.appendChild(div);

        deleteBtn.addEventListener('click', (event) => deleteSong(event));

        event.target.parentElement.remove();
    }

    function likeSong(event) {
        event.target.setAttribute('disabled', '');

        let currentLikes = Number(likes.children[0].children[0].textContent.split(" ")[2]);
        currentLikes++;

        let updatedLikes = likes.childNodes[1].childNodes[1];
        updatedLikes.textContent = `Total Likes: ${currentLikes}`;
    }

    function deleteSong(event) {
        event.target.parentElement.remove()
    }
}