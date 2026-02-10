import mongoose from "mongoose";

const subcriptionplanSchema = new mongoose.Schema({
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
    totalSpots: { 
        type: Number, 
        default: 100 
    },
    spotsLeft: { 
        type: Number, 
        default: 100 
    },

    isplanActive: { 
        type: Boolean, 
        default: true 
    }
}, { timestamps: true }
); 
const subcribeModel = mongoose.model("subcriptionplans", subcriptionplanSchema);
export default subcribeModel;