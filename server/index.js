import "./loadenv.js";
import http from "http";
import cors from "cors";
import path from "path";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import session from "express-session";
import passport from "./src/utils/passport.js";
import loginRouter from "./src/routes/login.route.js";
import logoutRouter from "./src/routes/logout.route.js";
import googleLogin from "./src/routes/googleLogin.route.js";
import authRequire from "./src/middlewares/authRequire.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

//env variables
const mode = process.env.NODE_PROCESS || "development";
const PORT = process.env.PORT || 8000;
const sessionSecret = process.env.SESSION_SECRET;

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: sessionSecret,
    cookie: { secure: false },
  })
);

app.use(passport.initialize());
app.use(passport.session());

//Routes:
app.use("/login", loginRouter);
app.use("/auth/google", googleLogin);
app.use("/logout", authRequire, logoutRouter);

if (mode == "production") {
  app.use(
    authRequire,
    express.static(path.join(__dirname, "..", "client", "dist"))
  );

  const rootController = function (req, res) {
    res
      .status(200)
      .sendFile(path.join(__dirname, "..", "client", "index.html"));
    return;
  };

  app.use("/", authRequire, rootController);

  app.use("*", authRequire, rootController);
} else {
  app.use(cors());
}

const server = http.createServer(app);

console.log(`Server running in ${mode}`);

server.listen(PORT, () => {
  console.log(`Server listening to port http://localhost:${PORT}`);
});
