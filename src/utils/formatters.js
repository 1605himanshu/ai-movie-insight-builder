export function formatRating(rating) {
  return rating ? `⭐ ${rating}/10` : "Rating not available";
}

export function formatYear(year) {
  return year ? `Released: ${year}` : "Year unknown";
}