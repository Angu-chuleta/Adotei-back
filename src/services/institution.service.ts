import { BaseService } from './base.service';
import { InstituitionModel, IInstituitionModel } from '../models';

export class InstitutionService extends BaseService<IInstituitionModel> {
  constructor() {
    super(InstituitionModel);
  }
}
