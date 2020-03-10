import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import routes from './routes';
import { connectDb } from './config';

const app = express();
const PORT = process.env.PORT || 3000;

connectDb();

app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(routes);

app.listen(PORT, () => console.log(`ouvindo na porta ${PORT}`));
