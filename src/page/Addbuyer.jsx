import axios from 'axios';
//import { error } from 'console';
import React, { useState } from 'react'

function Addbuyer() {
  const[formdata,setBuyers]=useState({
    BuyerEmail:'',
    BuyerMobile:'',
    BuyerGender:'',
  });
    const handleChange = (event) =>{
      setBuyers({...formdata,[event.target.name]: event.target.value});
    };
    const handSubmit=(event) =>{
      event.preventDefault();
      axios.post('http://localhost:8080/Buyer/add', formdata)
      .then(response =>{
        console.log(response.data);
        alert("Buyer inserted successfully");
      })
      .catch(error =>{
        console.log("error");
      })
    };
  return (
    <div>
      <form onSubmit={handSubmit}>
        <h1>Add Buyer</h1>

        <label for="address">Buyer Mobile</label><br/>
  <input value={formdata.BuyerMobile} onChange={handleChange}  type="text" name="BuyerMobile" /><br/>

  <label for="BuyerName">Buyer Name:</label><br/> 
  <input value={formdata.BuyerName} onChange={handleChange} type="text" name="BuyerName"  /><br/>
 
  <label for="email">Buyer Email</label><br/>
  <input value={formdata.BuyerEmail} onChange={handleChange} type="text" name="BuyerEmail"  /><br/><br/>

  <label for="gender">Buyer Gender</label><br/>
  <input value={formdata.BuyerGender} onChange={handleChange} type="text" name="BuyerGender"  /><br/><br/>


 
  <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Addbuyer