import { Request, Response } from 'express';
import { PetService, petService } from '../services';
import { BaseController } from './base.controller';
import { IPetModel } from '../models';

class PetController extends BaseController<IPetModel, PetService> {
  constructor() {
    super(petService, {
      // keys do req.body que serão usados no create
      create: ['name', 'foto', 'porte', 'sobre', 'idade', 'foiAdotado'],
      // keys do req.body que serão usados no update
      update: ['name', 'foto', 'porte', 'sobre', 'idade', 'foiAdotado']
    });
  }
}

export const petController = new PetController();
