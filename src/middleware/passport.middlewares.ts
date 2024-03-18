import passport from "passport";
import PassportConfig from "../areas/authentication/config/PassportConfig";
import { setCurrentUser } from "./authentication.middleware";
import { MockAuthenticationService } from "../areas/authentication/services/Authentication.service.mock";
import { Application } from "express";

new PassportConfig("local", new MockAuthenticationService());
module.exports = (app: Application) => {
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(setCurrentUser);
};
