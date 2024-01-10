import User from "../../../../../core/user/model/User"
import UserRepository from "../../../../../core/user/ports/repository/UserRepository"

export default class UserRepositoryInMemory implements UserRepository {
  static readonly instance = new UserRepositoryInMemory()

  private constructor(private readonly users: User[] = []) {}

  async getByEmail(email: string): Promise<User | null> {
    return this.users.find((user) => user.email.value === email) ?? null
  }

  async getAll(): Promise<User[]> {
    return this.users
  }

  async save(user: User): Promise<void> {
    const index = this.users.findIndex(
      (u) => u.email.value === user.email.value
    )

    if (index >= 0) this.users[index] = user
    else this.users.push(user)
  }
}
