import { Router } from 'express';
import {
  authController,
  userController,
  petController,
  instituitionController,
  transactionController,
  pingController,
} from '../controllers';

const routes = Router();

routes.get('/pet', petController.getAll);
routes.get('/pet/:id', petController.getOne);
routes.put('/pet/:id', petController.update);
routes.delete('/pet/:id', petController.delete);
routes.post('/pet', petController.create);

// Instituition routes
routes.get('/instituition', instituitionController.getAll);
routes.get('/instituition/:id', instituitionController.getOne);
routes.put('/instituition/:id', instituitionController.update);
routes.delete('/instituition/:id', instituitionController.delete);
routes.post('/instituition', instituitionController.create);

// user Routes
routes.get('/user', userController.getAll);
routes.get('/user/:id', userController.getOne);
routes.put('/user/:id', userController.update);
routes.delete('/user/:id', userController.delete);
routes.post('/user', userController.create);

// transaction Routes
routes.get('/transaction', transactionController.getAll);
routes.get('/transaction/:id', transactionController.getOne);
routes.put('/transaction/:id', transactionController.update);
routes.delete('/transaction/:id', transactionController.delete);
routes.post('/transaction', transactionController.create);

// auth Routes
routes.get('/auth', authController.getAll);
routes.get('/auth/:id', authController.getOne);
routes.put('/auth/:id', authController.update);
routes.delete('/auth/:id', authController.delete);
routes.post('/auth', authController.create);

// ping route
routes.get('/', pingController.ping);
// error route
routes.get('/*', pingController.error);

export default routes;
