import React, { useEffect, useState } from 'react';
import './Farmer.css';
import Farmerservice from '../service/Farmerservice';
import axios from 'axios';
import Addfarmer from './Addfarmer';
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

  const deleteFarmer = async (id) => {
    await Farmerservice.deleteFarmer(id);
    fetchAll();
  };

  return (
    <div>
      <h2>Farmer List</h2>
      <Link to={'/addfarmer'}><button>Add Farmer</button></Link>

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
                <button onClick={() => deleteFarmer(farmer.id)}>Delete</button>
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
