import mongoose from "mongoose";

const RatesSchema = new mongoose.Schema({
    escortId: String,
    label: {
        type: String,
        required: [true, "Service title is required"],
        trim: true
    },
    price: {
        type: Number,
        required: [true, "Service title is required"],
        trim: true
    },
    duration: {
        type: Number,
        required: [true, "Service title is required"]
    },
    isActive: {
        type: Boolean,
        default: true
    },
},{ timestamps: true }

)

const RatesModel = mongoose.model("Rates", RatesSchema)

export default RatesModel;
