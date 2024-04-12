import DBClient from "../../../PrismaClient";

export default interface ISettingService {
  readonly _db: DBClient;
  changeUsername(userId: string, username: string): Promise<void | Error>;
  changeEmail(userId: string, email: string): Promise<void | Error>;
  changePassword(userId: string, currentPassword: string, newPassword: string): Promise<void | Error>;
}
