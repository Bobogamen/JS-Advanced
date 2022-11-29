import { getOfferById, updateOffer } from '../api/data.js';
import { html } from '../lib.js';

const editTemplate = (offer, onSubmit) => html`
<section id="edit-page" class="auth">
    <form @submit=${onSubmit} id="edit">
        <h1 class="title">Edit Post</h1>

        <article class="input-group">
            <label for="title">Post Title</label>
            <input type="title" name="title" id="title" value="${offer.title}">
        </article>

        <article class="input-group">
            <label for="description">Description of the needs </label>
            <input type="text" name="description" id="description" value="${offer.description}">
        </article>

        <article class="input-group">
            <label for="imageUrl"> Needed materials image </label>
            <input type="text" name="imageUrl" id="imageUrl" value="${offer.imageUrl}">
        </article>

        <article class="input-group">
            <label for="address">Address of the orphanage</label>
            <input type="text" name="address" id="address" value="${offer.address}">
        </article>

        <article class="input-group">
            <label for="phone">Phone number of orphanage employee</label>
            <input type="text" name="phone" id="phone" value="${offer.phone}">
        </article>

        <input type="submit" class="btn submit" value="Edit Post">
    </form>
</section>
`;

export async function editView(ctx) {
    const offerId = ctx.params.id;

    const offer = await getOfferById(offerId);

    ctx.render(editTemplate(offer, onSubmit));

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const offerUpdated = {
            title: formData.get('title'),
            description: formData.get('description'),
            imageUrl: formData.get('imageUrl'),
            address: formData.get('address'),
            phone: formData.get('phone')
      }

      if (offerUpdated.title == '' || offerUpdated.description == '' || offerUpdated.imageUrl == '' ||
      offerUpdated.address == '' || offerUpdated.phone == '' ) {
            return alert('All fields are required!');
      }

        await updateOffer(offerId, offerUpdated);

        event.target.reset();
        ctx.updateNav();
        ctx.page.redirect('/offer/' + offerId)
    }
}

