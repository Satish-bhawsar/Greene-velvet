import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: [true, "Provide email"],
        unique: true,
        lowercase: true
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: [true, "Provide password"],
        select: false
    },
    mobile: {
        type: Number,
        required: [true, "Provide mobile"],
        unique: true
    },
    role: {
        type: String,
        default: "Admin"
    },
    forgotpassword: {
        type: String,
        default: null
    },
    forgotpasswordexpiry: {
        type: Date,
        default: null
    },
    changePassword: {
        type: Date
    },
    notifications: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "Notifications"
        }
    ],
    avatar: {
        type: String,
        default: ""
    },

}, { timestamps: true }
)

const AdminModel = mongoose.model("admin", AdminSchema)
export default AdminModel;