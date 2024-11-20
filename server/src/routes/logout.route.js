import { Router } from "express";
import logoutController from "../controller/logout.controller.js";

const logoutRouter = Router();

logoutRouter.get("/", logoutController);

export default logoutRouter;
