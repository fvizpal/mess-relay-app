import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";

import authRoutes from "./routes/auth.js";

/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));

app.use(cors());

/* Routes */
app.use("/auth", authRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 6001;
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        app.listen(PORT, () => console.log(`Server running on Port ${PORT}`));
    })
    .catch((error) => console.log(`${error} \n did not connect`));
