import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
      <div className="container-fluid d-flex justify-content-center align-items-center hero" style={{ height: '100vh',backgroundImage:`url("https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")` }}>
        <div className='row '>
          <div className="col  d-flex justify-content-center align-items-center name border border-4  ">
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