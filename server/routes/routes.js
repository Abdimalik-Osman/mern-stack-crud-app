const express = require('express');
const { GetAllEmployees, InsertEmployee, DeleteEmployee, UpdateEmployee} = require('../controllers/employee');

const router = express.Router();

router.get("/get-all", GetAllEmployees);
router.post("/insert-employee", InsertEmployee);
router.delete("/delete-employee/:empID", DeleteEmployee);
router.patch("/update-employee/:empID", UpdateEmployee);


module.exports = router;