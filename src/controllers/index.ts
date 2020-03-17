import { userController } from './user.controller';
import { petController } from './pet.controller';
import { instituitionController } from './institution.controller';
import { transactionController } from './transaction.controller';
import { PingController } from './ping.controller';

const pingController = new PingController();
export {
  userController,
  petController,
  instituitionController,
  transactionController,
  pingController,
};
