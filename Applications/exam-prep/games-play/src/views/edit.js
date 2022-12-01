import { getOfferById, updateOffer } from '../api/data.js';
import { html } from '../lib.js';

const editTemplate = (offer, onSubmit) => html`
<section id="edit-page" class="auth">
    <form @submit=${onSubmit} id="edit">
        <div class="container">

            <h1>Edit Game</h1>
            <label for="leg-title">Legendary title:</label>
            <input type="text" id="title" name="title" value="${offer.title}">

            <label for="category">Category:</label>
            <input type="text" id="category" name="category" value="${offer.category}">

            <label for="levels">MaxLevel:</label>
            <input type="number" id="maxLevel" name="maxLevel" min="1" value="${offer.maxLevel}">

            <label for="game-img">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" value="${offer.imageUrl}">

            <label for="summary">Summary:</label>
            <textarea name="summary" id="summary">${offer.summary}</textarea>
            <input class="btn submit" type="submit" value="Edit Game">
        </div>
    </form>
</section>`;

export async function editView(ctx) {
    const offerId = ctx.params.id;

    const offer = await getOfferById(offerId);

    ctx.render(editTemplate(offer, onSubmit));

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const offerUpdated = {
            title: formData.get('title'),
            category: formData.get('category'),
            maxLevel: formData.get('maxLevel'),
            imageUrl: formData.get('imageUrl'),
            summary: formData.get('summary'),
        }

        if (offerUpdated.title == '' || offerUpdated.category == '' || offerUpdated.maxLevel == '' ||
            offerUpdated.imageUrl == '' || offerUpdated.summary == '') {
            return alert('All fields are required!');
        }

        await updateOffer(offerId, offerUpdated);

        event.target.reset();
        ctx.updateNav();
        ctx.page.redirect('/offer/' + offerId)
    }
}

