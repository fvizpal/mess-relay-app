import express from "express";
import { postNotifs } from "../controllers/admin.js";
import { deleteNotifs } from "../controllers/admin.js";

const router = express.Router();

router.delete("/notifs/:id", deleteNotifs);

export default router;
