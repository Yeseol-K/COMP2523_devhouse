import express from "express";
import IController from "../../../interfaces/controller.interface";
import { IAuthenticationService, MockAuthenticationService } from "../services";
import PassportConfig from "../config/PassportConfig";
import passport from "passport";
import bcrypt from "bcrypt"
import EmailAlreadyExistsException from "../../../exceptions/EmailAlreadyExists";
import WrongCredentialsException from "../../../exceptions/WrongCredentialsException";

class AuthenticationController implements IController {
  public path = "/auth";
  public router = express.Router();
  private _service: IAuthenticationService;

  constructor(service: IAuthenticationService) {
    this.initializeRoutes();
    this._service = service;
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/register`, this.showRegistrationPage);
    this.router.post(`${this.path}/register`, this.registration);
    this.router.get(`${this.path}/login`, this.showLoginPage);
    this.router.post(`${this.path}/login`, this.login);
    this.router.get(`${this.path}/logout`, this.logout);
  }

  private showLoginPage = (_: express.Request, res: express.Response) => {
    res.render("authentication/views/login");
  };

  private showRegistrationPage = (_: express.Request, res: express.Response) => {
    res.render("authentication/views/register");
  };

  // 🔑 These Authentication methods needs to be implemented by you
  private login = async (req: express.Request, res: express.Response) => {
    console.log(req.body)
    const { email, password } = req.body
    try {
      const user = await this._service.getUserByEmailAndPassword(email, password);
      if (user && bcrypt.compareSync(password, user.password)) { 
        res.redirect("/");
      } else {
        throw new WrongCredentialsException()
      }
    } catch (err) {
      console.log(err);
      res.redirect(`${this.path}/login?error=Unexpected error occurred`);
    }
  };
  private registration = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const { username, lastName, firstName, email, password } = req.body;
    try {
      const emailAlreadyExists = await this._service.findUserByEmail(email)
      if (emailAlreadyExists) {
        throw new EmailAlreadyExistsException(email)
      }
      const passwordHash = await bcrypt.hash(password, 10)
      this._service.createUser({
        email,
        passwordHash, 
        username, 
        firstName, 
        lastName
      })
      res.redirect("/")
    } catch (err) {
      console.log(err)
      res.redirect(`${this.path}/register`)
    }
  };
  private logout = async (req: express.Request, res: express.Response) => {};
}

export default AuthenticationController;
