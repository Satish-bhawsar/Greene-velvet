import mongoose from "mongoose";

const EscortSchema = new mongoose.Schema({

    /* ================= UserId ===================== */
    escortId: {
        type: String,
        unique: true,
        index: true,
    },

    /* ================= BASIC DETAILS ================= */
    name: {
        type: String,
        required: [true, "Provide name"]
    },
    email: {
        type: String,
        required: [true, "Provide email"],
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, "Provide password"],
        select: false
    },
    mobile: {
        type: Number,
        required: [true, "Provide account type"],
        unique: true
    },
    country: {
        type: String,
    },
    city: {
        type: String,
    },
    account_classification: {
        type: String,
    },
    account_type: {
        type: String,
    },
    adverties_category: {
        type: String,
    },

    role: {
        type: String,
        default: "Escort"
    },

    /* ================= About and Highlights ================= */
    incall: {
        type: Boolean,
        default: false
    },

    outcall: {
        type: Boolean,
        default: false
    },

    about: {
        type: String,
        default: ""
    },

    highlights: {
        type: String,
        default: "Every frame is a little more tempting than the last."
    },

    /* ================= DOCUMENT VERIFICATION ================= */
    address_details: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Address'
        }
    ],
    escortdetail: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'escortdetail'
        }
    ],
    escortessential: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'escortessential'
        }
    ],
    escortprefer: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'escortprefer'
        }
    ],

    /* ================= STATUS & VERIFICATION ================= */
    isEmailVerified: {
        type: Boolean,
        default: false
    },
    emailVerifyToken: String,

    emailVerifyExpiry: Date,

    isMobileVerified: {
        type: Boolean,
        default: false
    },

    verificationselfie: {
        type: String
    },
    verificationgovtId: {
        type: String
    },

    docsuploadStatus: {
        type: String,
        default: "Not uploaded"
    },

    status: {
        type: String,
        enum: ["Pending", "Active", "Inactive", "Suspended"],
        default: "Pending"
    },

    isVerified: {
        type: Boolean,
        default: false,
    },

    /* ============================== Hide / Visible ============================== */
    isVisible: {
        type: Boolean,
        default: true,
    },
    onlineStatus: {
        type: Boolean,
        default: false
    },

    last_login_date: {
        type: Date,
        default: "",
    },

    searchableProfile: {
        type: Boolean,
        default: true
    },

    contactVisible: {
        type: Boolean,
        default: true
    },

    /* ================= AVAILABILITY SYSTEM ================= */
    available: {
        type: Boolean,
        default: false,
    },
    availability_plan: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "Availability"
        }
    ],
    availability_expiry: {
        type: Date,
        default: null
    },
    numberOfAvailability: {
        type: Number,
        default: 0
    },

    /* ================= SUBSCRIPTION ================= */
    subscriptionplan: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "subscriptionplan"
        }
    ],
    subscriptionplanexpiry: {
        type: Date,
        default: null
    },
    paymenthistory: [
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
    reviews: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "Reviews"
        }
    ],
    clients: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "client"
        }
    ],
    blog: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "Blogs"
        }
    ],
    newsTour: [
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
    rating: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "Rating"
        }
    ],

    /* ================= SERVICES & RATES ================= */

    service: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "Services"
        }
    ],
    tours: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "Tours"
        }
    ],
    incallRates: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "IncallRates"
        }
    ],
    outcallRates: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "OutcallRates"
        }
    ],
    incallService: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "IncallService"
        }
    ],
    outcallService: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "OutcallService"
        }
    ],

    /* ================= GALLERY ================= */
    avatar: {
        type: String,
        default: ""
    },
    gallery: {
        photos: [
            {
                public_id: { type: String },
                url: { type: String }
            }
        ],
        videos: [
            {
                public_id: { type: String },
                url: { type: String }
            }
        ]
    },

    /* ================= ANALYTICS ================= */
    visits: {
        type: Number,
        default: 0
    },

    /* ================= FINANCIAL ================= */
    tips: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "Tips"
        }
    ],
    earnings: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "Earnings"
        }
    ],
    payout: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "Payouts"
        }
    ],

}, {
    timestamps: true
})

const EscortModel = mongoose.model("escort", EscortSchema)

export default EscortModel;