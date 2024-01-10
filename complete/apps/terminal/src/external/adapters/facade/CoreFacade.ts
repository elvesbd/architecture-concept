import Bcrypt from "../cryptography/Bcrypt";
import { CourseFacade, UserFacade } from "adapters";
import UserPrismaRepository from "../db/prisma/repositories/user/UserPrismaRepository";
import CoursePrismaRepository from "../db/prisma/repositories/course/CoursePrismaRepository";

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
