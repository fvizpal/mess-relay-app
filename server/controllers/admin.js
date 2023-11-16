import Notifs from "../models/Notifs.js";

//create New notification
export const postNotifs = async (req, res) => {
    try {
        const newNotice = req.body;

        await newNotice.save();

        res.status(201).json(newNotice);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
};
