import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({

    escortId: {
        type: String,
        required: true,
        index: true
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Escort",
        required: true,
        index: true
    },

    // Booking Date
    date: {
        type: String,   // "YYYY-MM-DD"
        required: true
    },

    // Time Slot
    startTime: {
        type: String,   // "09:00"
        required: true
    },

    endTime: {
        type: String,   // "10:00"
        required: true
    },

    // All Day Booking
    isAllDay: {
        type: Boolean,
        default: false
    },
    notAvailable: {
        type: Boolean,
        default: false
    },
    type: {
        type: String,
        enum: ["booking", "availability"],
    },

    // Status
    status: {
        type: String,
        enum: ["active", "completed", "cancel"],
        default: "active"
    },

    // Optional Note / Title
    title: {
        type: String,
        default: ""
    },


}, {
    timestamps: true
});

export const BookingModel = mongoose.model("Bookings", bookingSchema);