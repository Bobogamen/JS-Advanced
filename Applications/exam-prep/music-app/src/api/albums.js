import { get, post, del, put } from "./api.js";

export async function getAllAlbums() {
    return get('/data/albums?sortBy=_createdOn%20desc&distinct=name');
}

export async function createAlbum(album) {
    return post('/data/albums', album)
}

export async function getAlbumById(id) {
    return get('/data/albums/' + id);
}

export async function updateAlbum(id, album) {
    return put('/data/albums/' + id, album)
}

export async function deleteAlbum(id) {
    return del('/data/albums/' + id)
}

export async function findAlbum(query) {
    return get(`/data/albums?where=name%20LIKE%20%22${query}%22`)
}

