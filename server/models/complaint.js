import mongoose from "mongoose";

const ComplaintSchema = mongoose.Schema(
    {
        fullName: String,
        email: String,
        room: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        picturePath: {
            type: String,
            default: "",
        },
        upvotes: Number,
        downvotes: Number,
        resolved: Boolean,
    },
    { timestaps: true }
);

const Complaint = mongoose.model("Complaint", ComplaintSchema);

export default Complaint;
