import { getAllPostByUserId } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../utils.js';

const userPostsTemplate = (offers) => html`
<section id="my-posts-page">
      <h1 class="title">My Posts</h1>

      ${offers.length == 0 ? html`<h1 class="title no-posts-title">You have no posts yet!</h1>` : 
      html`
      <div class="my-posts">
            ${offers.map(offerCard)}
      </div>`}
</section>`;

const offerCard = (offer) => html`
<div class="post">
      <h2 class="post-title">${offer.title}</h2>
      <img class="post-image" src="${offer.imageUrl}" alt="Material Image">
      <div class="btn-wrapper">
            <a href="/offer/${offer._id}" class="details-btn btn">Details</a>
      </div>
</div>`

export async function userPostsView(ctx) {
      const userId = getUserData().id;
      const offers = await getAllPostByUserId(userId)

      ctx.render(userPostsTemplate(offers));
}

