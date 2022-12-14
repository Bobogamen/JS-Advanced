import { getAllAlbums } from '../api/albums.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';

const catalogTemplate = (album) => html`
<section id="catalogPage">
<h1>All Albums</h1>
${album.length == 0 ? html`<p>No Albums in Catalog!</p>` : album.map(albumCard)}
</section>`;

const albumCard = (album) => html`
<div class="card-box">
<img src="${album.imgUrl}">
<div>
    <div class="text-center">
        <p class="name">Name: ${album.name}</p>
        <p class="artist">Artist: ${album.artist}</p>
        <p class="genre">Genre: ${album.genre}</p>
        <p class="price">Price: $${album.price}</p>
        <p class="date">Release Date: ${album.releaseDate}</p>
    </div>
    ${getUserData() != null ? html`
    <div class="btn-group">
        <a href="/albums/${album._id}" id="details">Details</a>
    </div>` : ''}
</div>
</div>`

export async function catalogView(ctx) {
    const albums = await getAllAlbums();

    ctx.render(catalogTemplate(albums));
}