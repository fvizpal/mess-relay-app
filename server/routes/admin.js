import express from "express";
import { resolveComplaint, updateMenu } from "../controllers/admin.js";
import { deleteNotifs } from "../controllers/admin.js";

const router = express.Router();

router.delete("/notifs/:id", deleteNotifs);

router.patch("/complaint/resolved/:id", resolveComplaint);

router.patch("/menu/update/:id", updateMenu);

export default router;
