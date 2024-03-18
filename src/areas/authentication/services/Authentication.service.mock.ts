import { database, userDatabase } from "../../../model/fakeDB";
import { IAuthenticationService, UserDTO } from "./IAuthentication.service";
import { randomUUID } from "node:crypto";
//!!
//@ts-ignore
import type { User } from "@prisma/client";

export class MockAuthenticationService implements IAuthenticationService {
  readonly _db = userDatabase;

  public async getUserByEmailAndPassword(email: string, password: string): Promise<User | null> {
    return this._db.filter((user) => user.email === email && user.password === password)[0]
  }

  public async findUserByEmail(email: string): Promise<User | null> {
    return this._db.filter((user) => user.email === email)[0]
  }

  public async createUser(user: UserDTO): Promise<User> {
    const id = randomUUID();
    const newUser: User = {
      id,
      ...user,
    };
    this._db[id] = newUser;
    return newUser;
  }

  public async getUserById(id: string): Promise<User | null> {
    return userDatabase.filter((user) => user.id === id)[0]
  }
}
