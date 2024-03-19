import express from "express";
import IController from "../../../interfaces/controller.interface";
import { IAuthenticationService } from "../services";
import bcrypt from "bcrypt";
import EmailAlreadyExistsException from "../../../exceptions/EmailAlreadyExists";
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
    const { email, password } = req.body;
    try {
      const user = await this._service.getUserByEmailAndPassword(email, password);
      if (user && bcrypt.compareSync(password, user.password)) {
        res.redirect("/posts");
      } else {
        res.redirect(`${this.path}/login?error=Invalid credentials`);
      }
    } catch (error) {
      console.error("Login error:", error);
      res.redirect(`${this.path}/login?error=Unexpected error occurred`);
    }
  };
  private registration = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const { email, password, username, firstName, lastName } = req.body;

    try {
      const existingUser = await this._service.findUserByEmail(email);
      if (existingUser) {
        throw new EmailAlreadyExistsException(email);
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await this._service.createUser({
        email,
        password: hashedPassword,
        username,
        firstName,
        lastName,
      });

      res.redirect(`${this.path}/login`);
    } catch (error) {
      next(error);
    }
  };

  private logout = async (req: express.Request, res: express.Response) => {
    req.session.destroy((err) => {
      if (err) {
        console.error("Session destroy error:", err);
        return res.status(400).send("Could not log out, please try again.");
      }

      res.clearCookie("sessionName");
      res.redirect(`${this.path}/login`);
    });
  };
}

export default AuthenticationController;
