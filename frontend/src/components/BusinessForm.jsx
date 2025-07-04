// src/components/BusinessForm.jsx
import { useState } from 'react';

function BusinessForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !location) return alert('Please fill in all fields');
    onSubmit({ name, location });
  };

  return (
    <form
  onSubmit={handleSubmit}
  className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl shadow-2xl space-y-6 border border-blue-200 animate-fade-in"
>
  <h2 className="text-3xl font-extrabold text-center text-indigo-800 drop-shadow-sm">
    🚀 Local Business Dashboard
  </h2>

  {/* Business Name Input */}
  <div>
    <label htmlFor="name" className="block mb-1 text-sm font-semibold text-indigo-700">
      Business Name
    </label>
    <input
      id="name"
      type="text"
      placeholder="e.g. Cake & Co"
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="w-full px-4 py-3 border border-indigo-300 rounded-xl text-indigo-800 bg-white placeholder-indigo-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
      required
    />
  </div>

  {/* Location Input */}
  <div>
    <label htmlFor="location" className="block mb-1 text-sm font-semibold text-indigo-700">
      Location
    </label>
    <input
      id="location"
      type="text"
      placeholder="e.g. Mumbai"
      value={location}
      onChange={(e) => setLocation(e.target.value)}
      className="w-full px-4 py-3 border border-indigo-300 rounded-xl text-indigo-800 bg-white placeholder-indigo-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
      required
    />
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="w-full py-3 bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white font-bold rounded-xl shadow-md transition duration-300"
  >
    🎯 Get Business Insights
  </button>
</form>

  );
}

export default BusinessForm;