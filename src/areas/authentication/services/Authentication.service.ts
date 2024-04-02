import { randomUUID } from "crypto";
import DBClient from "../../../PrismaClient";
import IUser from "../../../interfaces/user.interface"; // Ensure IUser is used if needed
import { IAuthenticationService, UserDTO } from "./IAuthentication.service";
import type { User } from "@prisma/client";
import bcrypt from 'bcrypt';

export class AuthenticationService implements IAuthenticationService {
  readonly _db: DBClient = DBClient.getInstance();

  async findUserByEmail(email: string): Promise<User | null> {
    return this._db.prisma.user.findUnique({
      where: { email },
    });
  }

  async getUserByEmailAndPassword(email: string, password: string): Promise<User | null> {
    const user = await this._db.prisma.user.findUnique({
      where: { email },
    });
    if (!user) return null;
    const isMatch = await bcrypt.compare(password, user.password);
    return isMatch ? user : null;
  }

  async createUser(user: UserDTO): Promise<User> {
    const passwordHash = await bcrypt.hash(user.password, 10);
    return this._db.prisma.user.create({
      data: {
        id: randomUUID(),
        password: passwordHash,
        username: user.username,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      },
    });
  }

  async getUserById(id: string): Promise<User | null> {
    return this._db.prisma.user.findUnique({
      where: { id },
    });
  }
}
