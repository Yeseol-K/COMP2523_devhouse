// import { database } from "../../../model/fakeDB";
// import { IAuthenticationService, UserDTO } from "./IAuthentication.service";
// import { randomUUID } from "node:crypto";
// import type { User } from "@prisma/client";
// import bcrypt from "bcrypt"; // Corrected import
// import IUser from "../../../interfaces/user.interface"


// // Assumes database and UserDTO are correctly typed
// export class MockAuthenticationService implements IAuthenticationService {
//   readonly _db = database;

//   // Correct password handling using bcrypt for comparison
//   public async getUserByEmailAndPassword(email: string, password: string): Promise<UserDTO | null> {
//     const user = this._db.users.find((user) => email === user.email);
//     if (user && await bcrypt.compare(password, user.password)) {
//       return user;
//     }
//     return null;
//   }

//   public async findUserByEmail(email: string): Promise<UserDTO | null> {
//     const user = this._db.users.find((user) => email === user.email);
//     return user;
//   }

//   // Ensure password hashing is done properly and asynchronously
//   public async createUser(user: UserDTO): Promise<User> {
//     const hashedPassword = await bcrypt.hash(user.password, 10);
//     const userObj: User = { ...user, id: randomUUID(), password: hashedPassword };
//     this._db.users.push(userObj);
//     console.log(this._db.users);
//     return userObj;
//   }

//   public async getUserById(id: string): Promise<UserDTO | null> {
//     const user = this._db.users.find((user) => user.id === id);
//     if (user) {
//       return user;
//     }
//     throw new Error("Sorry, cannot find the user ❌");
//   }
// }
