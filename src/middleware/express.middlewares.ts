import express from "express";
import path from "path";
import session from "express-session";
import morgan from "morgan";
import connectLiveReload from "connect-livereload";
import { expressExtend } from "jsxte";
import Redis from "ioredis";

const redis = new Redis({
  port: 16515,
  host: "redis-16515.c321.us-east-1-2.ec2.cloud.redislabs.com",
  username: "default",
  password: "gaTR1BvzHt6kcIbq73b7YhwPDT6WJKh1",
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
