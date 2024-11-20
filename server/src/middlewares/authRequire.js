const authRequire = (req, res, next) => {
  if (req.session.userId) {
    next();
  } else {
    res.status(403).redirect("/login");
  }
};

export default authRequire;
