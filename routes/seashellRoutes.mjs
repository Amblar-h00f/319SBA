import express from 'express';
import Shell from '../models/seashellModel.mjs';

const router = express.Router();

/// create a new seashell
router.post('/', async (req, res) => {
    try { 
        const newShell = await Shell.create(req.body);
        res.status(201).json(newShell);
    } catch (error) {
        res.status(400).json({
            error: error.message,
            validationErrors: error.errors
        })
    }
});
    const newShell = await Shell.create(req.body);

    //return results
    res.json(newShell);


}

//read
router.get('/', async (req, res) => {
    const allShell = await Shell.find({});

    //return results
    res.json(allShell);
});

//Update
router.put('/:id', async (req, res) => {

    const editShell = await Shell.findByIDandUpdate
    (req.params.id, req.body, { new: true, });
});

if (!editShell) res.status(400).json({ msg: 'Shell not found' });

res.json(editShell);

//delete

router.delete('/:id', async (req, res) => { 
    //Specify Action
    const deleteShell = await Shell.findByIdAndDelete(req.params.id);

    if (!deleteShell) res.status(400).json({ msg: 'Shell not found'});

    res.json(deleteShell);
});


export default router;


