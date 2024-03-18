//----------------------------------------
// TODO:                                 |
//----------------------------------------
// Configure Passport.js Local Authentication in this file
// I have written some code to help you get started, and you need to
// finish it off 🚀 Make sure to replace the "any" type.

import IUser from "../../../interfaces/user.interface";
import passport from "passport";
import { VerifyCallback } from 'passport-oauth2' 
import { Strategy as LocalStrategy } from "passport-local";
import { IAuthenticationService } from "../services/IAuthentication.service";
import FormValidater from "../../../helper/FormValidator";
import { MockAuthenticationService } from "../services";

declare global {
  namespace Express {
    interface User extends IUser {
      id: string;
      name: string;
      email: string;
      password: string;
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
      async (email: string, password: string, done: VerifyCallback) => {
        if (FormValidater.IsEmpty(email) || FormValidater.IsEmpty(password)) {
          return;
        }
        const user = this._authenticationService.getUserByEmailAndPassword(email, password)
        if (!user) {
          done(null, false, {
            message: user
          })
        }
        done(null, user)
      }
    );
    this.registerStrategy(passport);
  }
  async registerStrategy(passport: passport.PassportStatic) {
    passport.use(this._name, this._strategy)
    this.serializeUser(passport)
    this.deserializeUser(passport)
  }
  private serializeUser(passport: passport.PassportStatic) {
    passport.serializeUser((user: IUser, done) => {
      done(null, user.id)
    })
  }
  private async deserializeUser(passport: passport.PassportStatic) {
    passport.deserializeUser(async (id: string, done) => {
      const user = await this._authenticationService.getUserById(id)
      if (!user) {
        done(null, false)    
      }
      done(null, user)
    })
  }
}
