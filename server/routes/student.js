import express from "express";
import { getNotifs } from "../controllers/student.js";

const router = express.Router();

router.get("/notifs", getNotifs);

export default router;
