import { getOfferById, deleteOffer, getAllCommentByGameId, postComment } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../utils.js';

const detailsTemplate = (offer, isOwner, onDelete, isLoggedIn, comments, sendComment) => html`
<section id="game-details">
        <h1>Game Details</h1>
        <div class="info-section">
            <div class="game-header">
                <img class="game-img" src="${offer.imageUrl}" />
                <h1>${offer.title}</h1>
                <span class="levels">MaxLevel: ${offer.maxLevel}</span>
                <p class="type">${offer.category}</p>
            </div>

            <p class="text">${offer.summary}</p>

            <!-- Bonus ( for Guests and Users ) -->
            <div class="details-comments">
                <h2>Comments:</h2>
                ${comments.length == 0 ? html`<p class="no-comment">No comments.</p>` : html`                
                <ul>
                    ${comments.map(commentCard)}
                </ul>
                `}
            </div>

            ${isOwner ? html`
            <div class="buttons">
                <a href="/edit/${offer._id}" class="button">Edit</a>
                <a @click=${onDelete} href="javascript:void(0)" class="button">Delete</a>
            </div>` : ''}
        </div>


        ${isLoggedIn && !isOwner ? html`
        <article class="create-comment">
            <label>Add new comment:</label>
            <form @submit=${sendComment} class="form">
                <textarea name="comment" placeholder="Comment......"></textarea>
                <input class="btn submit" type="submit" value="Add Comment">
            </form>
        </article>` : '' }
</section>`;

const commentCard = (comment) => html`
<li class="comment">
    <p>Content: ${comment.comment}</p>
</li>`

export async function detailsView(ctx) {
    const offerId = ctx.params.id;
    const offer = await getOfferById(offerId);
    const userData = getUserData();

    const isOwner = userData?.id == offer._ownerId;
    const isLoggedIn = userData != undefined;
    let comments = await getAllCommentByGameId(offerId);

    ctx.render(detailsTemplate(offer, isOwner, onDelete, isLoggedIn, comments, sendComment));

    async function sendComment(event) {
        event.preventDefault();

        debugger;
        const comment = document.getElementsByTagName('textarea').comment.value

        await postComment(offerId, comment);
        comments = await getAllCommentByGameId(offerId);

        ctx.render(detailsTemplate(offer, isOwner, onDelete, isLoggedIn, comments, sendComment));

        event.target.reset();
        ctx.page.redirect('/offer/' + offerId);
    }

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this pet?');

        if (choice) {
            await deleteOffer(offerId);
            ctx.page.redirect('/');
        }
    }
}

