"use client";
import { useState } from "react";

import MovieInput from "./components/MovieInput";
import MovieDetails from "./components/MovieDetails";
import SentimentCard from "./components/SentimentCard";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";

export default function Home() {
  const [data, setData] = useState(null);
  const [sentiment, setSentiment] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function analyzeMovie(imdbId) {
    try {
      setLoading(true);
      setError("");
      setData(null);
      setSentiment(null);

      const movieRes = await fetch(`/api/movie?id=${imdbId}`);
      const movie = await movieRes.json();
      if (movie.error) throw new Error(movie.error);

      const reviewRes = await fetch("/api/reviews");
      const { reviews } = await reviewRes.json();

      const sentimentRes = await fetch("/api/sentiment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reviews }),
      });
      const sentimentData = await sentimentRes.json();

      setData(movie);
      setSentiment(sentimentData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-start justify-center p-6">

      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-8">

        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-2">
          🎬 AI Movie Insight Builder
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Enter an IMDb ID to explore movie details and AI-powered audience insights
        </p>

        <MovieInput onSubmit={analyzeMovie} />

        {loading && <Loader />}
        {error && <ErrorMessage message={error} />}
        {data && <MovieDetails movie={data} />}
        {sentiment && <SentimentCard data={sentiment} />}

      </div>
    </main>
  );
}