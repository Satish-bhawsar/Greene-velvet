import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
    escortId: String,
    title: {
        type: String,
        required: [true, "Service title is required"]
    },
    label: {
        type: String,
        required: [true, "Service title is required"]
    },
    price: {
        type: Number,
        required: [true, "Service title is required"]
    },
    duration: {
        type: Number,
        required: [true, "Service title is required"]
    },
    description: String,
    isActive: {
        type: Boolean,
        default: true
    },

}, { timestamps: true }
)

const ServiceModel = mongoose.model("/service", ServiceSchema)

export default ServiceModel;