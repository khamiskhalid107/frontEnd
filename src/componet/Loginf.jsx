import React from 'react'
import './Loginf.css'
import { Link } from 'react-router-dom'



function Loginf() {
  return (
    <div >
       <h1>LOGIN FORM</h1>

      
           


   


    <input required type="email" id ="email" placeholder="email address"/><br/>


    <input required type="password" id ="pass" placeholder="password"/><br/>


   


    
    <Link to={'/login'}><button>Register</button></Link>


    <a href="#">forget password</a>
    <a href="registration form.html">have an account? please regester</a>
    
    <Link to={'/navbar'}><button class="button">Login</button></Link>
    </div>
  )
}

export default Loginf
