import axios from 'axios';
import React, { useState } from 'react'




function Addproduct() {
//const[fname,setProduct_Id]=useState([]);
const[ProType,setProduct_Type]=useState([]);
const[price,setProduct_price]=useState([]);
const[proname,setProduct_Name]=useState([]);

const handSubmit=(event) =>{
  event.preventDefault();
  const mydata={
    //ProId:fname,   //taken from backend {Proid,ProType,price,name}
    ProType:ProType,
     ProPrice:price,
    ProName:proname,

    

  };
  axios.post('http://localhost:8080/Product/add', mydata)
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
<input value={ProType}onChange={Event=>setProduct_Type(Event.target.value)} type="text" id="pro_price" /><br/>

<label for="ProType">Product_Type</label><br/>
<input value={price}onChange={Event=>setProduct_price(Event.target.value)}type="text" id="pro_type"  /><br/><br/>

<label for="Proname">Product_Name:</label><br/>
<input value={proname}onChange={Event=>setProduct_Name(Event.target.value)}type="name" id="Pro_Name"  /><br/>



<button type='submit'>Submit</button>

    </form>
      
    </div>
  )
}

export default Addproduct;
