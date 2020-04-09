import express = require("express");
import { list, imageRouter } from './controllers/dogs'

// Our Express APP config
const app = express();
app.set("port", process.env.PORT || 3000);

// API Endpoints
app.get("/", (req, res) => {
    res.send("hello");
})
.get("/list", list)
.use("/images", imageRouter);


// export our app
export default app;