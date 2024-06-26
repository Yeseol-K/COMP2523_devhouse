import type { User } from "@prisma/client";
import passport from "passport";
import { Strategy as LocalStrategy, Strategy } from "passport-local";
import { IAuthenticationService } from "../services/IAuthentication.service";
import FormValidater from "../../../helper/FormValidator";

// declare global {
//   namespace Express {
//     interface User extends User {
//       email: string;
//       id: string;
//     }
//   }
// }

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
          return;
        }
        const user = await this._authenticationService.getUserByEmailAndPassword(email, password);
        if (user) {
          console.log("done");
          done(null, user);
        } else {
          console.log("nope");
          done(null, false, { error: "problem with login info " });
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
    passport.serializeUser(function (user: User, done: (err: null | object, id: string) => void) {
      if (user) {
        done(null, user.id);
      } else {
        done({ message: "User not found" }, null);
      }
    });
  }

  private deserializeUser(passport: any) {
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
