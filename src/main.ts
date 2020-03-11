import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import routes from './routes';
import { connectDb } from './config';

export const app = express();

connectDb();

app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(routes);
