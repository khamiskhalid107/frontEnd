import React from 'react'
import './Registration.css'
function Registration() {
  return (
    <div>
         <h1>REGISTRATION FORM</h1>

      
           


<input required type="text" id ="fname" placeholder="first name"/><br/>


<input required type="text" id ="lname" placeholder="last name"/><br/>


<input required type="email" id ="email" placeholder="email address"/><br/>


<input required type="password" id ="pass" placeholder="password"/><br/>


<input required type="password" id ="cpass" placeholder="confirm password"/><br/>


<button class="button">Submit</button>



<a href="#">forget password</a>
<a href="registration form.html">have an account? please regester</a>
<button class="button">Login</button>

    </div>
  )
}

export default Registration
