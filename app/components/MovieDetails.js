export default function MovieDetails({ movie }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow mt-6">
      {/* Top Section */}
      <div className="flex gap-6">
        {/* Poster */}
        {movie.Poster && movie.Poster !== "N/A" && (
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-48 rounded-md shadow"
          />
        )}

        {/* Basic Info */}
        <div>
          <h2 className="text-3xl font-bold">{movie.Title}</h2>

          <p className="text-sm text-gray-600 mt-1">
            {movie.Year} • {movie.Rated} • {movie.Runtime}
          </p>

          <p className="text-sm text-gray-600 mt-1">
            ⭐ IMDb {movie.imdbRating} ({movie.imdbVotes} votes)
          </p>

          <p className="mt-4 text-gray-800 leading-relaxed">
            {movie.Plot}
          </p>
        </div>
      </div>

      {/* Detailed Metadata */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>Released:</strong> {movie.Released}</p>
        <p><strong>Director:</strong> {movie.Director}</p>
        <p><strong>Writer:</strong> {movie.Writer}</p>
        <p><strong>Actors:</strong> {movie.Actors}</p>
        <p><strong>Language:</strong> {movie.Language}</p>
        <p><strong>Country:</strong> {movie.Country}</p>
        <p><strong>Awards:</strong> {movie.Awards}</p>
        <p><strong>Box Office:</strong> {movie.BoxOffice}</p>
        <p><strong>Metascore:</strong> {movie.Metascore}</p>
        <p><strong>Production:</strong> {movie.Production}</p>
        <p><strong>Type:</strong> {movie.Type}</p>
      </div>

      {/* Ratings Breakdown */}
      {movie.Ratings && movie.Ratings.length > 0 && (
        <div className="mt-6">
          <h3 className="font-bold mb-2">Ratings</h3>
          <ul className="list-disc list-inside text-sm">
            {movie.Ratings.map((rating) => (
              <li key={rating.Source}>
                {rating.Source}: {rating.Value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}