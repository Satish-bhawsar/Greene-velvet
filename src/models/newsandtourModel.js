import mongoose from "mongoose";

const newsTourSchema = new mongoose.Schema({
    escortId: {
        type: String,
        required: true,
        index: true
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },

    title: {
        type: String,
        required: true,
        trim: true,
    },

    description: {
        type: String,
        required: true,
        trim: true,
    },

    media: [
        {
            url: {
                type: String,
                required: true
            },
            type: {
                type: String,
                enum: ["image", "video"],
                required: true
            }
        }
    ],

    comments: [
        {
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "UserComments",
            },
            text: {
                type: String,
                required: true,
            },
            createdAt: {
                type: Date,
                default: Date.now,
            },
        },
    ],


    likes: {
        type: Number,
        default: 0
    },

    status: {
        type: String,
        enum: ["active", "inactive", "blocked"],
        default: "active",
    },
}, {
    timestamps: true,
})

const NewsAndTourModel = mongoose.model("newsandtour", newsTourSchema);

export default NewsAndTourModel;