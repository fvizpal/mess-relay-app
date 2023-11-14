import mongoose from "mongoose";

const noticeSchema = mongoose.Schema({
    Serial: Number,
    description: {
        type: String,
        required : true
    }
  },
  { timestamps:true }
)

const Notice = mongoose.model("Notice", noticeSchema);

export default Notice;