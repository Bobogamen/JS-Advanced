import { getPetById, deletePet, donatePet, getPetDonation, getPetDonationCount } from '../api/pets.js';
import { html } from '../lib.js';
import { getUserData } from '../utils.js';

const detailsTemplate = (pet, guest, creator, count, onDelete, onDonate) => html`
<section id="detailsPage">
        <div class="details">
            <div class="animalPic">
                <img src="${pet.image}">
            </div>
            <div>
                <div class="animalInfo">
                    <h1>Name: ${pet.name}</h1>
                    <h3>Breed: ${pet.breed}</h3>
                    <h4>Age: ${pet.age}</h4>
                    <h4>Weight: ${pet.weight}</h4>
                    <h4 class="donation">Donation: ${count * 100}$</h4>
                </div>
                ${guest ? '' : html`
                ${creator ? html`
                <div class="actionBtn">
                    <a href="/edit/${pet._id}" class="edit">Edit</a>
                    <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>
                </div>` : html`
                <div class="actionBtn">
                    <a @click=${onDonate} href="javascript:void(0)" class="donate">Donate</a>
                </div>`}
                `}
            </div>
        </div>
</section>`;




export async function detailsView(ctx) {
    const petId = ctx.params.id;

    const pet = await getPetById(petId);

    const userData = getUserData();

    let creator;
    let guest = false;
    const count = await getPetDonation(petId);

    if (userData) {
        creator = userData?.id == pet._ownerId;
    } else {
        guest = true;
    }

    ctx.render(detailsTemplate(pet, guest, creator, count, onDelete, onDonate));

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this pet?');

        if (choice) {
            await deletePet(petId);
            ctx.page.redirect('/');
        }
    }

    async function onDonate() {
        await donatePet(petId);

        updateDetails();
    }

    function updateDetails() {
        let weight = document.querySelector('.animalInfo').children[4];
        weight.textContent = `Donation: ${count * 100}$`

        let donateBtn = document.querySelector('.donate');
        donateBtn.style.display = 'none';
    }
}

