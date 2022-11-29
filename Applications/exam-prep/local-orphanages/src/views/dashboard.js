import { getAllOffers } from '../api/data.js';
import { html } from '../lib.js';

const dashboardTemplate = (offers) => html`
<section id="dashboard-page">
      <h1 class="title">All Posts</h1>

      ${offers.length == 0 ? html`<h1 class="title no-posts-title">No posts yet!</h1>` : 
      html`
      <div class="all-posts">
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

export async function dashboardView(ctx) {
      const offers = await getAllOffers()

      ctx.render(dashboardTemplate(offers));
}

