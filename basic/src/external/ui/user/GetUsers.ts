import Terminal from "../util/Terminal"
import GetUsers from "../../../core/user/services/GetUsers"
import UserPrismaRepository from "../../adapters/db/prisma/repositories/user/UserPrismaRepository"

export default async function getUsers() {
  Terminal.title("Obter Usuários")

  try {
    const repository = new UserPrismaRepository()
    const useCase = new GetUsers(repository)
    const users = await useCase.execute()

    Terminal.table(users.map((user) => user.props))
  } catch (error: any) {
    Terminal.error(error)
  } finally {
    await Terminal.waitEnter()
  }
}
