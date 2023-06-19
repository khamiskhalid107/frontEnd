import React, { useEffect, useState } from 'react';
import './Product.css';
import Productservice from '../service/Productservice';
import axios from 'axios';

function Product() {
  const [product, setProduct] = useState([]);

 useEffect(() => {
   fetchAll();
 }, []);

   const fetchAll = async () => {
    const response = await axios.get('http://localhost:8080/Product/allProduct');
     setProduct(response.data);
   };

   return (
     <div>
       <h2>Product List</h2>
       <button>Add Product</button>

       <table>
         <thead>
           <tr>
             <th>Product id</th>
             <th>pro_price</th>
             <th>pro_name</th>
             <th>pro_type</th>
            <th>Action</th>
           </tr>
         </thead>

         <tbody>
           {product.map((product, index) => (
             <tr key={product.id}>
               <td>{index + 1}</td>
               <td>{product.pro_price}</td>
               <td>{product.pro_name}</td>
               <td>{product.pro_type}</td>
               
               <td>
                
                 <button>Delete</button>
                 <button>Update</button>
               </td>
             </tr>
           ))}
         </tbody>
       </table>
     </div>
   );
 }

 export default Product;