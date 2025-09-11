import express from 'express';
import cookieParser from 'cookie-parser';

import { PORT } from './config/env.js';

import authRouter from './routes/auth.routes.js';
import userRouter from './routes/user.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';
import connectToDatabase from './database/mongodb.js';
import errorMiddleware from './middlewares/error.middleware.js';

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())

// Routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);

// Error Middleware
app.use(errorMiddleware)

app.get('/', (req, res) => {
  res.send('Welcome to the Subscription tracker API!');
});

// Start the server
const start = async () => {
  await connectToDatabase();

  app.listen(PORT, () => {
    console.log(`Subscription tracker API is running on http://localhost:${PORT}`);
  });
};

start();

export default app;
