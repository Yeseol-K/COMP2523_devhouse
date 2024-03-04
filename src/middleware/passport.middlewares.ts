import passport from "passport";
import PassportConfig from "../areas/authentication/config/PassportConfig";
import { setCurrentUser } from "./authentication.middleware";
import { MockAuthenticationService } from "../areas/authentication/services/Authentication.service.mock";

new PassportConfig("local", new MockAuthenticationService());
// TODO: Replace any with the correct type
module.exports = (app: any) => {
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(setCurrentUser);
};
