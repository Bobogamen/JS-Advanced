import { GET, POST, DEL, PUT } from './api.js'

export async function getAllOffers() {
      return GET('/data/offers?sortBy=_createdOn%20desc');
}

export async function addOffer(offer) {
      return POST('/data/offers', offer)
}

export async function getOfferById(id) {
      return GET('/data/offers/' + id)
}


export async function updateOffer(id, offer) {
      return PUT('/data/offers/' + id, offer)
}

export async function deleteOffer(id) {
      return DEL('/data/offers/' + id);
}

export async function applyOffer(offerId) {
      return POST('/data/applications', { offerId });
}

export async function getOfferApplicationsCount(offerId) {
      return GET(`/data/applications?where=offerId%3D%22${offerId}%22&distinct=_ownerId&count`)
}

export async function didUserApplyForOffer(offerId, userId) {
      return GET(`/data/applications?where=offerId%3D%22${offerId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}