import mongoose from 'mongoose';

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
        unique: true,
        validate: {
            validator: (v) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v),
            message: (props) => `${props.value} is not a valid email address!`
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
}, { timestamps: true });

userSchema.post('save', function(doc) {
    console.log('User saved:', doc);
});

userSchema.post('validate', function(doc) {
    console.log('User validated:', doc);
});

export default mongoose.model('User', userSchema);