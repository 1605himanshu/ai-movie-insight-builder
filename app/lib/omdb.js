import axios from "axios";

export async function fetchMovieById(id) {
  const res = await axios.get(
    `https://www.omdbapi.com/?i=${id}&apikey=${process.env.OMDB_API_KEY}`
  );

  if (res.data.Response === "False") {
    throw new Error(res.data.Error);
  }

  return res.data;
}