import { database } from "../../../model/fakeDB";
import { IAuthenticationService, UserDTO } from "./IAuthentication.service";
import { randomUUID } from "node:crypto";
import type { User } from "@prisma/client";

// FIXME: Don't forget: you shouldn't have the type "any"!
export class MockAuthenticationService implements IAuthenticationService {
  readonly _db = database;

  public async getUserByEmailAndPassword(email: any, password: any): Promise<User | null> {
    throw new Error("Method not yet implemented! ❌");
  }

  public async findUserByEmail(email: any): Promise<User | null> {
    throw new Error("Method not yet implemented! ❌");
  }

  public async createUser(user: UserDTO): Promise<User> {
    throw new Error("Method not yet implemented! ❌");
  }

  public async getUserById(id: any): Promise<User | null> {
    throw new Error("Method not yet implemented! ❌");
  }
}
