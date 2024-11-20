import { Router } from "express";
import loginController from "../controller/login.controller.js";

const loginRouter = Router();

loginRouter.get("/", loginController);

export default loginRouter;
