import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import routes from './routes';
import './database';
import uploadConfig from './config/upload';
import AppError from './errors/AppError';

const app = express();
const PORT = 3333;

app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));

app.use(routes);

app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}...`);
});
