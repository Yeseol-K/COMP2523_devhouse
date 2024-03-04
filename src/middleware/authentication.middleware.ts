export const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/auth/login");
};

export const forwardAuthenticated = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return next();
  }
  res.redirect("/posts");
};

export const setCurrentUser = (req, res, next) => {
  if (req.isAuthenticated()) {
    res.locals.currentUser = req.user;
  }
  next();
};
