import express, { Request, Response } from 'express';
import authRouter from './routes/authRoutes.js';
import {
  errorHandlerMiddleware,
  notFoundMiddleware,
} from './middleware/handler.js';
import { connectDB } from './db/connect.js';

import authRoutes from './routes/authRoutes.js';
import jobsRouter from './routes/jobsRoutes';

const app = express();
const port = process.env.PORT || 5000;

interface MyRequest extends Request {
  userId: string;
}

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.get('/', (req: MyRequest, res: Response) => {
  throw new Error();
  res.message = 'Hello, world!';
  res.send();
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

app.listen(port, () => {
  console.log(`Timezones by location application is running on port ${port}.`);
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL || '');
    app.listen(port, () => {
      console.log(
        `Timezones by location application is running on port ${port}.`
      );
    });
  } catch (error) {
    console.error(error);
  }
};

start();
