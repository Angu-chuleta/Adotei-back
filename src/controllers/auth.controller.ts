import { authService, AuthService } from '../services';
import { BaseController } from './base.controller';
import { IAuthModel } from '../models';

class AuthController extends BaseController<IAuthModel, AuthService> {
  constructor() {
    super(authService, {
      // keys do req.body que serão usados no create
      create: ['username', 'password'],
      // keys do req.body que serão usados no update
      update: ['username', 'password'],
    });
  }
}

export const authController = new AuthController();
