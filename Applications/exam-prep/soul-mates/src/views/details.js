import { getShoeById, deleteShoeById } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../utils.js';

const detailsTemplate = (shoe, isOwner, onDelete) => html`
<section id="details">
    <div id="details-wrapper">
    <p id="details-title">Shoe Details</p>
    <div id="img-wrapper">
        <img src="${shoe.imageUrl}" />
    </div>
    <div id="info-wrapper">
        <p>Brand: <span id="details-brand">${shoe.brand}</span></p>
        <p>
        Model: <span id="details-model">${shoe.model}</span>
        </p>
        <p>Release date: <span id="details-release">${shoe.release}</span></p>
        <p>Designer: <span id="details-designer">${shoe.designer}</span></p>
        <p>Value: <span id="details-value">${shoe.value}</span></p>
    </div>

    ${isOwner ? html`
    <div id="action-buttons">
        <a href="/edit/${shoe._id}" id="edit-btn">Edit</a>
        <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
    </div>` : ''}
    </div>
</section>`;




export async function detailsView(ctx) {
    const shoeId = ctx.params.id;
    const shoe = await getShoeById(shoeId);
    const userData = getUserData();

    const isOwner = userData?.id == shoe._ownerId;

    ctx.render(detailsTemplate(shoe, isOwner, onDelete));

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this shoe?');

        if (choice) {
            await deleteShoeById(shoeId);
            ctx.page.redirect('/');
        }
    }
}

