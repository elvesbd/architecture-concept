import User from "../../model/User"
import UseCase from "../../../shared/interfaces/UseCase"
import UserRepository from "../../ports/repository/UserRepository"

export default class GetUsers implements UseCase<void, User[]> {
  constructor(private readonly repository: UserRepository) {}

  async execute(): Promise<User[]> {
    const users = await this.repository.getAll();
    return users.map((user) => user.withOutPassword())
    //return await this.repository.getAll()
  }
}
