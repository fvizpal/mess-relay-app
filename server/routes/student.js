import express from "express";
import {
    downvoteComplaint,
    getComplaints,
    getNotifs,
    upvoteComplaint,
} from "../controllers/student.js";

const router = express.Router();

router.get("/notifs", getNotifs);

router.get("/complaints", getComplaints);

router.patch("/complaint/upvote/:id", upvoteComplaint);

router.patch("/complaint/downvote/:id", downvoteComplaint);

export default router;
