import express from "express";
import { viewNotices } from "../../controllers/Student/NoticeCtrl.js";

const Router= express.Router();

// view all notice
Router.get("/student/viewNotices", viewNotices);

export default Router;
