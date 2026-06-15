//init ports and making them run at 3000

const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// logging middleware
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Server-side data
let crops = [];
let totalYield = 0;

// ── GET routes ──
app.get('/api/crops', (req, res) => {
    res.json(crops);
});

app.get('/api/yield', (req, res) => {
    res.json({ totalYield });
});

// ── POST routes ──
app.post('/api/crops', (req, res) => {
    const { name, growth } = req.body;
    if (!name || !growth) {
        return res.status(400).json({ error: 'Name and growth time are required.' });
    }
    const newCrop = { id: Date.now(), name, growth };
    crops.push(newCrop);
    res.status(201).json(newCrop);
});

app.post('/api/yield', (req, res) => {
    const { amount } = req.body;
    if (!amount || isNaN(amount) || amount < 0) {
        return res.status(400).json({ error: 'Valid yield amount required.' });
    }
    totalYield += parseFloat(amount);
    res.json({ totalYield });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});