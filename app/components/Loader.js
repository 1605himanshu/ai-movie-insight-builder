export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center mt-6 gap-3">

      {/* Spinner */}
      <div className="w-10 h-10 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>

      {/* Text */}
      <p className="text-gray-600 font-medium">
        Analyzing movie insights...
      </p>

    </div>
  );
}