import type { User } from "@prisma/client";
export type UserDTO = Omit<User, "id">;

export interface IAuthenticationService {
  findUserByEmail(email: String): Promise<User>;
  createUser(user: UserDTO): Promise<User>;
  getUserByEmailAndPassword(email: string, password: string): Promise<User | null>;
  getUserById(id: string): Promise<User | null>;
}
