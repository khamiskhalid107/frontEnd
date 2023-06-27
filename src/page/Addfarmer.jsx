import React from 'react'

function Addfarmer() {
  return (
    <div>
      <h1>dd farmer</h1>
     
      <label for="fname">Farmer Id:</label><br/>
  <input type="text" id="f_id"/><br/>
  <label for="lname">Farmer Address:</label><br/>
  <input type="text" id="Farmer address" /><br/>
  <label for="Proname">Farmer Name:</label><br/>
  
  <input type="text" id="farmer_name"  /><br/>
  <label for="lname">Farmer Email</label><br/>
  <input type="text" id="pro_type"  /><br/><br/>

  <input type="submit" value="Submit"/>
    </div>
  )
}

export default Addfarmer
