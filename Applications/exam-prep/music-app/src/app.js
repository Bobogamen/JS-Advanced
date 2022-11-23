import { logout } from "./api/users.js";
import { page, render } from "./lib.js";
import { getUserData } from "./util.js";
import { catalogView } from "./views/catalog.js";
import { createView } from "./views/create.js";
import { detailsView } from "./views/details.js";
import { editView } from "./views/edit.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";
import { registerView } from "./views/register.js";
import { searchView } from "./views/search.js";

const main = document.querySelector('main');

page(decorateContext);
page('/', homeView);
page('/albums', catalogView);
page('/albums/:id', detailsView);
page('/edit/:id', editView);
page('/login', loginView);
page('/register', registerView);
page('/create', createView);
page('/search', searchView);


//Start application
updateNav();
page.start();

function decorateContext(ctx, next) {
    ctx.render = renderMain;
    ctx.updateNav = updateNav;

    next();
}

function renderMain(templateResult) {
    render(templateResult, main)
}

function updateNav() {
    const userData = getUserData();

    let ul = document.querySelector('ul');

    if (userData) {
        ul.innerHTML = `<li><a href="/albums">Catalog</a></li>
        <li><a href="/search">Search</a></li>
        <li><a href="/create">Create Album</a></li>
        <li><a id="logoutBtn" href="javascript:void(0)">Logout</a></li>`

        document.getElementById('logoutBtn').addEventListener('click', onLogOut);
    } else {
        ul.innerHTML = `<li><a href="/albums">Catalog</a></li>
        <li><a href="/search">Search</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/register">Register</a></li>`
    }
}

function onLogOut() {
    logout();
    updateNav();
    page.redirect('/');
}