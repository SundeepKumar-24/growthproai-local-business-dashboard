// src/components/BusinessCard.jsx
function BusinessCard({ data, onRegenerate }) {
  return (
    <div className="bg-white mt-6 p-6 rounded-2xl shadow-md space-y-4 text-center">
      <h3 className="text-xl font-bold text-gray-800">{data.name} – {data.location}</h3>
      <p className="text-yellow-500 text-lg">⭐ {data.rating} / 5</p>
      <p className="text-gray-600">{data.reviews} Reviews</p>
      <p className="italic text-gray-700">“{data.headline}”</p>
      <button
        onClick={onRegenerate}
        className="mt-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
      >
        🔁 Regenerate SEO Headline
      </button>
    </div>
  );
}

export default BusinessCard;
