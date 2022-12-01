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
page('/create', createView);
page('/offer/:id', detailsView);
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

      const guest = document.getElementById('guest');
      const user = document.getElementById('user');

      if (userData) {
            user.style.display = 'block';
            guest.style.display = 'none';
      } else {
            user.style.display = 'none';
            guest.style.display = 'block';
      }
}

document.getElementById('logoutBtn').addEventListener('click', () => {
      logout();
      page.redirect('/');
      updateNav();
});