const express = require("express");
const cors =require("cors");
const db = require('./db')

const studentsRoutes =require('./Routes/Student_routes')


const app = express();
app.use(express.json());
   
app.use(cors());



app.get("/",(req,res)=>{
    res.json("hello this is our backend")
})

app.use('/students',studentsRoutes)

app.listen(8000,()=>{
    console.log("server started")
 })  