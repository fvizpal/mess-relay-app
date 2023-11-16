import mongoose from "mongoose";

const complaintSchema = mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        description: String,
        picturePath: String,
        upvotes: Number,
        downvotes: Number,
        resolved: Boolean,
    },
    { timestaps: true }
);

const Complaint = mongoose.model("Complaint", complaintSchema);

export default Complaint;
