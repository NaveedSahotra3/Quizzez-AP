import mongoose, { Document, Types } from 'mongoose';

interface QuestionOptions {
  option: string;
}

interface Question {
  question: string;
  answer: string;
  mandatory: boolean;
  options: QuestionOptions[];
}

export interface QuizDocument extends Document {
  _id: Types.ObjectId;
  title: string;
  description: string;
  questions: [Question];
  createdAt: Date;
  updatedAt: Date;
}

const optionsSchema = new mongoose.Schema({
  option: { type: String },
});

const questionsSchema = new mongoose.Schema({
  question: { type: String },
  answer: { type: String },
  mandatory: { type: Boolean },
  options: [optionsSchema],
});

const quizSchema = new mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    questions: [questionsSchema],
  },
  { timestamps: true }
);

export const Quiz = mongoose.model<QuizDocument>('Quiz', quizSchema);
