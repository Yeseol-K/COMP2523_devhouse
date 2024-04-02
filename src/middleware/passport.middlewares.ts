import passport from "passport";
import PassportConfig from "../areas/authentication/config/PassportConfig";
import { setCurrentUser } from "./authentication.middleware";
import { AuthenticationService } from "../areas/authentication/services/Authentication.service";

new PassportConfig("local", new AuthenticationService());
// TODO: Replace any with the correct type
module.exports = (app: any) => {
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(setCurrentUser);
};
