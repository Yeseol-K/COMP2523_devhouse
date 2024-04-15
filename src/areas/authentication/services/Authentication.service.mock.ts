// @ts-nocheck
import { database } from "../../../model/fakeDB";
import { IAuthenticationService, UserDTO } from "./IAuthentication.service";
import { randomUUID } from "node:crypto";
import type { User } from "@prisma/client";
import bcrypt from "bcrypt";

// FIXME: Don't forget: you shouldn't have the type "any"!
export class MockAuthenticationService implements IAuthenticationService {
  readonly _db = database;

  public async getUserByEmailAndPassword(email: string, password: string): Promise<User | null> {
    const user = this._db.users.find((user) => email === user.email && password === user.password);
    // console.log(user);
    return user;
  }

  public async findUserByEmail(email: string): Promise<User | null> {
    const user = this._db.users.find((user) => email === user.email);
    return user;
  }

  public async createUser(user: UserDTO): Promise<User> {
    const userObj = { ...user, id: randomUUID() };
    // userObj.password = bcrypt.hash(userObj.password); // USE BCRYPT
    this._db.users.push(userObj);
    console.log(this._db.users);
    return userObj;
  }

  public async getUserById(id: string): Promise<User | null> {
    const user = this._db.users.find((user) => user.id === id);
    if (user) {
      return user;
    }
    throw new Error("Sorry, cannot find the user ❌");
  }
}
