import 'reflect-metadata';
import express from 'express';
import routes from './routes';
import './database';
import uploadConfig from './config/upload';

const app = express();
app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
const PORT = 3333;

app.use(routes);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}...`);
});
