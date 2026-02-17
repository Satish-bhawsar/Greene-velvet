import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import ClientModel from "../models/clientModel.js";
import { generatedclientId } from "../utils/generatedId.js";
import uploadImageCloudinary from "../utils/uploadImageCloudinary.js";

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

// fetch client details
export async function fetchClientcontroller(request, response) {
    try {
        const { clientId } = request.query;

        if (!clientId) {
            return response.status(400).json({
                message: "provide clientId",
                success: false,
                error: true
            })
        }

        const clientDetails = await ClientModel.findOne({ clientId })

        if (clientDetails.length === 0) {
            return response.status(400).json({
                message: "client not found",
                success: false,
                error: true
            })
        }


        return response.status(200).json({
            message: "fetched success",
            success: true,
            error: false,
            data: clientDetails
        })

    } catch (error) {
        return response.status(500).json({
            message: error.message || error,
            success: false,
            error: true
        })
    }
}


// upload Avatar
export async function uploadAvatarcontroller(request, response) {
    try {
        const { clientId } = request.body;

        if (!clientId) {
            return response.status(400).json({
                message: "clientId required",
                success: false,
                error: true
            })
        }

        if (!request.files?.avatar) {
            return response.status(401).json({
                message: "avatar required",
                success: false,
                error: true
            })
        }

        const avatarUpload = await uploadImageCloudinary(request.files.avatar[0], "profileImg/avatar");

        const uploadClient = await ClientModel.findOneAndUpdate(
            { clientId },
            {
                avatar: avatarUpload.secure_url,

            },
            { new: true }
        );

        if (!uploadClient) {
            return response.status(404).json({
                message: "Client not found",
                success: false,
                error: true
            });
        }

        return response.status(200).json({
            message: "avatar uploaded successfully",
            success: true,
            error: false,
            data: {
                avatar: avatarUpload.secure_url,
            },
        });

    } catch (error) {
        return response.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }

}