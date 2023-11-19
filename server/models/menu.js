import mongoose from "mongoose";

const menuSchema = mongoose.Schema({
    Day: {
        type: String,
        required: true,
    },
    Breakfast: String,
    Lunch: String,
    Snack: String,
    Dinner: String,
});

const Menu = mongoose.model("Menu", menuSchema);
export default Menu;
