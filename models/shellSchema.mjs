import mongoose from 'mongoose';

const shellSchema = new mongoose. Schema({

    name: {
        type: String,
        required: true,
    },
    scientific_name: {
        type: String,
        required: true,
    },
    location_found: {
        typer: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    habitat: {
        type: String,
        required: true,
    }
});

export default mongoose.model('Shell', shellSchema);