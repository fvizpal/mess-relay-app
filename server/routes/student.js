import express from "express";
import { getComplaints, getNotifs } from "../controllers/student.js";

const router = express.Router();

router.get("/notifs", getNotifs);

router.get("/complaints", getComplaints);

export default router;
