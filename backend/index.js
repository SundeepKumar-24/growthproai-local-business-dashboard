const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

const headlines = require('./headlines');

app.use(cors());
app.use(express.json());

app.post('/business-data', (req, res) => {
  const { name, location } = req.body;
  if (!name || !location) return res.status(400).json({ error: 'Missing fields' });

  const rating = (Math.random() * 1 + 3.5).toFixed(1);
  const reviews = Math.floor(Math.random() * 200 + 50);
  const headline = headlines[0].replace('{name}', name).replace('{location}', location);

  res.json({ rating: Number(rating), reviews, headline });
});

app.get('/regenerate-headline', (req, res) => {
  const { name, location } = req.query;
  if (!name || !location) return res.status(400).json({ error: 'Missing params' });

  const randomHeadline = headlines[Math.floor(Math.random() * headlines.length)]
    .replace('{name}', name)
    .replace('{location}', location);

  res.json({ headline: randomHeadline });
});

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
