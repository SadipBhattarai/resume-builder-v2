const express = require("express");
const app = express();
require("dotenv").config();
const multer = require("multer");
const morgan = require("morgan");
const mongoose = require("mongoose");
const indexRouter = require("./routes")

app.use(morgan("tiny"));
app.use(express.static("public"));
app.use(express.json());
app.use(multer);

app.use("/", indexRouter);

app.use((error, req, res, next)=>{
    try {
        const errMsg = error.toString() || "Something Went Wrong";
        res.status(500).json({data: null, error: errMsg});
    } catch (error) {
        next(error)
    }
})

const PORT = process.env.PORT || 8003;


mongoose.connect(process.env.DB_URL)
.then(()=>console.log(`Database is connected...`))
.catch((e)=>console.log("Database Error", e.toString()));

app.listen(PORT, 
    ()=>console.log(`The Application is running at http://localhost:${PORT}`));