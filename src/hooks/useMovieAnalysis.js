"use client";
import { useState } from "react";

export default function useMovieAnalysis() {
  const [movie, setMovie] = useState(null);
  const [sentiment, setSentiment] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function analyzeMovie(imdbId) {
    try {
      setLoading(true);
      setError("");
      setMovie(null);
      setSentiment(null);

      // Fetch movie
      const movieRes = await fetch(`/api/movie?id=${imdbId}`);
      const movieData = await movieRes.json();
      if (movieData.error) throw new Error(movieData.error);

      // Fetch reviews
      const reviewRes = await fetch("/api/reviews");
      const { reviews } = await reviewRes.json();

      // Fetch sentiment
      const sentimentRes = await fetch("/api/sentiment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reviews }),
      });
      const sentimentData = await sentimentRes.json();

      setMovie(movieData);
      setSentiment(sentimentData);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return {
    movie,
    sentiment,
    loading,
    error,
    analyzeMovie,
  };
}