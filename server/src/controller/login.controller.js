const loginController = function (req, res) {
  res
    .status(200)
    .send(
      `<html><head><title>Log in </title></head><body><a href="/auth/google"> Sign in with google</a></body></html>`
    );
};

export default loginController;
