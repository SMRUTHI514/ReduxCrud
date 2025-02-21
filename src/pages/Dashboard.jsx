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
            <div className='container-fluid  entry' style={{ height: '100vh', backgroundImage: `url("https://img.freepik.com/free-photo/businessman-application-human-digital-business_1150-1729.jpg?t=st=1740020942~exp=1740024542~hmac=bdf9077da2135f85a5c9f84aefcc924c09887549541d7671325ca60e48374f32&w=996")` }}>
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