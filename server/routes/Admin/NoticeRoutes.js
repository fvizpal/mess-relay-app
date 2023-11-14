import express from "express";
import { addNotice, deleteNotice, viewNotices } from "../../controllers/Admin/NoticeCtrl.js";

const Router= express.Router();

// post a new notice
Router.post("/admin/addNotice", addNotice);

// view all notice
Router.get("/admin/viewNotices", viewNotices);

// delete a notice
Router.delete("/admin/deleteNotice/:Serial", deleteNotice);

export default Router;
