import { request, response, Router } from "express";
import { fetchClientcontroller, logoutClientcontroller, registerClientcontroller } from "../controllers/client.controller.js";
import { protect } from "../middleware/auth.js";

const clientRouter = Router()

clientRouter.post("/register", registerClientcontroller);

// Protected example route
clientRouter.get("/client-data", protect("Client"), async (request, res) => {
    response.json({ success: true, data: request.user });
});
clientRouter.post("/logout",logoutClientcontroller);
clientRouter.get("/fetch-client-details",fetchClientcontroller);

export default clientRouter