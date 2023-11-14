import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

import authRoutes from "./routes/auth.js";

//importing models
import Menu from "./models/menu.js";
import MenuRoutes from "./routes/menuRoutes.js"

import { verifyToken } from "./middleware/auth.js";
import { connect } from "http2";

/* CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// dotenv config
dotenv.config();
const app = express();
//MiddleWares
app.use(express.json());  
app.use(express.urlencoded({extended:false}));
app.use(MenuRoutes);       // for using routes of Menu

app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));
 
/* Routes */
app.use("/auth", authRoutes);


// MONGOOSE SETUP (firstly connect the database then fire the server)
const PORT = process.env.PORT || 6001;
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(PORT,  ()=>{
        console.log(`server running on port ${PORT}`);
    }) 
})
.catch((err)=> console.log(err));



// ROUTES 
// get req
app.get("/", (req,res)=>{
    res.send("This is HomePage");
})

app.get("/login", (req,res)=>{
    res.send("This is LoginPage");
})

app.get("/register", (req,res)=>{
    res.send("This is registerPage");
})

app.get("/contact", (req,res)=>{
    res.send("This is Contact Us Page");
})

app.get("/admin", (req,res)=>{
    res.send("This is Admin Portal");
})


