import { GET, POST, DEL, PUT } from './api.js'

export async function getAllShoes() {
      return GET('/data/shoes?sortBy=_createdOn%20desc');
}

export async function addShoe(shoe) {
      return POST('/data/shoes', shoe);
}

export async function getShoeById(id) {
      return GET('/data/shoes/' + id);
}

export async function deleteShoeById(id) {
      return DEL('/data/shoes/' + id);
}

export async function updateShoe(id, shoe) {
      return PUT('/data/shoes/' + id, shoe)
}

export async function searchShoes(query) {
      return GET(`/data/shoes?where=brand%20LIKE%20%22${query}%22`);
}