import jwt from "jsonwebtoken";
import AdminModel from "../models/adminModel.js";
import EscortModel from "../models/escortModel.js";
import ClientModel from "../models/clientModel.js";

// Middleware: protect + role check
export const protect = (role) => async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // fetch user based on role
            if (decoded.role === "Admin") req.user = await AdminModel.findById(decoded.id).select("-password");
            else if (decoded.role === "Escort") req.user = await EscortModel.findById(decoded.id).select("-password");
            else if (decoded.role === "Client") req.user = await ClientModel.findById(decoded.id).select("-password");
            else return res.status(403).json({ message: "Invalid role" });

            // route role check
            if (role && decoded.role !== role)
                return res.status(403).json({ message: "Access denied" });

            next();
        } catch (error) {
            return res.status(401).json({ message: "Not authorized" });
        }
    } else {
        return res.status(401).json({ message: "No token provided" });
    }
};
