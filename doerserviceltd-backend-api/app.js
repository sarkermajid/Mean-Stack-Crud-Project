const express = require("express");
const cors = require("cors");
const { urlencoded } = require("express");
const app = express();
const EmployeeRouter = require("./routes/employee.route");

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use("/api/employees",EmployeeRouter);
require('./config/db')



// Handle route error
app.use((req,res,next) => {
    res.status(404).json({
        message: "Request Not Found"
    })
})

// Handle server error
app.use((err,req,res,next) => {
    res.status(5000).json({
        message: "Server Not Found"
    })
})

module.exports = app;