import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { updateEmployee } from './Redux/Slices/EmployeeSlice';
import { useDispatch } from 'react-redux';

function EditEmployee({ employees }) {
    const dispatch = useDispatch();
    const [event, setEvent] = useState({});
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (employees) {
            setEvent({ ...employees });
        }
    }, [employees]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleEdit = (e) => {
        e.preventDefault();
        dispatch(updateEmployee(event));
        handleClose();
    };

    return (
        <>
            <button className="btn" onClick={handleShow}>
                <i className="fa-solid fa-pen-to-square text-warning fa-lg"></i>
            </button>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-grid justify-content-center align-items-center">
                        <input 
                            type="text" 
                            value={event.name || ''} 
                            onChange={(e) => setEvent({ ...event, name: e.target.value })} 
                            className="form-control mb-3" 
                            placeholder="Enter Name" 
                        />
                        <input 
                            type="text" 
                            value={event.email || ''}  
                            onChange={(e) => setEvent({ ...event, email: e.target.value })} 
                            className="form-control" 
                            placeholder="Enter Email id" 
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="warning" onClick={handleEdit}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditEmployee;
