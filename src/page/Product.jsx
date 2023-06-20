import React, { useEffect, useState } from 'react';
import './Product.css';
import Productservice from '../service/Productservice';
import axios from 'axios';



const Product = () => {
  //const [products, setProducts] = useState([]);

  const [datas , setData] = useState ([]);

  useEffect(() => {
    fetchAll();
  }, []);

  const fetchAll = async () => {
    try {
      const response = await axios.get('http://localhost:8080/Product/allProduct');
      setData(response.data);
      //console.log(response.data);
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  };

  const handleDelete = (productId) => {
    axios.delete(`http://localhost:8080/Product/delete${productId}`)
    .then(response => {
       alert("Delete successfull");
    })
    .catch(error => {
        console.log("error");
    })
  }
    //
    
//   const handleUpdate = (productId) => {
//     // Implement the logic to update the product
//     // You can navigate to a different page or show a form for updating the product
//   };

//   const handleAddProduct = () => {
//     // Implement the logic to add a new product
//     // You can navigate to a different page or show a form for adding a new product
//   };

  return (
    <div>
      <h2>Product List</h2>
      <button >Add Product</button>

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
          {datas.map((item, index) => (
            <tr key={item.ProId}>
              <td>{item.ProId}</td>
              <td>{item.ProPrice}</td>
              <td>{item.ProName}</td>
              <td>{item.ProType}</td>

              <td>
                <button >Update</button>
                <button  onClick={() => handleDelete(item.ProId)}>Delete</button>
              </td>
            </tr>
          ))};
        </tbody>
      </table>
    </div>
  );
}

export default Product;
