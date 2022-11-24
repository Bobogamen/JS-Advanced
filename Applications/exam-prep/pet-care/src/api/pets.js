import { GET, POST, DEL, PUT } from './api.js'

export async function getAllPets() {
      return GET('/data/pets?sortBy=_createdOn%20desc&distinct=name');
}

export async function getPetById(id) {
      return GET('/data/pets/' + id);
}

export async function createPet(pet) {
      return POST('/data/pets', pet);
}

export async function updatePet(id, pet) {
      return PUT('/data/pets/' + id, pet);
}

export async function deletePet(id) {
      return DEL('/data/pets/' + id);
}

export async function donatePet(petId) {
      return POST('/data/donation', { petId });
}

export async function getPetDonationsCount(petId) {
      return GET(`/data/donation?where=petId%3D%22${petId}%22&distinct=_ownerId&count`)
}

export async function didUserMakeDonation(petId, userId) {
      return GET(`/data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}