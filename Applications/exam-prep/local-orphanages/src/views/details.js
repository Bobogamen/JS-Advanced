import { getOfferById, deleteOffer, didUserApplyForOffer, getOfferApplicationsCount, applyOffer } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../utils.js';

const detailsTemplate = (offer, isOwner, onDelete, isLoggedIn,
    totalOfferApplicationsCount, onApply, didUserApply) => html`
<section id="details-page">
    <h1 class="title">Post Details</h1>

    <div id="container">
        <div id="details">
            <div class="image-wrapper">
                <img src="${offer.imageUrl}" alt="Material Image" class="post-image">
            </div>
            <div class="info">
                <h2 class="title post-title">${offer.title}</h2>
                <p class="post-description">Description: ${offer.description}</p>
                <p class="post-address">Address: ${offer.address}</p>
                <p class="post-number">Phone number: ${offer.phone}</p>
                <p class="donate-Item">Donate Materials: ${totalOfferApplicationsCount}</p>

                ${isOwner ? html`
                <div class="btns">
                    <a href="/edit/${offer._id}" class="edit-btn btn">Edit</a>
                    <a @click=${onDelete} href="javascript:void(0)" class="delete-btn btn">Delete</a>` : ''}

                ${(() => {
                    if (didUserApply == 0) {
                        if (isLoggedIn && !isOwner) { 
                            return html` <a @click=${onApply} href="javascript:void(0)" class="donate-btn btn">Donate</a>`
                        }
                    }
                })()}
                </div>
            </div>
        </div>
    </div>
</section>`;

export async function detailsView(ctx) {
    const offerId = ctx.params.id;
    const offer = await getOfferById(offerId);
    const userData = getUserData();


    let userId;
    let totalOfferApplicationsCount;
    let didUserApply;


    if (userData != undefined) {
        userId = userData.id
        didUserApply = await didUserApplyForOffer(offerId, userId);
    }

    const isOwner = userData && offer._ownerId == userData.id;
    const isLoggedIn = userData !== undefined;

    totalOfferApplicationsCount = await getOfferApplicationsCount(offerId);

    ctx.render(detailsTemplate(offer, isOwner, onDelete, isLoggedIn,
        totalOfferApplicationsCount, onApply, didUserApply));


    async function onApply() {
        await applyOffer(offerId);

        totalOfferApplicationsCount = await getOfferApplicationsCount(offerId);
        didUserApply = await didUserApplyForOffer(offerId, userId);

        ctx.render(detailsTemplate(offer, isOwner, onDelete, isLoggedIn,
            totalOfferApplicationsCount, onApply, didUserApply));
    }

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this pet?');

        if (choice) {
            await deleteOffer(offerId);
            ctx.page.redirect('/');
        }
    }
}

