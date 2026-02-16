import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema({
    /* ================= UserId ===================== */
    clientId: {
        type: String,
        unique: true,
        index: true,
    },
    /* ================= BASIC DETAILS ================= */
    name: {
        type: String,
        required: [true, "Provide name"],
        trim : true
    },
    email: {
        type: String,
        required: [true, "Provide email"],
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, "Porvide password"],
        select: false
    },
    mobile: {
        type: Number,
        required: [true, "Provide account type"],
        unique: true
    },


    role: {
        type: String,
        default: "Client"
    },

    /* ================= DOCUMENT VERIFICATION ================= */
    address_details: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Address'
        }
    ],
    profile_details: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Profile'
        }
    ],


    /* ================= STATUS ================= */
    status: {
        type: String,
        enum: ["Active", "Inactive", "Suspended"],
        default: "Active"
    },

    /* ============================== Hide / Visible ============================== */

    onlineStatus: {
        type: Boolean,
        default: false
    },

    last_login_date: {
        type: Date,
        default: "",
    },


    /* ================= payment ================= */
    payment_history: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "Payment"
        }
    ],

    /* ================= PASSWORD & OTP ================= */
    forgot_password: {
        type: String,
        default: null
    },
    forgot_password_expiry: {
        type: Date,
        default: null
    },
    changePassword: {
        type: Date
    },
    refresh_token: {
        type: String,
        default: ""
    },
    
    
    /* ================= RELATIONS (REFERENCES) ================= */
    bookings: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "Bookings"
        }
    ],
    messages: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "Messages"
        }
    ],

    escorts: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "escort"
        }
    ],
    blogs: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "Blogs"
        }
    ],
    newsTours: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "NewsTours"
        }
    ],
    notifications: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "Notifications"
        }
    ],



    /* ================= GALLERY ================= */
    avatar: {
        type: String,
        default: ""
    },



}, {
    timestamps: true
})

const ClientModel = mongoose.model("client", ClientSchema)

export default ClientModel;