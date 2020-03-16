import { Request, Response } from 'express';
import { PetService, petService } from '../services';
import { BaseController } from './base.controller';
import { IPetModel } from '../models';

class PetController extends BaseController<IPetModel, PetService> {
  constructor() {
    super(petService);
  }
}

export const petController = new PetController();
