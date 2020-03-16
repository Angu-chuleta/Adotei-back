import { InstitutionService } from './institution.service';
import { PetService } from './pet.service';
import { UserService } from './user.service';

const institutionService = new InstitutionService();
const petService = new PetService();
const userService = new UserService();

export {
  institutionService,
  InstitutionService,
  userService,
  UserService,
  petService,
  PetService,
};
