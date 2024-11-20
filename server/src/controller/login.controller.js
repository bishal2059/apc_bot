const loginController = function (req, res) {
  res.status(200).send(`<a href="/auth/google"> Sign in with google</a>`);
};

export default loginController;
