import express from "express";
import { viewComplaints } from "../../controllers/Admin/ComplaintCtrl.js";
import { deleteComplaint } from "../../controllers/Admin/ComplaintCtrl.js";

const Router = express.Router();

// view all complaints
Router.get("/admin/complaints", viewComplaints);

//delete a complaint
Router.delete("/admin/complaint/:userId", deleteComplaint);


export default Router;