import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const connectionStr = process.env.mongoURI || 'mongodb://localhost:27017/ShellySells';
console.log('Connection String:', connectionStr);

async function connectDB() {
    try {
        mongoose.set('debug', true);
        await mongoose.connect(connectionStr, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected');
    } catch (error) {
        console.error('MongoDB Connection Error:', error.message);
    }
}

export default connectDB; 