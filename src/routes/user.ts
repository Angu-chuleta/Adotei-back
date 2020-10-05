import { Router } from 'express';
import { checkJwt } from '../middlewares/auth.middleware';
import { userController } from '../controllers';
const routes = Router();

/**
 * @swagger
 *
 * /user:
 *   get:
 *     description: get a user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: username
 *         description: Username to use for login.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         description: User's password.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: login
 */
routes.get('/user', [checkJwt], userController.getAll);
/**
 * @swagger
 *
 * /user/:id:
 *   get:
 *     description: user
 *     produces:
 *       - application/jsong
 *     responses:
 *       200:
 *         description: user
 */
routes.get('/user/:id', [checkJwt], userController.getOne);
export default routes;
