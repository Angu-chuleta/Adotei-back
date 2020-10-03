import { AuthModel, IAuthModel } from '../models';
import { BaseService } from './base.service';
export class AuthService extends BaseService<IAuthModel> {
  constructor() {
    super(AuthModel);
  }
}
