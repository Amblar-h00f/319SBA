import express from 'express';
import Shell from '../models/seashellModel.mjs';

const router = express.Router();

// Create a new seashell
router.post('/', async (req, res) => {
    try { 
        const newShell = await Shell.create(req.body);
        res.status(201).json(newShell);
    } catch (error) {
        res.status(400).json({
            error: error.message,
            validationErrors: error.errors
        });
    }
});

// Read all seashells
router.get('/', async (req, res) => {
    try {
        const allShell = await Shell.find({});
        res.json(allShell);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a seashell
router.put('/:id', async (req, res) => {
    try {
        const editShell = await Shell.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!editShell) {
            return res.status(404).json({ msg: 'Shell not found' });
        }

        res.json(editShell);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a seashell
router.delete('/:id', async (req, res) => {
    try {
        const deleteShell = await Shell.findByIdAndDelete(req.params.id);

        if (!deleteShell) {
            return res.status(404).json({ msg: 'Shell not found' });
        }

        res.json(deleteShell);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
