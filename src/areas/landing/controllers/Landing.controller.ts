import express from "express";
import { forwardAuthenticated } from "../../../middleware/authentication.middleware";
import IController from "../../../interfaces/controller.interface";

class LandingController implements IController {
  public path = "/";
  public router = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/`, forwardAuthenticated, this.showLandingPage);
  }

  private showLandingPage = (_: express.Request, res: express.Response) => {
    res.render("landing/views/index");
  };
}

export default LandingController;
