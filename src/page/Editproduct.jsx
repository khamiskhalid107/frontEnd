import axios from 'axios';

import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Editproduct() {
const Navigate = useNavigate()
const {ProId} = useParams();
const [productData,setproduct]= useState({
    "ProId":"",
    "ProType":"",
    "ProPrice": "",
    "ProName":"",


});

useEffect(()=>{
    axios.get('http://localhost:8080/Product/byId'+ProId).then((response)=>{
        setproduct(response.data);
        //console.log(response.data);
    })
},[ProId]);


//const navigate=useNavigate();

const handleSubmit = (event) =>{
    event.preventDefault();

    axios.put('http://localhost:8080/Product/update/'+ProId,productData)
    
    .then(response=>{
        //navigate("/product");
        alert("Update successfull");
    }).catch(error=>{
        console.error(error);
    });
};

const handleChange = (event) => {
    const {name,value} = event.target;

    setproduct({...productData, [name]: value});
}



  return (
    <div>
    <form onSubmit={handleSubmit}>
    <h2>Update Product</h2>


<label for="fname">Product_Id:</label><br/>
<input type="text" id="pro_id" name='ProId' onChange={handleChange} value={productData.ProId} /><br/>


<label for="price">Product price:</label><br/>
<input  value={productData.ProPrice} onChange={handleChange} type="text" name="ProPrice" /><br/>

<label for="ProType">Product_Type</label><br/>
<input value={productData.ProType} onChange={handleChange} type="text" name="ProType"  /><br/><br/>

<label for="Proname">Product_Name:</label><br/>
<input  value={productData.ProName} onChange={handleChange} type="text" name="ProName" /><br/>



<button type='submit'>submit</button>

    </form>
      
    </div>
  )
}

export default Editproduct;
