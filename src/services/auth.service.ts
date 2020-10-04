import { AuthModel, IAuthModel } from '../models';
import { BaseService } from './base.service';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { authConfig } from '../config';
export class AuthService extends BaseService<IAuthModel> {
  constructor() {
    super(AuthModel);
  }

  async login(username: string, password: string) {
    try {
      const user = await this.BaseModel.findOne({ username: username }).exec();
      if (user && user.username != null && user.password != null) {
        if (!this.checkIfPasswordIsValid(password, user.password)) {
          throw { message: 'usuário ou senhas não correspondem' };
        }

        const token = jwt.sign(
          { userId: user.id, username: user.username },
          authConfig.jwtSecret,
          { expiresIn: '90d' },
        );
        return { message: 'sucess', token: token };
      } else {
        throw { message: 'usuário ou senhas não correspondem' };
      }
    } catch (error) {
      throw error;
    }

    //Send the jwt in the response
  }

  async newUser(username: string, password: string, role: number) {
    let user = new AuthModel();
    user.username = username;
    user.password = await this.hashPassword(password);
    user.role = role;
    try {
      let hasUser = await this.BaseModel.findOne({
        username: user.username,
      }).exec();
      if (hasUser != null) {
        throw { message: 'usuário já cadastrado' };
      }
    } catch (error) {
      throw error;
    }
    try {
      const res = await this.BaseModel.create(user);
      return res;
    } catch (error) {
      throw error;
    }
  }

  async hashPassword(unCripted: string) {
    return bcrypt.hashSync(unCripted, 10);
  }

  checkIfPasswordIsValid(pass: string, hash: string) {
    return bcrypt.compareSync(pass, hash);
  }
}
