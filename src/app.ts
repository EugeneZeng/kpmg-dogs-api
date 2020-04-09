import { Request, Response } from "express";
import express = require("express");
import { list, imageRouter } from './controllers/dogs'

// Our Express APP config
const app = express();
app.set("port", process.env.PORT || 3000);

// API Endpoints
app
.get("/list", list)
.use("/images", imageRouter)
.all("*", (req: Request, res: Response) => res.json({code: 404, message: "Path not found."}));

// export our app
export default app;