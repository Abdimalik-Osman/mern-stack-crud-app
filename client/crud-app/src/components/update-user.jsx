import React, {useState,useContext} from "react";
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';
import toast from "react-hot-toast";
import {EmployeesContext} from './context/employee';
function UpdateUser() {
  const {allEmployees} = useContext(EmployeesContext);
  
  const {empID} = useParams();
  const info = allEmployees.filter(emp => emp.empID === Number(empID));

  const [updateEmp,setUpdateEmp] = useState(info[0]);
  
  // handle changes
  const handleChange = (e) =>{
    const {name,value} = e.target;
    setUpdateEmp(prev =>  (
      {...prev, [name]:value}
    ))
  }

  const navigate = useNavigate();
  // handle submit 
  const handleSubmit = (e) =>{
    e.preventDefault();
    submitData();
    navigate('/')
  }
  const submitData = async () =>{
    try {
        const data = await axios.put(`http://localhost:5000/update-employee/${empID}`,updateEmp);
        toast.success("Updated successfully", {
          duration: 8000,
          position: "top-center",
          style: {
            border: "1px solid #1ec072",
            padding: "16px",
            color: "#00710d",
          },
        });
        console.log(data);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="container w-50 shadow-lg">
    <h1 className="text-center  text-white pt-2">UPDATE EMPLOYEES FORM</h1>
    <form action="/" method="post" onSubmit={handleSubmit} className="px-4 py-2">
        <div className="row">
          <div className="form-group col-4">
            <label>ID</label>
            <input type="number" 
            name="empID"
            value={updateEmp.empID}
            onChange={handleChange}
            className="form-control"
            required
             />
          </div>
          <div className="form-group col-8">
            <label>Username</label>
            <input type="text" 
            name="empName"
            value={updateEmp.empName}
            onChange={handleChange}
            className="form-control"
            required
             />
          </div>
          </div>

        <div className="row">
          <div className="form-group col-6">
            <label>Job</label>
            <input type="text" 
            name="job"
            value={updateEmp.job}
            onChange={handleChange}
            className="form-control"
            required
             />
          </div>
          <div className="form-group col-6">
            <label>Email</label>
            <input type="email" 
            name="email"
            value={updateEmp.email}
            onChange={handleChange}
            className="form-control"
            required
            />
          </div>
          </div>

        <div className="row">
          <div className="form-group">
            <label>Phone</label>
            <input type="tel" 
            name="phone"
            value={updateEmp.phone}
            onChange={handleChange}
            className="form-control"
            required
            />
          </div>
          </div>
          <button className="btn btn-primary my-3" type="submit">
            Update
          </button>
        </form>
    </div>
  );
}

export default UpdateUser;
