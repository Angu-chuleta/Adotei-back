import { UserModel, IUserModel } from '../models';
import { BaseService } from './base.service';
export class UserService extends BaseService<IUserModel> {
  constructor() {
    super(UserModel);
  }
  async addCredit(id: string, credit: number) {
    let user;
    try {
      user = await this.BaseModel.findById(id);
    } catch (error) {
      throw { message: 'Usuário inexistente' };
    }
    if (user && user.credito) {
      user.credito = user.credito + credit;
    }
    try {
      let res = await this.BaseModel.updateOne(id, user);
      return res;
    } catch (error) {
      throw error;
    }
    return;
  }
}
