import helpers from './helpers';

const baseURL = 'https://api.soundcloud.com';
const CLIENT_ID = process.env.REACT_APP_SC_CLIENT_ID;

const api = {
  tracks: {
    async getSingle(id) {
      const url = `${baseURL}/tracks/${id}?client_id=${CLIENT_ID}`;

      const response = await fetch(url);
      const track = await response.json();

      return helpers.cropArtwork(track);
    },

    async searchByTerm(term, limit = 24) {
      const url = `${baseURL}/tracks?q=${term}&limit=${limit}&linked_partitioning=1&client_id=${CLIENT_ID}`;
      const response = await fetch(url);
      const results = await response.json();

      results.collection = results.collection.map(helpers.cropArtwork);

      return results;
    },

    async getNextPage(nextPage) {
      const response = await fetch(nextPage);
      const results = await response.json();

      results.collection = results.collection.map(helpers.cropArtwork);

      return results;
    },

    async getComments(id, limit = 24) {
      const url = `${baseURL}/tracks/${id}/comments?&limit=${limit}&linked_partitioning=1&client_id=${CLIENT_ID}`;
      const response = await fetch(url);
      const results = await response.json();

      return results;
    },

    async getFavoriters(id) {
      const url = `${baseURL}/tracks/${id}/favoriters?limit=10&client_id=${CLIENT_ID}`;
      const response = await fetch(url);
      const results = await response.json();

      results.collection = results.collection.map(helpers.cropArtwork);

      return results;
    },

    // tags, genres
  },

  playlists: {
    async getSingle(id) {
      const url = `${baseURL}/playlists/${id}?representation=compact&client_id=${CLIENT_ID}`;

      const response = await fetch(url);
      const result = await response.json();

      return helpers.cropArtwork(result);
    },

    async searchByTerm(term, limit = 12) {
      const url = `${baseURL}/playlists?q=${term}&limit=${limit}&representation=compact&linked_partitioning=1&client_id=${CLIENT_ID}`;
      const response = await fetch(url);
      const results = await response.json();

      results.collection = results.collection.map(helpers.cropArtwork);

      return results;
    },

    async getNextPage(nextPage) {
      const response = await fetch(nextPage);
      const results = await response.json();

      results.collection = results.collection.map(helpers.cropArtwork);

      return results;
    },

    async getTracks(id, limit = 24) {
      const url = `${baseURL}/playlists/${id}/tracks?limit=${limit}&linked_partitioning=1&client_id=${CLIENT_ID}`;
      const response = await fetch(url);
      const results = await response.json();

      results.collection = results.collection.map(helpers.cropArtwork);

      return results;
    },
  },

  users: {
    async getSingle(id) {
      const url = `${baseURL}/users/${id}?client_id=${CLIENT_ID}`;

      const response = await fetch(url);
      const user = await response.json();

      return helpers.cropAvatar(user);
    },

    async searchByTerm(term, limit = 24) {
      const url = `${baseURL}/users?q=${term}&limit=${limit}&linked_partitioning=1&client_id=${CLIENT_ID}`;
      const response = await fetch(url);
      const results = await response.json();

      results.collection = results.collection.map(helpers.cropAvatar);

      return results;
    },

    async getNextPage(nextPage) {
      const response = await fetch(nextPage);
      const results = await response.json();

      results.collection = results.collection.map(helpers.cropAvatar);

      return results;
    },

    async getTracks(id, limit = 24) {
      const url = `${baseURL}/users/${id}/tracks?limit=${limit}&linked_partitioning=1&client_id=${CLIENT_ID}`;
      const response = await fetch(url);
      const results = await response.json();

      results.collection = results.collection.map(helpers.cropArtwork);

      return results;
    },

    async getPlaylists(id, limit = 24) {
      const url = `${baseURL}/users/${id}/playlists?limit=${limit}&linked_partitioning=1&client_id=${CLIENT_ID}`;
      const response = await fetch(url);
      const results = await response.json();

      results.collection = results.collection.map(helpers.cropArtwork);

      return results;
    },

    async getFollowings(id, limit = 24) {
      const url = `${baseURL}/users/${id}/followings?limit=${limit}&linked_partitioning=1&client_id=${CLIENT_ID}`;
      const response = await fetch(url);
      const results = await response.json();

      results.collection = results.collection.map(helpers.cropAvatar);

      return results;
    },

    async getFollowers(id, limit = 24) {
      const url = `${baseURL}/users/${id}/followers?limit=${limit}&linked_partitioning=1&client_id=${CLIENT_ID}`;
      const response = await fetch(url);
      const results = await response.json();

      results.collection = results.collection.map(helpers.cropAvatar);

      return results;
    },

    async getFavoritesTracks(id, limit = 24) {
      const url = `${baseURL}/users/${id}/favorites?limit=${limit}&linked_partitioning=1&client_id=${CLIENT_ID}`;
      const response = await fetch(url);
      const results = await response.json();

      results.collection = results.collection.map(helpers.cropArtwork);

      return results;
    },
  },
};

export default api;
