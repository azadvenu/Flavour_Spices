import React from 'react'
import './Register.css'
function Register() {
    return (
        <div className="container">
        <div className="register-container">
          <h1>Create an Account</h1>
          <p>
            Please fill out the form below and be part of our venture. 
          </p>
    
          <form className='register-form'>
    
    
            <div className="form-group">
               <label htmlFor="name">Name:</label>
               <input type="text" id='name' name='name' required />
            </div>
    
            <div className="form-group">
            <label htmlFor="email">Email:</label>
               <input type="email" id='email' name='email' required />
            </div>
    
            <div className="form-group">
            <label htmlFor="email">Phone No:</label>
               <input type="number" id='num' name='num' required />
            </div>
    
            <div className="form-group">
            <label htmlFor="email">Password:</label>
               <input type="password" id='password' name='password' required />
            </div>
    
            <div className="form-group">
            <label htmlFor="message">Address:</label>
             <textarea name="Address" id="Address"  rows="5" required></textarea>
            </div>
    
            <button type="submit" className='submit-btn'>Register</button>
    
    
          </form>
    
    
        </div>
        </div>
    
    
    
      )
    }


export default Register
