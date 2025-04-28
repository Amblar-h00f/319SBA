//Imports
import express from 'express';
import dotenv from 'dotenv';


//Setups
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

//Middlewares

//Routes

//Err Middlewares

//Listener
app.listen(PORT, () => {
    console.log(`Server running on Port: ${PORT}`);

});
