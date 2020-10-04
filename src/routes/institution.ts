import { Router } from 'express';
import { institutionController } from '../controllers';
const routes = Router();

// institution routes

/**
 * @swagger
 *
 * /institution:
 *   get:
 *     description: institution
 *     produces:
 *       - application/jsong
 *     responses:
 *       200:
 *         description: get all institutions
 */
routes.get('/institution', institutionController.getAll);
/**
 * @swagger
 *
 * /institution/:id:
 *   get:
 *     description: institution
 *     produces:
 *       - application/jsong
 *     responses:
 *       200:
 *         description: get one institution by id
 */
routes.get('/institution/:id', institutionController.getOne);
/**
 * @swagger
 *
 * /institution/:id:
 *   put:
 *     description: update one institution
 *     produces:
 *       - application/jsong
 *     responses:
 *       200:
 *         description: institution sucess
 */
routes.put('/institution/:id', institutionController.update);
/**
 * @swagger
 *
 * /institution/:id:
 *   delete:
 *     description: ping
 *     produces:
 *       - application/jsong
 *     responses:
 *       200:
 *         description: ping
 */
routes.delete('/institution/:id', institutionController.delete);
/**
 * @swagger
 *
 * /institution:
 *   post:
 *     description: institution
 *     produces:
 *       - application/jsong
 *     responses:
 *       200:
 *         description: institution
 */
routes.post('/institution', institutionController.create);

export default routes;
