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
      const user = await this.BaseModel.findOne({ username: username });
      if (user?.username != null && user.password != null) {
        if (!this.checkIfUnencryptedPasswordIsValid(password, user.password)) {
          throw { message: 'usuário ou senhas não correspondem' };
        }

        const token = jwt.sign(
          { userId: user.id, username: user.username },
          authConfig.jwtSecret,
          { expiresIn: '90d' },
        );
        return token;
      }

      throw { message: 'usuário ou senhas não correspondem' };
    } catch (error) {
      throw { message: error };
    }

    //Send the jwt in the response
  }

  async newUser(username: string, password: string) {
    let user = new AuthModel();
    user.username = username;
    user.password = password;

    try {
      const res = await this.BaseModel.create(user);
      return res;
    } catch (error) {
      throw { message: error };
    }
  }

  hashPassword(criptedpassword: string) {
    return (criptedpassword = bcrypt.hashSync(criptedpassword, 8));
  }

  checkIfUnencryptedPasswordIsValid(
    unencryptedPassword: string,
    criptedpassword: string,
  ) {
    return bcrypt.compareSync(unencryptedPassword, criptedpassword);
  }
}
