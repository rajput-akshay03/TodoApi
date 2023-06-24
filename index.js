const express = require("express");
const app= express();
require("dotenv").config();
const PORT = process.env.PORT || 4000;
// middleware to parse json req body
app.use(express.json()); 
const todoRoutes = require("./routes/todos");
// mount to api routes
app.use("/api/v1",todoRoutes);
app.listen(PORT,()=>{
    console.log(`server started successfully at ${PORT}`);
})
const dbConnect = require("./config/database");
dbConnect();
app.get("/",(req,res)=>{res.send("akshay rajput")});