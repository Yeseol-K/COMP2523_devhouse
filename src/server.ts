import App from "./app";
import PostController from "./areas/post/controllers/post.controller";
import AuthenticationController from "./areas/authentication/controllers/Authentication.controller";
import { MockAuthenticationService } from "./areas/authentication/services/Authentication.service.mock";
import { PostService, MockPostService } from "./areas/post/services";
import LandingController from "./areas/landing/controllers/Landing.controller";
import SettingController from "./areas/settings/controllers/setting.controller";
import { SettingService } from "./areas/settings/services";
import { AuthenticationService } from "./areas/authentication/services";
import { PrismaClient } from "@prisma/client";

// const db = new PrismaClient();

const server = new App([
  new SettingController(new SettingService()),
  new LandingController(),
  new PostController(new PostService(), new AuthenticationService()),
  // new PostController(new PostService()),
  new AuthenticationController(new AuthenticationService()),
]);

server.start();
