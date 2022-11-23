import { findAlbum } from '../api/albums.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';

const searchTemplate = (search) => html`
<section id="searchPage">
    <h1>Search by Name</h1>

    <div class="search">
        <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
        <button @click=${search} class="button-list">Search</button>
    </div>

    <h2>Results:</h2>
    <div class="search-result">   

    </div>
</section>`;

export async function searchView(ctx) {

    ctx.render(searchTemplate(search));


    async function search(event) {

        const query = event.target.parentElement.children[0].value;

        let divSearch = document.querySelector('.search-result');

        if (query == '') {
            return alert('Enter album name')
        }

        let result = await findAlbum(query);

        if (result == 0) {
            divSearch.innerHTML = '<p class="no-result">No result.</p>';
        } else {
            result.forEach(a => {
                divSearch.innerHTML += `
                <div class="card-box">
                <img src="${a.imgUrl}">
                <div>
                    <div class="text-center">
                        <p class="name">Name: ${a.name}</p>
                        <p class="artist">Artist: ${a.artist}</p>
                        <p class="genre">Genre: ${a.genre}</p>
                        <p class="price">Price: $${a.price}</p>
                        <p class="date">Release Date: ${a.releaseDate}</p>
                    </div>
                    ${getUserData() != null ? `
                    <div class="btn-group">
                        <a href="/albums/${a._id}" id="details">Details</a>
                    </div>` : ''}
                </div>
            </div>`;
            });
        }
    }
}