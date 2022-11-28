import { getPetById, deletePet, donatePet, getPetDonationsCount, didUserMakeDonation } from '../api/pets.js';
import { html } from '../lib.js';
import { getUserData } from '../utils.js';

const detailsTemplate = (pet, isOwner, onDelete, isLoggedIn, totalDonationCount, onDonate, didUserDonate) => html`
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
                <h4 class="donation">Donation: ${totalDonationCount * 100}$</h4>
            </div>
            <!-- if there is no registered user, do not display buttons-->
            <div class="actionBtn">
                ${isOwner ? html`<a href="/edit/${pet._id}" class="edit">Edit</a>
                <a href="javascript:void(0)" @click=${onDelete} class="remove">Delete</a>
                ` : ''}

                ${(() => {
                if (didUserDonate == 0) {
                    if (isLoggedIn && !isOwner) {        
                        return html`<a href="javascript:void(0)" class="donate"
                    @click=${onDonate}>Donate</a>`
                    }
                }
            })()}
            </div>
        </div>
    </div>
</section>`;




export async function detailsView(ctx) {
    const petId = ctx.params.id;
    const pet = await getPetById(petId);
    const userData = getUserData();


    let userId;
    let totalDonationCount;
    let didUserDonate;


    if (userData != undefined) {
        userId = userData.id
        didUserDonate = await didUserMakeDonation(petId, userId);
    }

    const isOwner = userData && offer._ownerId == userData.id;
    const isLoggedIn = userData !== undefined;

    totalDonationCount = await getPetDonationsCount(petId);
    ctx.render(detailsTemplate(pet, isOwner, onDelete, isLoggedIn, totalDonationCount, onDonate, didUserDonate));

    
    async function onDonate() {
        await donatePet(petId);

        totalDonationCount = await getPetDonationsCount(petId);
        didUserDonate = await didUserMakeDonation(petId, userId);
        ctx.render(detailsTemplate(pet, isOwner, onDelete, isLoggedIn, totalDonationCount, onDonate, didUserDonate));
    }

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this pet?');

        if (choice) {
            await deletePet(petId);
            ctx.page.redirect('/');
        }
    }
}

