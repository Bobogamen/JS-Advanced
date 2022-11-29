import { GET, POST, DEL, PUT } from './api.js'

export async function getAllOffers() {
      return GET('/data/posts?sortBy=_createdOn%20desc');
}

export async function getAllPostByUserId(userId) {
      return GET(`/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}

export async function addOffer(offer) {
      return POST('/data/posts', offer)
}

export async function getOfferById(id) {
      return GET('/data/posts/' + id)
}

export async function updateOffer(id, offer) {
      return PUT('/data/posts/' + id, offer)
}

export async function deleteOffer(id) {
      return DEL('/data/posts/' + id);
}

export async function applyOffer(postId) {
      return POST('/data/donations', { postId });
}

export async function getOfferApplicationsCount(postId) {
      return GET(`/data/donations?where=postId%3D%22${postId}%22&distinct=_ownerId&count`)
}

export async function didUserApplyForOffer(postId, userId) {
      return GET(`/data/donations?where=postId%3D%22${postId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}