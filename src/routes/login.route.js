import { Router } from "express";
import upload from "../middleware/multer";

import { protect } from "../middleware/auth";
import { loginUsercontroller } from "../controllers/Login.controller";

const loginRouter = Router()

loginRouter.post("/login", loginUsercontroller);

export default loginRouter;