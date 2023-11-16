import express from "express";
import { postNotifs } from "../controllers/admin.js";

const router = express.Router();

router.post("/notifs", postNotifs);

export default router;
