"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const post_controller_1 = __importDefault(require("./areas/post/controllers/post.controller"));
const Authentication_controller_1 = __importDefault(
  require("./areas/authentication/controllers/Authentication.controller")
);
const services_1 = require("./areas/post/services");
const Landing_controller_1 = __importDefault(require("./areas/landing/controllers/Landing.controller"));
const setting_controller_1 = __importDefault(require("./areas/settings/controllers/setting.controller"));
const services_2 = require("./areas/settings/services");
const services_3 = require("./areas/authentication/services");
// const db = new PrismaClient();
const server = new app_1.default([
  new setting_controller_1.default(new services_2.SettingService()),
  new Landing_controller_1.default(),
  new post_controller_1.default(new services_1.PostService(), new services_3.AuthenticationService()),
  // new PostController(new PostService()),
  new Authentication_controller_1.default(new services_3.AuthenticationService()),
]);
server.start();
//# sourceMappingURL=server.js.map
