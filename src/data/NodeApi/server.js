import express from 'express';
const app = express();

import cors from 'cors';
app.use(cors());

import { config } from 'dotenv';
const port = process.env.PORT

app.use(express.json());

import connectDB from './database.js';
connectDB();

import userRoutes from './src/routes/userRoutes.js';
app.use('/user', userRoutes);

import postRoutes from './src/routes/postRoutes.js';
app.use('/post', postRoutes);

app.listen(port, () => {
    console.log(`link: http://localhost:${port}/`);
})

