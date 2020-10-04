import { Router } from 'express';
import { transactionController } from '../controllers';
const routes = Router();

/**
 * @swagger
 *
 * /transaction:
 *   get:
 *     description: update one transaction
 *     produces:
 *       - application/jsong
 *     responses:
 *       200:
 *         description: transaction sucess
 */
routes.get('/transaction', transactionController.getAll);
/**
 * @swagger
 *
 * /transaction/:id/:
 *   get:
 *     description: update one transaction
 *     produces:
 *       - application/jsong
 *     responses:
 *       200:
 *         description: transaction sucess
 */
routes.get('/transaction/:id', transactionController.getOne);
/**
 * @swagger
 *
 * /transaction/:id/:
 *   put:
 *     description: update one transaction
 *     produces:
 *       - application/jsong
 *     responses:
 *       200:
 *         description: transaction sucess
 */
routes.put('/transaction/:id', transactionController.update);
/**
 * @swagger
 *
 * /transaction/:id:
 *   delete:
 *     description: update one transaction
 *     produces:
 *       - application/jsong
 *     responses:
 *       200:
 *         description: transaction sucess
 */
routes.delete('/transaction/:id', transactionController.delete);
/**
 * @swagger
 *
 * /transaction/:id:
 *   post:
 *     description: update one transaction
 *     produces:
 *       - application/jsong
 *     responses:
 *       200:
 *         description: transaction sucess
 */
routes.post('/transaction', transactionController.create);

export default routes;
