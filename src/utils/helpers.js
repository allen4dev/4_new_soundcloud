function normalizeQuery(search) {
  return search.replace('q=?', '').toLowerCase();
}

export default { normalizeQuery };
