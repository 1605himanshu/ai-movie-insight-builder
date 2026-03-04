"use client";
export default function Error({ error }) {
  return (
    <p className="text-red-600 text-center">
      Something went wrong: {error.message}
    </p>
  );
}