import React from 'react'
import EditEmployee from '../EditEmployee'
import AddEmployee from '../AddEmployee'
import { useSelector } from 'react-redux'
import { deleteEmployee } from '../Redux/Slices/EmployeeSlice'
import { useDispatch } from 'react-redux'




function Dashboard() {
    const emp = useSelector((state) => state.employeeReducer.employees)
    const dispatch=useDispatch()

    return (
        <>
            <div className='container-fluid  entry' style={{ height: '100vh', backgroundImage: `url("https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")` }}>
                <div className=" text-light">
                    <h2 className='bg-info p-3'>Employees Details</h2>
                    <AddEmployee />
                </div>
                <div className='container-fluid '>
                    {
                        emp.length > 0 ?
                            <table className="table table-bordered border-3 border-dark mt-4  ">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {
                                        emp.map(item => (
                                            <tr>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>
                                                    <EditEmployee employees={item}/>
                                                    <button className="btn" onClick={() => {dispatch(deleteEmployee(item.id))}}>
                                                        <i class="fa-solid fa-trash text-danger fa-lg"></i>
                                                    </button>
                                                </td>

                                            </tr>

                                        ))
                                    }


                                </tbody>
                            </table>
                            :
                            <h1 className='text-danger mt-3 bg-light w-50 m-auto d-flex justify-content-center'>No Employees Added Yet!!</h1>

                    }

                </div>
            </div>


        </>
    )
}

export default Dashboard