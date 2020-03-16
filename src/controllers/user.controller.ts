import { Request, Response } from 'express';
import { userService, UserService } from '../services';
import { BaseController } from './base.controller';
import { IUserModel } from '../models';

class UserController extends BaseController<IUserModel, UserService> {
  constructor() {
    super(userService);
  }
}

export const userController = new UserController();
