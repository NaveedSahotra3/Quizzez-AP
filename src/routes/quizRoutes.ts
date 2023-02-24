import express from 'express';
import * as quizController from '../controllers/quizController';

const router = express.Router();

// Routes
router.route('/').get(quizController.index);
router.post('/create', quizController.create);
router.put('/update/:id', quizController.update);
router.delete('/delete/:id', quizController.deleteQuiz);

export default router;
