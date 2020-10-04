import { authService, AuthService } from '../services';
import { BaseController } from './base.controller';
import { IAuthModel } from '../models';
import { Request, Response } from 'express';

class AuthController extends BaseController<IAuthModel, AuthService> {
  constructor() {
    super(authService, {
      // keys do req.body que serão usados no create
      create: ['username', 'password'],
      // keys do req.body que serão usados no update
      update: ['username', 'password'],
    });
  }
  login = async (req: Request, res: Response) => {
    try {
      let { username, password } = req.body;

      let token = authService.login(username, password);
      res.send(token);
    } catch (error) {
      res.status(400).json(error);
    }
  };
  changePassword = async () => {};

  newUser = async (req: Request, res: Response) => {
    //Get parameters from the body
    const username = req.params.username;
    const password = req.params.password;
    if (username !== null && password !== null) {
      let user = authService.newUser(username, password);
      res.send(user);
    }
    res.send(400);
  };
}
export const authController = new AuthController();
