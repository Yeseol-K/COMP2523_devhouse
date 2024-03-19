import express from "express";
import path from "path";
import session from "express-session";
import morgan from "morgan";
import connectLiveReload from "connect-livereload";
import { expressExtend } from "jsxte";
import Redis from "ioredis";

const redis = new Redis({
  port: 12848, // Redis port
  host: 'redis-12848.c15.us-east-1-2.ec2.cloud.redislabs.com', // Redis host
  username: "default", // needs Redis >= 6
  password: 'fGFzrNBQtUhCjxOnq02rDHX3FQhofBlM',
  db: 0, // Defaults to 0   
});  

module.exports = (app) => {
  app.set("views", path.join(__dirname, "..", "areas"));
  expressExtend(app);
  app.use(connectLiveReload());
  app.use(express.static(path.join(__dirname, "..", "public")));
  app.use(express.urlencoded({ extended: true }));
  app.use(morgan("tiny"));
  app.use(
    session({
      secret: "secret",
      store: redis,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: false,
        maxAge: 24 * 60 * 60 * 1000,
      },
    })
  );
};
