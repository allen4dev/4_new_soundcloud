function normalizeQuery(search) {
  // Refactor: Use regex
  console.log(search);
  const normalized = search.replace('?q=', '');
  return normalized.toLowerCase();
}

function cropImage(url) {
  if (!url) return null;

  const newUrl = url.replace('-large', '-t500x500');
  return newUrl;
}

function cropArtwork(item) {
  return {
    ...item,
    artwork_url: cropImage(item.artwork_url),
    user: {
      ...item.user,
      avatar_url: cropImage(item.user.avatar_url),
    },
  };
}

function cropAvatar(user) {
  return {
    ...user,
    avatar_url: cropImage(user.avatar_url),
  };
}

export default { cropImage, normalizeQuery, cropArtwork, cropAvatar };
