import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import quizRoutes from './routes/quizRoutes';

dotenv.config();

const app: Application = express();

// Express configuration || Middleware
app.set('port', process.env.PORT || 5000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/quiz', quizRoutes);

app.get('/', (req: Request, res: Response) => {
  return res.send('Server is running...');
});

export default app;
