//----------------------------------------
// TODO:                                 |
//----------------------------------------
// Configure Passport.js Local Authentication in this file
// I have written some code to help you get started, and you need to
// finish it off 🚀 Make sure to replace the "any" type.

import IUser from "../../../interfaces/user.interface";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { IAuthenticationService } from "../services/IAuthentication.service";
import FormValidater from "../../../helper/FormValidator";

declare global {
  namespace Express {
    interface User extends IUser {}
  }
}

export default class PassportConfig {
  private _name: string;
  private _strategy: LocalStrategy;
  private _authenticationService: IAuthenticationService;

  constructor(name: string, authenticationService: IAuthenticationService) {
    this._authenticationService = authenticationService;
    this._name = name;
    this._strategy = new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async (
        email: string,
        password: string,
        done: (error: any, user?: any, options?: { message: string }) => void
      ) => {

        if (!FormValidater.IsEmpty(email) || !FormValidater.IsEmpty(password)) {
          return done(null, false, { message: "Invalid email or password." });
        }
        
        try {
          const user = await this._authenticationService.getUserByEmailAndPassword(email, password);
          if (!user) {
            return done(null, false, { message: "Incorrect email or password." });
          }
          return done(null, user);
        } catch (error) {
          return done(error);
        }
      }
    );
    this.registerStrategy(passport);
  }
  registerStrategy(passport: passport.PassportStatic) {
    passport.use(this._name, this._strategy);
    this.serializeUser(passport);
    this.deserializeUser(passport);
  }
  private serializeUser(passport: passport.PassportStatic) {
    passport.serializeUser((user: IUser, done) => {
      done(null, user.id);
    });
  }
  private deserializeUser(passport: passport.PassportStatic) {
    passport.deserializeUser(async (id: string, done) => {
      try {
        const user = await this._authenticationService.getUserById(id);
        done(null, user);
      } catch (error) {
        done(error);
      }
    });
  }
  }
