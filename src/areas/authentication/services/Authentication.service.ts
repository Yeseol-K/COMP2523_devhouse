import { randomUUID } from "crypto";
import DBClient from "../../../PrismaClient";
import IUser from "../../../interfaces/user.interface";
import { IAuthenticationService, UserDTO } from "./IAuthentication.service";
import type { User } from "@prisma/client";
import bcrypt from "bcrypt";

export class AuthenticationService implements IAuthenticationService {
  readonly _db: DBClient = DBClient.getInstance();

  async findUserByEmail(email: string): Promise<User | null> {
    const userLogin = await this._db.prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    console.log(userLogin);
    return null;
  }
  async getUserByEmailAndPassword(email: string, password: string): Promise<User | null> {
    //const passwordHash = bcrypt.hashSync(password, 10)
    //console.log(passwordHash)
    return await this._db.prisma.user.findUnique({
      where: {
        email: email,
        password: password,
      },
    });
  }
  async createUser(user: UserDTO): Promise<User> {
    const id = randomUUID();
    //const passwordHash = bcrypt.hashSync(user.password, 10)
    return await this._db.prisma.user.create({
      data: {
        id: id,
        password: user.password,
        username: user.username,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      },
    });
  }

  async getUserById(id: string): Promise<User | null> {
    return await this._db.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
  }
}
