const logoutController = function (req, res) {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      res.status(403).json({ error: "Unable to logout" });
    } else {
      res.redirect("/login");
    }
  });
};

export default logoutController;
