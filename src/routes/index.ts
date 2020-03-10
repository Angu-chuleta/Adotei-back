import { Router } from 'express';
import { userController, petController } from '../controllers';

const routes = Router();

routes.get('/users', userController.getUsers);

// Pet routes
routes.get('/pet', petController.getAllPet);
routes.get('/pet/:id', petController.getOnePet);
routes.put('/pet/:id', petController.updatePet);
routes.delete('/pet/:id', petController.deletePet);
routes.post('/pet', petController.createPet);

//

export default routes;
