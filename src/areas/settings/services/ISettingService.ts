import DBClient from "../../../PrismaClient";

export default interface ISettingService {
  readonly _db: DBClient;
  changeUsername(userId: string, username: string): Promise<void>;
  changeEmail(userId: string, email: string): Promise<void>;
  changePassword(userId: string, currentPassword: string, newPassword: string): Promise<void>;
}
