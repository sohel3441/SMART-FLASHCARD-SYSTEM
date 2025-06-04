import express from 'express';
import dotenv from 'dotenv';
import flashcardRoutes from './routes/flashcardRoutes.js';
import connectDB from './config/db.js';

dotenv.config();

const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

app.use('/api', flashcardRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
