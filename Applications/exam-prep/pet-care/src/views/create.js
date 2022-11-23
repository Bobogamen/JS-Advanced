import { html } from '../lib.js';
import { createPet } from '../api/pets.js';

const createTemplate = (onSubmit) => html`
<section id="createPage">
      <form @submit=${onSubmit} class="createForm">
            <img src="./images/cat-create.jpg">
            <div>
                  <h2>Create PetPal</h2>
                  <div class="name">
                  <label for="name">Name:</label>
                  <input name="name" id="name" type="text" placeholder="Max">
                  </div>
                  <div class="breed">
                  <label for="breed">Breed:</label>
                  <input name="breed" id="breed" type="text" placeholder="Shiba Inu">
                  </div>
                  <div class="Age">
                  <label for="age">Age:</label>
                  <input name="age" id="age" type="text" placeholder="2 years">
                  </div>
                  <div class="weight">
                  <label for="weight">Weight:</label>
                  <input name="weight" id="weight" type="text" placeholder="5kg">
                  </div>
                  <div class="image">
                  <label for="image">Image:</label>
                  <input name="image" id="image" type="text" placeholder="./image/dog.jpeg">
                  </div>
                  <button class="btn" type="submit">Create Pet</button>
            </div>
      </form>
</section>`;

export function createView(ctx) {
      ctx.render(createTemplate(onSubmit));

      async function onSubmit(event) {
            event.preventDefault();

            const formData = new FormData(event.target);

            const pet = {
                  name: formData.get('name'),
                  breed: formData.get('breed'),
                  age: formData.get('age'),
                  weight: formData.get('weight'),
                  image: formData.get('image')
            }

            if (pet.name == '' || pet.breed == '' || pet.age == '' || pet.weight == '' || pet.image == '') {
                  return alert('All fields are required!');
            }

            await createPet(pet);

            event.target.reset();
            ctx.updateNav();
            ctx.page.redirect('/')
      }
}

