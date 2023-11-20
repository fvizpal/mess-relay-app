import Menu from "../models/Menu.js";
import Notifs from "../models/Notifs.js";

//create New notification
export const postNotifs = async (req, res) => {
    try {
        const { description } = req.body;
        console.log(description);
        const newNotice = new Notifs({
            description,
        });
        await newNotice.save();

        res.status(201).json(newNotice);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
};

//delete Notifications
export const deleteNotifs = async (req, res) => {
    try {
        const { id } = req.params;
        const notifToDelete = await Notifs.findById(id);

        await notifToDelete.remove();

        res.status(200).json({ message: "Notif deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update mess menu
export const updateMenu = async (req, res) => {
    try {
        const { id } = req.params;
        const { type, field } = req.body;
        const updatedMenu = {};
        if (type === "breakfast") {
            updatedMenu = await Menu.findByIdAndUpdate(
                id,
                { breakfast: field },
                { new: true }
            );
        }
        if (type === "lunch") {
            updatedMenu = await Menu.findByIdAndUpdate(
                id,
                { lunch: field },
                { new: true }
            );
        }
        if (type === "snack") {
            updatedMenu = await Menu.findByIdAndUpdate(
                id,
                { snack: field },
                { new: true }
            );
        }
        if (type === "dinner") {
            updatedMenu = await Menu.findByIdAndUpdate(
                id,
                { dinner: field },
                { new: true }
            );
        }

        res.status(200).json(updateMenu);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};
