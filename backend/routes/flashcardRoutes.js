import express from 'express';
import { addFlashcard, getFlashcards } from '../controllers/flashcardController.js';

const router = express.Router();

router.post('/flashcard', addFlashcard);
router.get('/get-subject', getFlashcards);

export default router;
