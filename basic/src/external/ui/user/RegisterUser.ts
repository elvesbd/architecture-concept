import Terminal from "../util/Terminal"
import Bcrypt from "../../adapters/cryptography/Bcrypt"
import RegisterUser from "../../../core/user/services/RegisterUser"
import UserPrismaRepository from "../../adapters/db/prisma/repositories/user/UserPrismaRepository"

export default async function registerUser() {
  Terminal.title("Registrar Usuário")

  try {
    const name = await Terminal.requiredFields("Nome", { default: "John Doe" })
    const email = await Terminal.requiredFields("Email", {
      default: "john@mail.com",
    })
    const password = await Terminal.requiredFields("Password", {
      echo: false,
      default: "#Senha123",
    })

    const cryptography = new Bcrypt()
    const repository = new UserPrismaRepository()
    const useCase = new RegisterUser(cryptography, repository)
    await useCase.execute({ name, email, password })

    Terminal.success(`User successfully registered!`)
  } catch (error: any) {
    Terminal.error(error)
  } finally {
    await Terminal.waitEnter()
  }
}
