import Complaint from "../models/Complaint.js";
import Notifs from "../models/Notifs.js";

export const getNotifs = async (req, res) => {
    try {
        const notifs = await Notifs.find();
        res.status(200).json(notifs);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

export const postComplaint = async (req, res) => {
    try {
        const { fullName, email, room, discription, picturePath } = req.body;

        const newComplaint = new Complaint({
            fullName,
            email,
            room,
            discription,
            picturePath,
        });

        const savedComplaint = await newComplaint.save();
        res.send(201).json(savedComplaint);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
