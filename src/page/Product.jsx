import React, { useEffect, useState } from 'react';
import './Product.css';
import Productservice from '../service/Productservice';
import axios from 'axios';
import Addproduct from './Addproduct';
import { Link } from 'react-router-dom';

const Product = () => {
  //const [products, setProducts] = useState([]);

  const [datas, setData] = useState([]);

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
       window.location.reload();
    })
    .catch(error => {
        console.log("error");
    })
  }

  const handleInsert = () => {
    const proId = 1;
    const proPrice = 100;
    const proName = "Product Name";
    const proType = "Product Type";

    const product = {
      ProId: proId,
      ProPrice: proPrice,
      ProName: proName,
      ProType: proType
    };

    axios.post('http://localhost:8080/Product/add', product)
    .then(response => {
      alert("Product inserted successfully");
    })
    .catch(error => {
      console.log("error");
    })
  };

  return (
    <div>
      <h2>Product List</h2>
      <Link to={"/addproduct"}><button>Add Product</button></Link>

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
      <button onClick={handleInsert}>Insert Product</button>
    </div>
  );
}

export default Product;
