import Flashcard from '../models/Flashcard.js';
import { inferSubject } from '../utils/subjectClassifier.js';

export const addFlashcard = async (req, res) => {
  try {
    const { student_id, question, answer } = req.body;
    const subject = inferSubject(question + ' ' + answer);

    const newCard = new Flashcard({ student_id, question, answer, subject });
    await newCard.save();

    res.json({ message: 'Flashcard added successfully', subject });
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};

export const getFlashcards = async (req, res) => {
  try {
    const { student_id, limit = 5 } = req.query;

    const cards = await Flashcard.find({ student_id });
    const subjectsSeen = new Set();
    const result = [];

    for (const card of cards.sort(() => 0.5 - Math.random())) {
      if (!subjectsSeen.has(card.subject)) {
        subjectsSeen.add(card.subject);
        result.push(card);
      }
      if (result.length >= limit) break;
    }

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};
