import { database } from "../../../model/fakeDB";
import { IAuthenticationService, UserDTO } from "./IAuthentication.service";
import { randomUUID } from "node:crypto";
import type { User } from "@prisma/client";

// FIXME: Don't forget: you shouldn't have the type "any"!
export class MockAuthenticationService implements IAuthenticationService {
  readonly _db = database;

  public async getUserByEmailAndPassword(email: any, password: any): Promise<User | null> {
    const user = Object.values(this._db).find((user) => user.email === email);
    if (user && user.password === password) {
      return user;
    }
    return null;
  }

  public async findUserByEmail(email: any): Promise<User | null> {
    return Object.values(this._db).find((user) => user.email === email) || null;
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

  public async getUserById(id: any): Promise<User | null> {
    return this._db[id] || null;
  }
}
