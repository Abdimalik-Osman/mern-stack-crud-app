const Employee = require("../models/models");

const GetAllEmployees = async (req, res) =>{
    try{
        const employee = await Employee.find();
        res.json({"status":200, "msg": employee});
    }catch(err){
        console.log(err.message);
    }
}



const InsertEmployee = async (req, res) =>{
    try{
        const {empID,empName,job,email,phone} = req.body;
        const newEmployee = await new Employee({empID,empName,job,email,phone});
        newEmployee.save((err)=>{
            if(err) return console.log(err.message);
            console.log("new Employee Inserted Successfully");

        })
        res.json({"status":200,msg:"Successfully Inserted New Employee"});
    }catch(err){
        console.log(err.message);
    }
}

const DeleteEmployee = async (req,res)=>{
    try{
        const deletedEmp = await Employee.deleteOne({empID:req.params.empID});
        res.json({"status":200,msg:"Successfully Deleted Employee.."});
        
    }catch(err){
        console.log(err.message);
    }
}
const UpdateEmployee = async (req,res)=>{
    try {
        const _empID = req.params.empID;
    
        const updated = await Employee.update({empID:_empID},{$set:req.body},(err)=>{

        });
        res.json({"status":200,"msg":"Successfully Updated Employee"})
    } catch (err) {
        console.log(err)
    }
}
module.exports = {GetAllEmployees, InsertEmployee,DeleteEmployee,UpdateEmployee}