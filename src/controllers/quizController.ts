import { Request, Response } from 'express';
import { Quiz } from '../models/Quiz';

/**
 * Quiz page.
 * @route GET /
 */
export const index = async (req: Request, res: Response) => {
  try {
    const getQuizez = await Quiz.find({});

    return res.status(200).json(getQuizez);
  } catch (err) {
    console.log({ err });
  }
};

/**
 * Quiz page.
 * @route POST /
 */
export const create = async (req: Request, res: Response) => {
  const { title, description, questions } = req.body;

  try {
    const createQuiz = new Quiz({ title, description, questions });
    const savedQuiz = await createQuiz.save();

    return res.status(200).json(savedQuiz);
  } catch (err) {
    console.log({ err });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    console.log('🚀 ~ file: quiz.ts:39 ~ updateQuiz ~ id:');
    const { id } = req.params; // Get the ID from the request parameters
    const updatedData = req.body; // Get the updated data from the request body
    console.log(
      '🚀 ~ file: quiz.ts:40 ~ updateQuiz ~ updatedData:',
      updatedData
    );

    // Use the findByIdAndUpdate method to update the quiz with the specified ID
    const updatedQuiz = await Quiz.findByIdAndUpdate({ _id: id }, updatedData, {
      new: true, // Set this to true to return the updated quiz instead of the original one
    });

    res.status(200).json({ updatedQuiz });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const deleteQuiz = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // Get the ID from the request parameters

    // Use the findByIdAndDelete method to delete the quiz with the specified ID
    const deletedQuiz = await Quiz.findByIdAndDelete(id);

    res.status(200).json({ quiz: deletedQuiz });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};
