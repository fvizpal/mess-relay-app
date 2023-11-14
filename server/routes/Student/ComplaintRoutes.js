import express from "express";
import { addComplaint, deleteComplaint, viewComplaints } from "../../controllers/Student/ComplaintCtrl.js";

const Router = express.Router();

//  add complaint
Router.post("/student/complaint", addComplaint);

// view all complaints
Router.get("/student/complaints", viewComplaints);

//delete a complaint
Router.delete("/student/complaint/:userId", deleteComplaint);

export default Router;