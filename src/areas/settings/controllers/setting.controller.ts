import { Request, Response, NextFunction, Router } from "express";
import IController from "../../../interfaces/controller.interface";
import ISettingService from "../services/ISettingService";
import { ensureAuthenticated } from "../../../middleware/authentication.middleware";

class SettingController implements IController {
  public path = "/settings";
  public router = Router();
  settingService: ISettingService;

  constructor(settingService: ISettingService) {
    this.settingService = settingService;
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/`, this.getSettingsPage);
    this.router.post(`${this.path}/change-username`, this.changeUsername);
    this.router.post(`${this.path}/change-email`, this.changeEmail);
    this.router.post(`${this.path}/change-password`, this.changePassword);
  }
  private getSettingsPage = async (req: Request, res: Response, next: NextFunction) => {
    res.render("settings/views/settings");
  };
  private changeUsername = async (req: Request, res: Response, next: NextFunction) => {};
  private changeEmail = async (req: Request, res: Response, next: NextFunction) => {};
  private changePassword = async (req: Request, res: Response, next: NextFunction) => {};
}

export default SettingController;
