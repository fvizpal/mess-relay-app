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
