import { CourseFacade, UserFacade } from "adapters";
import Bcrypt from "../../external/cryptography/Bcrypt";
import UserPrismaRepository from "../../external/db/prisma/repositories/user/UserPrismaRepository";
import CoursePrismaRepository from "../../external/db/prisma/repositories/course/CoursePrismaRepository";

export default class CoreFacade {
  static get user(): UserFacade {
    const cryptography = new Bcrypt();
    const repository = new UserPrismaRepository();
    return new UserFacade(repository, cryptography);
  }

  static get course(): CourseFacade {
    const repository = new CoursePrismaRepository();
    return new CourseFacade(repository);
  }
}
