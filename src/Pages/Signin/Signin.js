
import React from 'react'
import './Signin.css'
function Signin() {

  return (
    <div className="container">
    <div className="signin-container">
      <h1>Sign In</h1>

      <form className='signin-form'>

        <div className="form-group">
        <label htmlFor="email">Email / Phone No:</label>
           <input type="any" id='email' name='email' required />
        </div>

        <div className="form-group">
        <label htmlFor="email">Password:</label>
           <input type="password" id='password' name='password' required />
        </div>

        <button type="submit" className='submit-btn'>Sign In</button>


      </form>


    </div>
    </div>



  )
}

export default Signin
