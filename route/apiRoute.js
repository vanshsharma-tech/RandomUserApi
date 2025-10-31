import { Router } from "express";
import { apiController } from "../controller/apiController.js";

const apiRouter = Router()

apiRouter.get("/:id",apiController)

export {apiRouter}