import { useState, useEffect, useContext } from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import {useSelector, useDispatch} from 'react-redux'
import AddUserModal from './add-user-modal';
import { setEmployees } from "./redux/employees/emp-actions";
// import {EmployeesContext} from './context/employee';

function Home() {
    // const {allEmployees, setAllEmployees} = useContext(EmployeesContext);
    const employees = useSelector((state)=> state.allEmployees.employees);
    const dispatch = useDispatch();
    // console.log(employees)
  useEffect(()=>{
    GetAllEmployees();
  },[])
  // get data
  const GetAllEmployees = async()=>{
    try {
      const {data} = await axios.get("http://localhost:5000/api/get-all");
      dispatch(setEmployees(data.msg));

    }catch(err){
      console.log(err);
    }
  }
  
  // delete employee
  const DeleteEmployee = async (empID)=>{
    try{
        if(!confirm("ARE SURE U WANT TO DELETE THIS..")) return;

        const deleted =  await axios.delete(`http://localhost:5000/api/delete-employee/${empID}`);
        
        toast.success("Deleted Successfully", {
          duration: 8000,
          position: "top-center",
          style: {
            border: "1px solid #1ec072",
            padding: "16px",
            color: "#00710d",
          },
        });
        
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div className="container">
        <div className="d-flex justify-content-end my-3">
      <AddUserModal />
      
      </div>
      <table className="table">
        <thead className="bg-dark text-white">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Username</th>
            <th scope="col">Job</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
        {employees.length > 0 && employees.map(emp => (
          <tr key={emp._id}>
            <th scope="row">{emp.empID}</th>
            <td>{emp.empName}</td>
            <td>{emp.job}</td>
            <td>{emp.email}</td>
            <td>{emp.phone}</td>
            <td><i className="fa fa-eye bg-primary p-2 rounded-circle text-white mx-2"></i> <Link to={`/update-user/${emp.empID}`}><i className="fa fa-pencil bg-success p-2 rounded-circle text-white mx-2" ></i></Link> <i className="fa fa-trash bg-danger p-2 rounded-circle text-white" onClick={()=>DeleteEmployee(emp.empID)}></i>
            </td>
            
          </tr>
        ))}
      
        </tbody>
      </table>
    </div>
  )
}

export default Home