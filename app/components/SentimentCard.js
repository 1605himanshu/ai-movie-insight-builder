export default function SentimentCard({ data }) {
  return (
    <div className="mt-8 p-6 rounded-xl shadow-lg border border-gray-100 bg-gradient-to-r from-indigo-50 to-purple-50">

      <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-3">
        🧠 AI Audience Insight
      </h3>

      <p className="text-gray-700 leading-relaxed">
        {data.summary}
      </p>

      <span className="inline-block mt-4 px-4 py-1.5 rounded-full text-sm font-medium bg-indigo-600 text-white shadow">
        {data.sentiment}
      </span>

    </div>
  );
}