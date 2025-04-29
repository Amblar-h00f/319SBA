//Imports
import express from 'express';
import dotenv from 'dotenv';
import connectDB from'./db/conn.mjs';
import seashellRoutes from './routes/seashells.mjs';
import shellSchema from './models/shellSchema.mjs';
import cors from 'cors';


//Setups
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

//Middlewares
app.use(express.json());
connectDB();

//Routes
app.use('/api/seashells', seashellRoutes);

// seed route
app.get('/seed', async (req, res) => {

    await Seashell.create(allSeashells);

    res.send('seeded data');
});

app.use(express.json());
app.use(cors());


//Err Middlewares

app.use((err, _req, res, next) => {
    res.status(500).json({ msg: err.message });
  });

//Listener
app.listen(PORT, () => {
    console.log(`Server running on Port: ${PORT}`);

});
