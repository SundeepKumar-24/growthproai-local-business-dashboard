// src/App.jsx
import { useState } from 'react';
import BusinessForm from './components/BusinessForm';
import BusinessCard from './components/BusinessCard';

function App() {
  const [businessData, setBusinessData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchBusinessData = async (formData) => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/business-data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      setBusinessData({ ...formData, ...data });
    } catch (err) {
      alert('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  const regenerateHeadline = async () => {
    const { name, location } = businessData;
    const res = await fetch(`http://localhost:5000/regenerate-headline?name=${name}&location=${location}`);
    const data = await res.json();
    setBusinessData((prev) => ({ ...prev, headline: data.headline }));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <BusinessForm onSubmit={fetchBusinessData} />
        {loading && <p className="text-center mt-4">Loading...</p>}
        {businessData && <BusinessCard data={businessData} onRegenerate={regenerateHeadline} />}
      </div>
    </div>
  );
}

export default App;
