const authRequire = (req, res, next) => {
  if (req.session && req.session.passport && req.session.passport.user) {
    // console.log(req.session);
    next();
  } else {
    res.status(403).redirect("/login");
  }
};

export default authRequire;
