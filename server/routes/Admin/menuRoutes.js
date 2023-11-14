import express from "express";

import {viewMenu, addItemToMenu, viewDayMenu, deleteMenu, deleteDayMenu, updateDayMenu} from "../../controllers/Admin/MenuCtrl.js";
const Router = express.Router();

//get(View) Whole Menu
Router.get("/admin/getmenu", viewMenu);

// create a menu
Router.post("/admin/setmenu", addItemToMenu);

//to see Menu of a Day (we use the params(day) of our request)
Router.get("/admin/getMenu/:Day", viewDayMenu);

//Delete Menu(All Days)
Router.delete("/admin/deleteMenu", deleteMenu);

//Delete single day menu
Router.delete("/admin/deleteDayMenu/:Day", deleteDayMenu);

//Update a Day Menu(Using Patch u can update a single property of your Menu)
Router.patch("/admin/updateMenu/:Day", updateDayMenu);

export default Router;