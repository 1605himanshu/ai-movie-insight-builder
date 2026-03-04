export default function CastList({ cast }) {
  return (
    <div className="mt-4 p-4 bg-gray-50 border border-gray-200 rounded-lg">
      <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
        🎭 Cast
      </h4>

      <p className="text-gray-700 leading-relaxed">
        {cast}
      </p>
    </div>
  );
}