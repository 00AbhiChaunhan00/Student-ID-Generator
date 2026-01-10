import React from 'react'
import { Link } from 'react-router-dom'
const HomePage = () => {

  return (
   <>
      <div className="hero">
    <div className="hero-content">
      <h1>Generate Your Student ID Instantly</h1>
      <p>Fill in the student details and create an official student ID card quickly and securely. Perfect for institutes and students alike.</p>

<Link to="/form" className="btn btn-primary">Create ID</Link>
  
    </div>


    <div className="hero-image">
      <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Student ID Illustration"/>
    </div>
  </div>
   </>
  )
}

export default HomePage
