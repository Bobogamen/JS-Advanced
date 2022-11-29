import { html } from '../lib.js';
import { addOffer } from '../api/data.js';

const createTemplate = (onSubmit) => html`
<section id="create-page" class="auth">
      <form @submit=${onSubmit} id="create">
            <h1 class="title">Create Post</h1>

            <article class="input-group">
                  <label for="title">Post Title</label>
                  <input type="title" name="title" id="title">
            </article>

            <article class="input-group">
                  <label for="description">Description of the needs </label>
                  <input type="text" name="description" id="description">
            </article>

            <article class="input-group">
                  <label for="imageUrl"> Needed materials image </label>
                  <input type="text" name="imageUrl" id="imageUrl">
            </article>

            <article class="input-group">
                  <label for="address">Address of the orphanage</label>
                  <input type="text" name="address" id="address">
            </article>

            <article class="input-group">
                  <label for="phone">Phone number of orphanage employee</label>
                  <input type="text" name="phone" id="phone">
            </article>

            <input type="submit" class="btn submit" value="Create Post">
      </form>
</section>`;

export function createView(ctx) {
      ctx.render(createTemplate(onSubmit));

      async function onSubmit(event) {
            event.preventDefault();

            const formData = new FormData(event.target);

            const offer = {
                  title: formData.get('title'),
                  description: formData.get('description'),
                  imageUrl: formData.get('imageUrl'),
                  address: formData.get('address'),
                  phone: formData.get('phone')
            }

            if (offer.title == '' || offer.description == '' || offer.imageUrl == '' ||
                  offer.address == '' || offer.phone == '' ) {
                  return alert('All fields are required!');
            }

            await addOffer(offer);

            event.target.reset();
            ctx.updateNav();
            ctx.page.redirect('/')
      }
}

