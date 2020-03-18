import { Request, Response } from 'express';
import { institutionService, InstitutionService } from '../services';
import { BaseController } from './base.controller';
import { IInstituitionModel } from '../models';

class InstituitionController extends BaseController<
  IInstituitionModel,
  InstitutionService
  > {
  constructor() {
    super(institutionService, {
      // keys do req.body que serão usados no create
      create: ['name', 'foto', 'email', 'telefone', 'sobre', 'credito', 'valido', 'termo', 'pets'],
      // keys do req.body que serão usados no update
      update: ['name', 'foto', 'email', 'telefone', 'sobre', 'credito', 'valido', 'termo', 'pets']
    });
  }
}

export const instituitionController = new InstituitionController();
