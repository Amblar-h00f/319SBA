import express from 'express';
import User from '../models/userSchema.mjs';

const router = express.Router();

// Seed data for Users
router.post('/seed-users', async (req, res) => {
    const sampleUsers = [
        { email: 'user1@example.com', age: 25 },
        { email: 'user2@example.com', age: 30 }
    ];
    try {
        await User.insertMany(sampleUsers);
        res.status(201).json({ message: 'Users seeded successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Test invalid user creation
router.post('/test-invalid-user', async (req, res) => {
    const invalidUser = new User({ age: 10 }); // Missing email
    try {
        await invalidUser.save();
    } catch (err) {
        res.status(400).json({
            validationError: err.errors?.email?.message || 'Validation error occurred'
        });
    }
});

export default router;