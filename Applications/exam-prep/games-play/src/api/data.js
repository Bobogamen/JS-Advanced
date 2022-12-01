import { GET, POST, DEL, PUT } from './api.js'

export async function getRecentGames() {
      return GET('/data/games?sortBy=_createdOn%20desc&distinct=category');
}

export async function getAllOffers() {
      return GET('/data/games?sortBy=_createdOn%20desc');
}

export async function addOffer(offer) {
      return POST('/data/games', offer)
}

export async function getOfferById(id) {
      return GET('/data/games/' + id)
}

export async function updateOffer(id, offer) {
      return PUT('/data/games/' + id, offer)
}

export async function deleteOffer(id) {
      return DEL('/data/games/' + id);
}


export async function getAllCommentByGameId(gameId) {
      return GET(`/data/comments?where=gameId%3D%22${gameId}%22`)
}


export async function postComment(gameId, comment) {
      return POST('/data/comments', { gameId, comment });
}