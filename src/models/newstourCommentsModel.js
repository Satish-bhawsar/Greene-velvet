import mongoose from "mongoose";

const newstourCommentsSchema = new mongoose.Schema({

    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "newsandtour",
        required: true,
        index: true
    },

    userId: {
        type: String,
        required: true
    },

    comment: {
        type: String,
        required: true,
        trim: true
    }

}, { timestamps: true });

const NewstourCommentsModel = mongoose.model("NewstourComments", newstourCommentsSchema);

export default NewstourCommentsModel;