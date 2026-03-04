export function isValidImdbId(id) {
  return /^tt\d{7,8}$/.test(id);
}