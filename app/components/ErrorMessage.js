export default function ErrorMessage({ message }) {
  return (
    <div className="mt-6 flex justify-center">
      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg shadow-sm max-w-lg w-full text-center">
        ⚠ {message}
      </div>
    </div>
  );
}