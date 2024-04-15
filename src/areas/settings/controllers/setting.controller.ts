import { Request, Response, NextFunction, Router } from "express";
import IController from "../../../interfaces/controller.interface";
import ISettingService from "../services/ISettingService";
import { ensureAuthenticated } from "../../../middleware/authentication.middleware";
import { User } from "@prisma/client";
class SettingController implements IController {
  public path = "/settings";
  public router = Router();
  settingService: ISettingService;

  constructor(settingService: ISettingService) {
    this.initializeRoutes();
    this.settingService = settingService;
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/`, ensureAuthenticated, this.getSettingsPage);
    this.router.post(`${this.path}/change-username`, this.changeUsername);
    this.router.post(`${this.path}/change-email`, this.changeEmail);
    this.router.post(`${this.path}/change-password`, this.changePassword);
  }
  private getSettingsPage = async (req: Request, res: Response, next: NextFunction) => {
    console.log("HIII");
    const errorMessage = req.query.error || "";
    console.log({ errorMessage });
    const isLoggedIn = req.isAuthenticated();
    const user = req.user;
    console.log(user);
    res.render("settings/views/settings", { isLoggedIn, user, errorMessage });
  };
  private changeUsername = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const newUsername = req.body.newUsername;
      const user = req.user as User;
      const userId = user.id;
      this.settingService.changeUsername(userId, newUsername);
      res.redirect("/settings");
    } catch (err) {
      res.redirect("/settings?error=user%20exists%20already");
    }
  };
  private changeEmail = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const newEmail = req.body.newEmail;
      const user = req.user as User;
      const userId = user.id;
      await this.settingService.changeEmail(userId, newEmail);
      res.redirect("/settings");
    } catch (err) {
      res.redirect(`/settings?error=email%20exists%20already`);
    }
  };
  private changePassword = async (req: Request, res: Response, next: NextFunction) => {
    const user = req.user as User;
    const userId = user.id;
    console.log(req.body);
    const currentPassword = req.body.currentPassword;
    const newPassword = req.body.newPassword;
    const confirmPassword = req.body.confirmNewPassword;
    if (newPassword === confirmPassword) {
      await this.settingService.changePassword(userId, currentPassword, newPassword);
      res.redirect("/settings");
    } else {
      res.redirect("/settings?error=failed%20to%20change%20password");
    }
  };
}

export default SettingController;
