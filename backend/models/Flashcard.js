import mongoose from 'mongoose';

const flashcardSchema = new mongoose.Schema({
  student_id: { type: String, required: true },
  question: { type: String, required: true },
  answer: { type: String, required: true },
  subject: { type: String, required: true }
});

const Flashcard = mongoose.model('Flashcard', flashcardSchema);

export default Flashcard;