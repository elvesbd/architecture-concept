import Session from "../util/Session"
import Terminal from "../util/Terminal"
import Login from "../../../core/user/services/Login"
import Bcrypt from "../../adapters/cryptography/Bcrypt"
import UserPrismaRepository from "../../adapters/db/prisma/repositories/user/UserPrismaRepository"

export default async function login() {
  Terminal.title("Login")

  try {
    const email = await Terminal.requiredFields("Email", {
      default: "john@mail.com",
    })
    const password = await Terminal.requiredFields("Password", {
      echo: false,
      default: "#Senha123",
    })

    const cryptography = new Bcrypt()
    const repository = new UserPrismaRepository()
    const useCase = new Login(repository, cryptography)
    const user = await useCase.execute({ email, password })
    Session.started(user)
  } catch (error: any) {
    Terminal.error(error)
  }
}
