const userSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: true,
        unique: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            'Invalid email']
    }
}, {timestamps: true});

