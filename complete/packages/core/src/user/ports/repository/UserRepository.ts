import User from "../../model/User"

export default interface UserRepository {
  getByEmail(email: string): Promise<User | null>
  getAll(): Promise<User[]>
  save(user: User): Promise<void>
}
