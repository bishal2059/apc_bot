const loginController = function (req, res) {
  res.status(200).render(`<a href="/auth/google"> Sign in with google</a>`);
};

export default loginController;
