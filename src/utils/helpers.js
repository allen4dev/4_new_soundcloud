function normalizeQuery(search) {
  // Refactor: Use regex
  console.log(search);
  const normalized = search.replace('?q=', '');
  return normalized.toLowerCase();
}

export default { normalizeQuery };
