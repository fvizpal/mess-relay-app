import Notifs from "../models/Notifs.js";

export const getNotifs = async (req, res) => {
    try {
        const notifs = await Notifs.find();
        res.status(200).json(notifs);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};
