import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addEmployee} from './redux/employees/emp-actions';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import toast from "react-hot-toast";
function AddUserModal() {
  
  const initialState = {
    empID: '',
    empName: '',
    job: '',
    email: '',
    phone: ''
  }
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [employeeInfo,setEmployeeInfo] = useState(initialState);
  const [employee,setEmployee] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // handle change
  const handleChange = (e) =>{
    const {name,value} = e.target;
    
    setEmployeeInfo((prev) => {
      return{
        ...prev,
        [name]: value
      }
    })
  }
  // handle submit data
  const handleSubmit = async(e)=>{
    e.preventDefault();
    
    try {
        const data = await axios.post("http://localhost:5000/api/insert-employee",employeeInfo);
        setShow(!show);
        setEmployeeInfo(initialState);

        toast.success("registered successfully", {
          duration: 8000,
          position: "top-center",
          style: {
            border: "1px solid #1ec072",
            padding: "16px",
            color: "#00710d",
          },
        });
        
        
    } catch (err) {
        console.log(err.message);
    }
  }
  
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add New Employee
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Employee Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form action="/" method="post" className="px-4 py-2" onSubmit={handleSubmit}>
        <div className="row">
          <div className="form-group col-4">
            <label>ID</label>
            <input type="number" 
            name="empID"
            value={employeeInfo.empID}
            onChange={handleChange}
            className="form-control"
            required
             />
          </div>
          <div className="form-group col-8">
            <label>Username</label>
            <input type="text" 
            name="empName"
            value={employeeInfo.empName}
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
            value={employeeInfo.job}
            onChange={handleChange}
            className="form-control"
            required
             />
          </div>
          <div className="form-group col-6">
            <label>Email</label>
            <input type="email" 
            name="email"
            value={employeeInfo.email} 
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
            value={employeeInfo.phone}  onChange={handleChange}
            className="form-control"
            required
            />
          </div>
          </div>
          <button className="btn btn-primary my-3" type="submit">
            Register
          </button>
        </form>
        
        </Modal.Body>
        <Modal.Footer>
         
        </Modal.Footer>
      </Modal>
    </>
  );
}



export default AddUserModal;
