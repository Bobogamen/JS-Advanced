import { getOfferById, updateOffer } from '../api/data.js';
import { html } from '../lib.js';

const editTemplate = (offer, onSubmit) => html`
<section id="edit">
    <div class="form">
        <h2>Edit Offer</h2>
            <form @submit=${onSubmit} class="edit-form">
              <input type="text" name="title" id="job-title" placeholder="Title" .value="${offer.title}" />
              
              <input type="text" name="imageUrl" id="job-logo" 
              placeholder="Company logo url" .value="${offer.imageUrl}" />
              
              <input type="text" name="category" id="job-category" 
              placeholder="Category" .value="${offer.category}" />
              
              <textarea id="job-description" name="description" placeholder="Description" 
              rows="4" cols="50" .value="${offer.description}"></textarea>
              
              <textarea id="job-requirements" name="requirements" placeholder="Requirements" 
              rows="4" cols="50" .value="${offer.requirements}"></textarea>
              
              <input type="text" name="salary" id="job-salary" 
              placeholder="Salary" requirements .value="${offer.salary}" />
              
              <button type="submit">post</button>
            </form>
          </div>
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
            imageUrl: formData.get('imageUrl'),
            category: formData.get('category'),
            description: formData.get('description'),
            requirements: formData.get('requirements'),
            salary: formData.get('salary')
        }

        if (offerUpdated.title == '' || offerUpdated.imageUrl == '' || offerUpdated.category == '' ||
        offerUpdated.description == '' || offerUpdated.requirements == '' || offerUpdated.salary == '') {
            return alert('All fields are required!');
        }

        await updateOffer(offerId, offerUpdated);

        event.target.reset();
        ctx.updateNav();
        ctx.page.redirect('/offer/' + offerId)
    }
}

