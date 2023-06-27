import axios from 'axios';
import React, { useState } from 'react'




function Addproduct() {
//const[fname,setProduct_Id]=useState([]);
  const[formdata,setProduct]=useState({
    ProType:'',
    ProPrice:'',
    ProName:'',

  });

  const handleChange = (event) =>{
    setProduct({...formdata, [event.target.name]: event.target.value});
  };
//const[price,setProduct_price]=useState([]);
//const[proname,setProduct_Name]=useState([]);

const handSubmit=(event) =>{
  event.preventDefault();
  //const mydata={
    //ProId:fname,   //taken from backend {Proid,ProType,price,name}
    axios.post('http://localhost:8080/Product/add', formdata)
    .then(response => {
      console.log(response.data);
      alert("Product inserted successfully");
    })
    .catch(error => {
      console.log("error");
    })
  };

    

  



  return (
    <div>
    <form onSubmit={handSubmit}>
    <h2>Add Product</h2>


{/* <label for="fname">Product_Id:</label><br/>
<input value={fname}onChange={Event=>setProduct_Id(Event.target.value)}type="text" id="pro_id" /><br/> */}


<label for="price">Product price:</label><br/>
<input value={formdata.ProPrice} onChange={handleChange}  type="text" name="ProPrice" /><br/>

<label for="ProType">Product_Type</label><br/>
<input value={formdata.ProType} onChange={handleChange} type="text" name="ProType"  /><br/><br/>

<label for="Proname">Product_Name:</label><br/>
<input value={formdata.ProName}  onChange={handleChange} type="name" name="ProName"  /><br/>



<button type='submit'>Submit</button>

    </form>
      
    </div>
  )
}

export default Addproduct;
