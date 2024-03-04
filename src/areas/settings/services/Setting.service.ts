import ISettingService from "./ISettingService";
import DBClient from "../../../PrismaClient";

export class SettingService implements ISettingService {
  readonly _db: DBClient = DBClient.getInstance();
  async changeUsername(userId: string, username: string): Promise<void> {}
  async changeEmail(userId: string, email: string): Promise<void> {}
  async changePassword(userId: string, currentPassword: string, newPassword: string): Promise<void> {}
}
