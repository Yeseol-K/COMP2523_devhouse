import express from "express";
import errorMiddleware from "./middleware/error.middleware";
import Controller from "./interfaces/controller.interface";
import dotenv from "dotenv";
import livereload from "livereload";
import path from "node:path";
import connectRedis from "connect-redis";
import session from 'express-session';
import { createClient } from 'redis';

class App {
  private _app: express.Application;
  private readonly _port: number = Number(process.env.PORT) || 5000;

  constructor(controllers: Controller[]) {
    dotenv.config();

    this.initializeLiveReloadServer();
    this._app = express();
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
    this.initializeErrorHandling();
  }

  public start() {
    this._app.listen(this._port, () => {
      console.log(`App running at: http://localhost:${this._port}/ 🚀`);
    });
  }

  private initializeMiddlewares() {
    require("./middleware/express.middlewares")(this._app);
    require("./middleware/passport.middlewares")(this._app);
    this._app.use(express.json());
    this._app.use(express.urlencoded({ extended: true }));
    this.initializeSessionStore();

  }

  private async initializeSessionStore() {
    const RedisStore = connectRedis(session);
    const redisClient = createClient({
      url: process.env.PORT, 
      socket: {
        tls: process.env.NODE_ENV === 'production', // Only use TLS in production
        rejectUnauthorized: false // Consider security implications
      }
    });
  
    await redisClient.connect().catch((error) => {
      console.error('Failed to connect to Redis:', error);
    });
  
    this._app.use(session({
      store: new RedisStore({ client: redisClient }),
      secret: process.env.SESSION_SECRET || 'secretMeow',
      saveUninitialized: false,
      resave: false,
      cookie: {
        secure: process.env.NODE_ENV === 'production', // Ensure HTTPS in production
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
      },
    }));
  }

  private initializeErrorHandling() {
    this._app.use(errorMiddleware);
  } 

  private initializeControllers(controllers: Controller[]) {
    controllers.forEach((controller) => {
      this._app.use("/", controller.router);
    });
  }

  private initializeLiveReloadServer() {
    const liveReloadServer = livereload.createServer();
    liveReloadServer.watch(path.join(__dirname));
    liveReloadServer.server.once("connection", () => {
      setTimeout(() => {
        liveReloadServer.refresh("/");
      }, 100);
    });
  }
}

export default App;
