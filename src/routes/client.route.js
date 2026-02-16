import { request, response, Router } from "express";
import { logoutClientcontroller, registerClientcontroller } from "../controllers/client.controller.js";
import { protect } from "../middleware/auth.js";

const clientRouter = Router()

clientRouter.post("/register", registerClientcontroller);
clientRouter.post("/logout",logoutClientcontroller);

// Protected example route
clientRouter.get("/client-data", protect("Client"), async (request, res) => {
    response.json({ success: true, data: request.user });
});

export default clientRouter