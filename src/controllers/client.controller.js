import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import ClientModel from "../models/clientModel.js";
import { generatedclientId } from "../utils/generatedId.js";

// client register controll
export async function registerClientcontroller(request, response) {
    try {
        const { name, email, password, mobile } = request.body

        if (!name || !email || !password || !mobile) {
            return response.status(400).json({
                message: "Provide name, email, password, mobile",
                error: true,
                success: false
            })
        }

        const client = await ClientModel.findOne({ email })

        if (client) {
            return response.json({
                message: "Already register email",
                error: true,
                success: false
            })
        }

        const clientId = await generatedclientId()

        const salt = await bcryptjs.genSalt(10)
        const hashPassword = await bcryptjs.hash(password, salt)

        const payload = {
            clientId,
            name,
            email,
            password: hashPassword,
            mobile,
        }

        const newClient = new ClientModel(payload)
        const save = await newClient.save()


        return response.json({
            message: "User register successfully",
            error: false,
            success: true,
            data: save
        })

    } catch (error) {
        return response.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

// client logout controll
export async function logoutClientcontroller(request, response) {
    try {
        const { clientId, role } = request.body;

        if (!clientId || !role) {
            return res.status(400).json({
                message: "Invalid token",
                success: false,
                error: true
            });
        }

        const client = await ClientModel.findOne({ clientId: clientId });

        if (!client) {
            return response.status(404).json({
                message: "user not found",
                success: false,
                error: true,
            })

        }
        client.refresh_token = "";
        client.onlineStatus = false;
        await client.save();

        return response.status(200).json({
            message: "Logged out successfully",
            success: true,
            error: false,
        })

    } catch (error) {
        return response.status(500).json({
            message: "Internal server error",
            success: false,
            error: true,
        })
    }
}