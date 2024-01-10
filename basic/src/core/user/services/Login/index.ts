import User from "../../model/User"
import { LoginInput } from "./types/LoginInput"
import Email from "../../../shared/value-objects/Email"
import UseCase from "../../../shared/interfaces/UseCase"
import Cryptography from "../../ports/cryptography/Cryptography"
import UserRepository from "../../ports/repository/UserRepository"

export default class Login implements UseCase<LoginInput, User> {
  constructor(
    private readonly repository: UserRepository,
    private readonly cryptography: Cryptography
  ) {}

  async execute(input: LoginInput): Promise<User> {
    const email = new Email(input.email)

    const user = await this.repository.getByEmail(email.value)
    if (!user) throw new Error("User not found!")

    const passwordIsValid = this.cryptography.compare(
      input.password,
      user.password!.hash
    )
    if (!passwordIsValid) throw new Error("Invalid credentials")
    return user.withOutPassword()
  }
}
