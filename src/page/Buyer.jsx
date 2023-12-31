import React, { useEffect, useState } from 'react';
import './Buyer.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Buyersrervice from '../service/Buyersrervice';
import Addbuyer from './Addbuyer';


function Buyer() {
  const [buyer, setBuyers] = useState([]);

  useEffect(() => {
    fetchAll();
  }, []);

  const fetchAll = async () => {
    const response = await axios.get('http://localhost:8080/Buyer/allBuyer');
    setBuyers(response.data);
  };

  const handleDelete = (BuyerId) => {
    axios.delete(`http://localhost:8080/Buyer/delete${BuyerId}`)
    .then(response => {
       alert("Delete successfully");
       window.location.reload();
    })
    .catch(error => {
        console.log("error");
    })
  }

  return (
    <div>
      <h2>Buyer List</h2>
      

      <table>
        <thead>
          <tr>
            <th>Buyer id</th>
            <th>Buyer Mobile</th>
            <th>Buyer Email</th>
            <th>Buyer Gender</th>
            <th>Buyer Name</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {buyer.map((buyer, index) => (
            <tr key={buyer.id}>
              <td>{index + 1}</td>
              <td>{buyer.BuyerMobile}</td>
              <td>{buyer.BuyerEmail}</td>
              <td>{buyer.BuyerGender}</td>
              <td>{buyer.BuyerName}</td>
              <td>
                
              <button onClick={() => handleDelete(buyer.BuyerId)}>Delete</button>
                <Link to={'/Addbuyer'}><button>Add Buyer</button></Link>
                <button>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Buyer;
