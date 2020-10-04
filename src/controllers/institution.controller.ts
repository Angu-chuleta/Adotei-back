import { institutionService, InstitutionService } from '../services';
import { BaseController } from './base.controller';
import { IInstitutionModel } from '../models';

class InstitutionController extends BaseController<
  IInstitutionModel,
  InstitutionService
> {
  constructor() {
    super(institutionService, {
      // keys do req.body que serão usados no create
      create: [
        'name',
        'foto',
        'email',
        'telefone',
        'sobre',
        'credito',
        'valido',
        'termo',
        'pets',
        'endereco',
        'uf',
        'cidade',
        'bairro',
      ],
      // keys do req.body que serão usados no update
      update: [
        'name',
        'foto',
        'email',
        'telefone',
        'sobre',
        'credito',
        'valido',
        'termo',
        'pets',
        'endereco',
        'uf',
        'cidade',
        'bairro',
      ],
    });
  }
}

export const institutionController = new InstitutionController();
