import express from "express";
import { updateMenu } from "../controllers/admin.js";
import { deleteNotifs } from "../controllers/admin.js";

const router = express.Router();

router.delete("/notifs/:id", deleteNotifs);

router.patch("/menu/update/:id", updateMenu);

export default router;
