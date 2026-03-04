import { fetchMovieById } from "../../lib/omdb";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return new Response(
      JSON.stringify({ error: "IMDb ID is required" }),
      { status: 400 }
    );
  }

  try {
    const movie = await fetchMovieById(id);
    return Response.json(movie);
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 500 }
    );
  }
}