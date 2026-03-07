import mongoose from "mongoose";

const newstourCommentsSchema = new mongoose.Schema({

    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "newsandtour",
        required: true,
        index: true
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: "userType"
    },

    userType: {
        type: String,
        required: true,
        enum: ["Client", "Escort"]
    },

    comment: {
        type: String,
        required: true,
        trim: true
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

}, { timestamps: true });

const NewstourCommentsModel = mongoose.model("NewstourComments", newstourCommentsSchema);

export default NewstourCommentsModel;