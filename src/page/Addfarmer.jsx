// import React from 'react'
import axios from 'axios'
import React, {useState} from 'react'

function Addfarmer() {
  const[formdata,setFarmer]=useState({
    Fname:'',
    Address:'',
    Fgender:'',
    Email:'',
  });

    const handleChange = (event) =>{
      setFarmer({...formdata,[event.target.name]: event.target.value});
    };
    const handSubmit=(event) =>{
      event.preventDefault();
      axios.post('http://localhost:8080:Farmer/add', formdata)
      .then(response => {
        console.log(response.data);
        alert("Farmer inserted successfully");
      })
      .catch(error => {
        console.log("error");
      })
    };
  return (
    <div>
    <form onSubmit={handSubmit}>


    <h1>Add farmer</h1>
     
     {/* <label for="fname">Farmer Id:</label><br/>
 <input type="text" id="f_id"/><br/> */}
 <label for="address">Farmer Address:</label><br/>
 <input value={formdata.Address} onChange={handleChange}  type="text" name="Address" /><br/>

 <label for="FarmerName">Farmer Name:</label><br/> 
 <input value={formdata.Fname} onChange={handleChange} type="text" name="Fname"  /><br/>
 
 <label for="email">Farmer Email</label><br/>
 <input value={formdata.Email} onChange={handleChange} type="text" name="Email"  /><br/><br/>

 <label for="gender">Farmer Gender</label><br/>
 <input value={formdata.Fgender} onChange={handleChange} type="text" name="Fgender"  /><br/><br/>


 
 <button type='submit'>Submit</button>
    </form>
      
    </div>
  )
}

export default Addfarmer
