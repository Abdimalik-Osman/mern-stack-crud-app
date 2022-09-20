const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const dotenv = require("dotenv");
const PORT = 5000;

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(routes)

mongoose.connect("mongodb://localhost:27017/employeeDB",
{ useNewUrlParser: true },(err)=>{
    if(err){
       return console.log(err.message);
    }
    else{
        console.log("CONNECTED SUCCESSFULLY....")
    }
})


app.use("/api",routes);

app.listen(process.env.PORT || PORT,()=>{
    console.log("The Sever is Listening on port "+PORT );
})