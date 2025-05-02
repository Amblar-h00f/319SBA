// Imports
import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/conn.mjs';
import seashellRoutes from './routes/seashells.mjs';
import Seashell from './models/shellSchema.mjs'; // Assuming this is the correct model
import allSeashells from './data/seashells.js'; // Import your seed data
import cors from 'cors';

// Setups
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
connectDB();

// Routes
app.use('/api/seashells', seashellRoutes);

// Seed route
app.get('/seed', async (req, res) => {
    try {
        await Seashell.create(allSeashells);
        res.send('Seeded data');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Error Middleware
app.use((err, _req, res, _next) => {
    res.status(500).json({ msg: err.message });
});

// Listener
app.listen(PORT, () => {
    console.log(`Server running on Port: ${PORT}`);
});