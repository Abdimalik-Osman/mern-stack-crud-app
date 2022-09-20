const mongoose = require("mongoose");

const EmpSchema = new mongoose.Schema({
    empID: Number,
    empName: String,
    job: String,
    email: String,
    phone: Number
});
 
const Employee = mongoose.model("Employee",EmpSchema);
module.exports = Employee;