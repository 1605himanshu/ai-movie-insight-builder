"use client";
import { useState } from "react";
import { isValidImdbId } from "../lib/validators";

export default function MovieInput({ onSubmit }) {
  const [id, setId] = useState("");
  const [error, setError] = useState("");

  function handleClick() {
    if (!isValidImdbId(id)) {
      setError("Enter valid IMDb ID (tt1234567)");
      return;
    }
    setError("");
    onSubmit(id);
  }

  return (
    <div className="mb-8 w-full">
      <div className="flex flex-col sm:flex-row gap-3">

        <input
          className="flex-1 border border-gray-300 rounded-lg px-4 py-3 
          focus:outline-none focus:ring-2 focus:ring-indigo-500 
          transition shadow-sm"
          placeholder="Enter IMDb ID (e.g. tt3896198)"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />

        <button
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg 
          font-semibold hover:bg-indigo-700 transition duration-200 
          shadow-md"
          onClick={handleClick}
        >
          Analyze
        </button>

      </div>

      {error && (
        <p className="text-red-500 mt-2 text-sm font-medium">
          {error}
        </p>
      )}
    </div>
  );
}