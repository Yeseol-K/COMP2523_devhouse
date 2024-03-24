import express, { Request, Response } from "express";
import IController from "../../../interfaces/controller.interface";
import { IAuthenticationService } from "../services";
import { randomUUID } from "node:crypto";
import passport from "passport";
import PassportConfig from "../config/PassportConfig";
import WrongCredentialsException from "../../../exceptions/WrongCredentialsException";

class AuthenticationController implements IController {
  public path = "/auth";
  public router = express.Router();
  private _service: IAuthenticationService;

  constructor(service: IAuthenticationService) {
    this.initializeRoutes();
    this._service = service;

    const _PassportConfig = new PassportConfig("local", service);
    this.router.use(_PassportConfig.registerStrategy);
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/register`, this.showRegistrationPage);
    this.router.post(`${this.path}/register`, this.registration);
    this.router.get(`${this.path}/login`, this.showLoginPage);
    this.router.post(`${this.path}/login`, this.login);
    this.router.get(`${this.path}/logout`, this.logout);
  }

  private showLoginPage = (req: express.Request, res: express.Response) => {
    const errorMessage = req.query.error;
    res.render("authentication/views/login", { errorMessage });
  };

  private showRegistrationPage = (req: express.Request, res: express.Response) => {
    const errorMessage = req.query.error;
    res.render("authentication/views/register", { errorMessage });
  };

  // 🔑 These Authentication methods needs to be implemented by you
  private login = passport.authenticate("local", {
    successRedirect: "/posts",
    failureRedirect: "/auth/login", 
    failureMessage: true
  })

  private registration = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const { email, password, username, firstName, lastName } = req.body;
    // Check if user already exist in db
    const user = await this._service.findUserByEmail(email);
    if (user) {
      res.redirect("/auth/register?error=user%20exists%20already");
    } else {
      const createdUser = await this._service.createUser({
        email,
        password,
        username,
        firstName,
        lastName,
      });
      res.redirect("/auth/login");
    }
  };

  private logout = async (req: express.Request, res: express.Response) => {
    req.logOut((err) => {
      if (err) console.log(err);
    });
    res.redirect("/");
  };
}

export default AuthenticationController;
