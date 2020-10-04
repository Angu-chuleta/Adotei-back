import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import routes from './routes';
import { connectDb } from './config';
import { serve, setup } from 'swagger-ui-express';
import * as fs from 'fs';
import { swaggerDocument } from './swagger';
import swaggerJSDoc, { SwaggerDefinition } from 'swagger-jsdoc';
export const app = express();
let swag;
const { NODE_ENV } = process.env;

if (NODE_ENV === 'development') {
  //   const options: SwaggerDefinition = {
  //     definition: {
  //       openapi: '3.0.0',
  //     },
  //     info: {
  //       title: 'Adotei',
  //       version: '1.0.0',
  //     },
  //     swaggerDefinition: swaggerDocument,
  //     apis: ['**/*.ts'],
  //   };
  //   fs.writeFileSync('./swagger.json', JSON.stringify(swaggerJSDoc(options)));
  swag = require('../swagger.json');
} else {
  swag = require('../../swagger.json');
}

connectDb();

app.use('/docs', serve, setup(swag));
app.use(bodyParser.json());
app.use(cors());

app.use(helmet());

app.use(routes);
