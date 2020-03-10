import { Router } from 'express';
import { userController, petController } from '../controllers';

const routes = Router();

routes.get('/users', userController.getUsers);

routes.get('/pet', petController.getPet);
routes.put('/pet/:id', petController.updatePet);
routes.delete('/pet/:id', petController.deletePet);
routes.post('/pet', petController.createPet);

export default routes;
