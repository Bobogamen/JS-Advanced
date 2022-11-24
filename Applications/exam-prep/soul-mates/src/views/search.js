import { searchShoes } from '../api/data.js';
import { html, render } from '../lib.js';
import { getUserData } from '../utils.js';

const searchTemplate = (onSearch) => html`
<section id="search">
      <h2>Search by Brand</h2>
            <form @submit=${onSearch} class="search-wrapper cf">
                  <input id="#search-input" type="text" name="search" placeholder="Search here..." required/>
            <button type="submit">Search</button>
            </form>

            <h3>Results:</h3>

            <div id="search-container">
                  <ul class="card-wrapper">
                  </ul>
            </div>
</section>`

export async function searchView(ctx) {
      ctx.render(searchTemplate(onSearch));

      async function onSearch(event) {
            event.preventDefault();

            const query = document.getElementById('#search-input').value.trim();

            const result = await searchShoes(query);

            const ul = document.querySelector('.card-wrapper');

            if (result == 0) {
                  ul.innerHTML = `<h2>There are no results found.</h2>`;
            } else {
                  ul.textContent = '';

                  result.forEach(shoe => {
                        ul.innerHTML += `
                        <li class="card">
                              <img src="${shoe.imageUrl}" />
                              <p>
                                    <strong>Brand: </strong><span class="brand">${shoe.brand}</span>
                              </p>
                              <p>
                                    <strong>Model: </strong><span class="model">${shoe.model}</span>
                              </p>
                              <p><strong>Value:</strong><span class="value">${shoe.value}</span>$</p>
                        ${getUserData() ? `<a class="details-btn" href="/shoe/${shoe._id}">Details</a>` : ''}
                        </li>`
                  })
            }
      }
}



