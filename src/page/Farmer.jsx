import React, { useEffect, useState } from 'react';
import './Farmer.css';
import Farmerservice from '../service/Farmerservice';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Farmer() {
  const [farmers, setFarmers] = useState([]);

  useEffect(() => {
    fetchAll();
  }, []);

  const fetchAll = async () => {
    const response = await axios.get('http://localhost:8080/Farmer/allFarmer');
    setFarmers(response.data);
  };

  return (
    <div>
      <h2>Farmer List</h2>
      <button>Add Farmer</button>

      <table>
        <thead>
          <tr>
            <th>Farmer id</th>
            <th>F_Name</th>
            <th>F_Address</th>
            <th>F_Gender</th>
            <th>F_Email</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {farmers.map((farmer, index) => (
            <tr key={farmer.id}>
              <td>{index + 1}</td>
              <td>{farmer.fname}</td>
              <td>{farmer.address}</td>
              <td>{farmer.fgender}</td>
              <td>{farmer.email}</td>
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

export default Farmer;