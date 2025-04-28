import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const connectionStr = process.env.mongoURI || 'mongodb://localhost:27017/ShellySells';

async function connectDB() {
    try {
        await mongoose.connect(connectionStr);

console.log('MongoDB Connected')
    }catch (error) {
        console.error(err);
    }
}
export default connectDB;

