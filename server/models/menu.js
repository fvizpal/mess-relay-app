import mongoose from "mongoose";

const menuSchema = mongoose.Schema(
 {
    Id: {
          type:Number,
          required:true
    },
    Day: {
        type:String,
        required:true
    },
    Breakfast: String,
    Lunch : String,
    Snack :{ 
       type: String,
       default: "OFF"
    },
    Dinner : String
 }
);

const Menu=mongoose.model("Menu", menuSchema);
export default Menu;