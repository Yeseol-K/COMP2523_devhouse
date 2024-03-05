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
  import FormValidator from "../../../helper/FormValidator";

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
        async (email: string, password: string, done) => {
          try {
            // Use FormValidator to validate email and password
            const isEmailEmpty = FormValidator.IsEmpty(email);
            const isPasswordEmpty = FormValidator.IsEmpty(password);
            
            if (isEmailEmpty || isPasswordEmpty) {
              return done(null, false, { message: "Email and/or password cannot be empty" });
            }
            
            // Proceed with authentication if email and password are valid
            const user = await this._authenticationService.getUserByEmailAndPassword(email, password);
          if (user) {
            return done(null, user);
          } else {
            return done(null, false, { message: "Incorrect email or password" });
          }
        } catch (error) {
          return done(error);
        }
      }
    );
      this.registerStrategy(passport);
    }
    registerStrategy(passport: any) {
      passport.use(this._strategy);
      passport.serializeUser(this.serializeUser.bind(this));
      passport.deserializeUser(this.deserializeUser.bind(this));
    }
  
    private serializeUser(user: IUser, done) {
      // Serialize user to store in session
      done(null, user.id);
    }
  
    private async deserializeUser(id: string, done) {
      try {
        // Retrieve user from database using id
        const user = await this._authenticationService.getUserById(id);
        if (user) {
          done(null, user);
        } else {
          done(new Error("User not found"));
        }
      } catch (error) {
        done(error);
      }
    }
  }
