import ISettingService from "./ISettingService";
import DBClient from "../../../PrismaClient";
import { Prisma } from "@prisma/client";
import errorMiddleware from "../../../middleware/error.middleware";

export class SettingService implements ISettingService {
  readonly _db: DBClient = DBClient.getInstance();
  async changeUsername(userId: string, newUsername: string): Promise<void> {
    await this._db.prisma.user.update({
      where: { id: userId },
      data: { username: newUsername },
    });
  }
  async changeEmail(userId: string, newEmail: string): Promise<void> {
    const checkEmail = await this._db.prisma.user.findUnique({
      where: { email: newEmail },
    });
    if (checkEmail === null) {
      await this._db.prisma.user.update({
        where: { id: userId },
        data: { email: newEmail },
      });
    } else {
      throw new Error("The email already exists");
    }
  }
  async changePassword(userId: string, currentPassword: string, newPassword: string): Promise<void> {
    const checkPwd = await this._db.prisma.user.findUnique({
      where: {
        id: userId,
        password: currentPassword,
      },
    });
    if (checkPwd !== null) {
      await this._db.prisma.user.update({
        where: { id: userId },
        data: { password: newPassword },
      });
    } else {
      throw new Error("The current password not matching.");
    }
  }
}
