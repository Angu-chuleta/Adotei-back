import { Router } from 'express';
import { authController } from '../controllers/';
import { checkJwt } from '../middlewares/auth.middleware';

const router = Router();

/**
 * @swagger
 *
 * definitions:
 *   NewUser:
 *     type: object
 *     required:
 *       - username
 *       - password
 *     properties:
 *       username:
 *         type: string
 *       password:
 *         type: string
 *         format: password
 *   User:
 *     allOf:
 *       - $ref: '#/definitions/NewUser'
 *       - required:
 *         - id
 *       - properties:
 *         id:
 *           type: integer
 *           format: int64
 */

/**
 * @swagger
 *
 * /login:
 *   post:
 *     description: login
 *     produces:
 *       - application/jsong
 *     responses:
 *       200:
 *          description: users
 *          schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/User'
 */
router.post('/login', authController.getOne);

/**
 * @swagger
 *
 * /change-password:
 *   post:
 *     description: change the password
 *     produces:
 *       - application/jsong
 *     responses:
 *       200:
 *         description:  sucess
 */
router.post('/change-password', [checkJwt], authController.changePassword);

export default router;
