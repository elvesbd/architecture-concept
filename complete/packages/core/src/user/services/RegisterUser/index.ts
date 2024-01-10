import User from "../../model/User"
import UseCase from "../../../shared/interfaces/UseCase"
import { RegisterUserInput } from "./types/RegisterUserInput"
import Cryptography from "../../ports/cryptography/Cryptography"
import UserRepository from "../../ports/repository/UserRepository"
import PasswordStrong from "../../../shared/value-objects/PasswordStrong"

export default class RegisterUser implements UseCase<RegisterUserInput, void> {
  constructor(
    private readonly cryptography: Cryptography,
    private readonly userRepository: UserRepository
  ) {}

  async execute(input: RegisterUserInput): Promise<void> {
    const { name, email, password } = input
    const hasUser = await this.userRepository.getByEmail(email)
    if (hasUser)
      throw new Error(`There are already register user with email ${email}`)

    const passwordStrong = new PasswordStrong(password)
    const hash = this.cryptography.encrypt(passwordStrong.value)

    const user = new User({
      name,
      email,
      password: hash,
    })
    await this.userRepository.save(user)
  }
}
