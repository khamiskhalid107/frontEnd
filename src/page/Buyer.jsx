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

  return (
    <div>
      <h2>Buyer List</h2>
      <Link to={'/Addbuyer'}><button>Add Buyer</button></Link>

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

export default Buyer;
