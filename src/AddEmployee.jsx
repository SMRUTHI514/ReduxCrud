import React, { use } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addEmployee } from './Redux/Slices/EmployeeSlice';
import { useDispatch } from 'react-redux';


function AddEmployee() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [add, setAdd] = useState({
    id: "", name: "", email: ""
  })
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose()
    const newEmployee = {
      ...add, id: Date.now()
    }
    dispatch(addEmployee(newEmployee))

    setAdd({
      id: "",
      name: "",
      email: ""
    })


  };

  return (
    <>
      <>
        <button className="btn btn-success mt-4 p-3" onClick={handleShow} style={{ borderRadius: 10 }}>Add Employee</button>
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} className='add' style={{ backgroundImage: `url("https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/512x512/shadow/businessman_add.png")` }}>
          <Modal.Header closeButton>
            <Modal.Title>New Employee</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='d-grid w-100 justify-content-center'>
              <input type="text" className="form-control mb-3" onChange={(e) => { setAdd({ ...add, name: e.target.value }) }} placeholder='Enter Name' />
              <input type="text" className="form-control" onChange={(e) => { setAdd({ ...add, email: e.target.value }) }} placeholder='Enter Email id' />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>Add</Button>
          </Modal.Footer>
        </Modal>
      </>
    </>
  )
}

export default AddEmployee