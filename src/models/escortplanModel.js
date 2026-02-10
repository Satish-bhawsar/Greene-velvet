import mongoose from "mongoose";

const EscortplanSchema = new mongoose.Schema({
    escortId: String,
    title: {
        type: String,
        required: true
    },
    plan: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    newPrice: {
        type: Number,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    features: [{ type: String }],
    isActive: {
        type: Boolean,
        default: true
    },
    startDate: Date,
    endDate: Date,


    billingcadence: String,
    namecard: String,
    billingaddress: String,
    paymentmethod: String

}, { timestamps: true }
);

const escortplanModel = mongoose.model("subscriptionplan", EscortplanSchema);
export default escortplanModel;