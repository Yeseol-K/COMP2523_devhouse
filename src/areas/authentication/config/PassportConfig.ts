//----------------------------------------
//----------------------------------------
// Configure Passport.js Local Authentication in this file
// I have written some code to help you get started, and you need to
// finish it off 🚀 Make sure to replace the "any" type.

import IUser from "../../../interfaces/user.interface";
import passport from "passport";
import { Strategy as LocalStrategy, Strategy } from "passport-local";
import { IAuthenticationService } from "../services/IAuthentication.service";
import FormValidater from "../../../helper/FormValidator";

declare global {
  namespace Express {
    interface User extends IUser {
      email: string;
      id: string;
    }
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
      async (email: string, password: string, done: any) => {
        if (FormValidater.IsEmpty(email) || FormValidater.IsEmpty(password)) {
          // show some error
        } else {
          const user = await this._authenticationService.getUserByEmailAndPassword(email, password);
          if (user) {
            done(null, user);
          } else {
            done(null, false, { error: "problem with login info " });
          }
        }
      }
    );
    this.registerStrategy(passport);
  }
  registerStrategy(passport: any) {
    passport.use(this._name, this._strategy);
    this.serializeUser(passport);
    this.deserializeUser(passport);
  }

  private serializeUser(passport: any) {
    passport.serializeUser(function (user: IUser, done: (err: null | object, id: string) => void) {
      if (user) {
        done(null, user.id);
      } else {
        done({ message: "User not found" }, null);
      }
    });
  }

  private deserializeUser(passport: any) {
    //  const that = this; worse case scenario
    // maybe look into .bind (might be useful)
    passport.deserializeUser(
      async function (id: Express.User, done: (err: null | object, user?: Express.User | false | null) => void) {
        let user = await this._authenticationService.getUserById(id);
        if (user) {
          done(null, user);
        } else {
          done({ message: "User not found" }, null);
        }
      }.bind(this)
    );
  }
}
