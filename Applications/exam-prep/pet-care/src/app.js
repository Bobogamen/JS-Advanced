import { logout } from './api/users.js';
import { page, render } from './lib.js';
import { getUserData } from './utils.js';
import { createView } from './views/create.js';
import { dashboardView } from './views/dashboard.js';
import { detailsView } from './views/details.js';
import { editView } from './views/edit.js';
import { homeView } from './views/home.js';
import { loginView } from './views/login.js';
import { registerView } from './views/register.js';

const main = document.querySelector('main');

page(decorateContext);
page('/', homeView);
page('/dashboard', dashboardView);
page('/login', loginView);
page('/register', registerView);
page('/logout', () => console.log('LOGOUT'));
page('/create', createView);
page('/pet/:id', detailsView);
page('/edit/:id', editView);


//-----> Start Application <-----
updateNav();
page.start();

function decorateContext(ctx, next) {
      ctx.render = renderMain;
      ctx.updateNav = updateNav;

      next();
}

function renderMain(templateResult) {
      render(templateResult, main);
}

function updateNav() {
      const userData = getUserData();

      let ul = document.querySelector('ul');
      
      const login = ul.children[2]
      const register = ul.children[3]
      const create = ul.children[4]
      const logout = ul.children[5]

      if (userData) {
            create.style.display = '';
            logout.style.display = '';
            login.style.display = 'none';
            register.style.display = 'none';
      } else {
            login.style.display = '';
            register.style.display = '';
            create.style.display = 'none';
            logout.style.display = 'none';
      }
}

document.getElementById('logoutBtn').addEventListener('click', () => {
      logout();
      page.redirect('/');
      updateNav();
});