import { Router } from 'express';
import {
  userController,
  petController,
  instituitionController,
} from '../controllers';

const routes = Router();

routes.get('/users', userController.getAll);

// Pet routes
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

export default routes;
