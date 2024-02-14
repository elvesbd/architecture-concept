import { PrismaClient } from "@prisma/client";
import { User, UserRepository } from "core";

export default class UserPrismaRepository implements UserRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    return user ? new User(user) : null;
  }

  async getAll(): Promise<User[]> {
    const users = await this.prisma.user.findMany();
    return users.map((user) => new User(user));
  }

  async save(user: User): Promise<void> {
    await this.prisma.user.upsert({
      where: { id: user.id.value ?? -1 },
      update: user.props,
      create: user.props,
    });
  }
}
