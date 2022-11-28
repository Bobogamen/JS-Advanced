import { getOfferById, deleteOffer, didUserApplyForOffer, getOfferApplicationsCount, applyOffer } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../utils.js';

const detailsTemplate = (offer, isOwner, onDelete, isLoggedIn, 
    totalOfferApplicationsCount, onApply, didUserApply) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src="${offer.imageUrl}" alt="example" />
        <p id="details-title">${offer.title}</p>
        <p id="details-category">
            Category: <span id="categories">${offer.category}</span>
        </p>
        <p id="details-salary">
            Salary: <span id="salary-number">${offer.salary}</span>
        </p>
        <div id="info-wrapper">
            <div id="details-description">
            <h4>Description</h4>
            <span>${offer.description}</span>
            </div>
            <div id="details-requirements">
            <h4>Requirements</h4>
            <span>${offer.requirements}</span>
            </div>
        </div>
        <p>Applications: <strong id="applications">${totalOfferApplicationsCount}</strong></p>

        <div id="action-buttons">
        ${isOwner ? html`
            <a href="/edit/${offer._id}" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>` : ''}

            ${(() => {
                if (didUserApply == 0) {
                    if (isLoggedIn && !isOwner) {
                        return html`<a @click=${onApply} href="javascript:void(0)" id="apply-btn">Apply</a>`
                    }
                }
            })()}
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
            ctx.page.redirect('/dashboard');
        }
    }
}

