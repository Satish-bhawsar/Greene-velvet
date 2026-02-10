import mongoose from "mongoose";

const EscortpreferSchema = new mongoose.Schema({
    escortId: { type: String, },
    escortprefer: { type: [String], default: [] }

}, {
    timestamps: true
})
const EscortpreferModel = mongoose.model("escortprefer", EscortpreferSchema)

export default EscortpreferModel;