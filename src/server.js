const express = require('express');
const connect = require("./config/db")

const app = express();
app.use(express.json());

const studentController = require("./controllers/student.controller");
app.use("/",studentController)
const start = async()=>{
    await connect();
    app.listen(2345,()=>{
        console.log("Listening on port 2345")
    })
}

module.exports = start;