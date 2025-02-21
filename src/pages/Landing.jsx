import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
      <div className="container-fluid d-flex justify-content-center align-items-center hero" style={{ height: '100vh',backgroundImage:`url("https://img.freepik.com/free-photo/medium-shot-happy-people-working_23-2149300698.jpg?t=st=1740018760~exp=1740022360~hmac=ae7db31c5330bf7d6705d4e2f57ac6efd71b5b825ade7e0f8e4a93259b7364a7&w=996")` }}>
        <div className='row '>
          <div className="col  d-flex justify-content-center align-items-center name border border-2  ">
            <h1>NEXORA SOLUTIONS</h1>
          </div>
          <div className='d-flex justify-content-center align-items-center'>
          <Link to={'/dash'} className='btn btn-success mt-3  p-3'style={{borderRadius:10}}>Employee Details</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing