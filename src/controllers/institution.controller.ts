import { Request, Response } from 'express';
import { institutionService, InstitutionService } from '../services';
import { BaseController } from './base.controller';
import { IInstituitionModel } from '../models';

class InstituitionController extends BaseController<
  IInstituitionModel,
  InstitutionService
> {
  constructor() {
    super(institutionService);
  }
}

export const instituitionController = new InstituitionController();
