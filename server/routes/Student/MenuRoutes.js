import express from "express";

import {viewMenu, viewDayMenu} from "../../controllers/Admin/MenuCtrl.js";
const Router = express.Router();

//get(View) Whole Menu
Router.get("/student/getmenu", viewMenu);

//to see Menu of a Day (we use the params(day) of our request)
Router.get("/student/getMenu/:Day", viewDayMenu);

export default Router;