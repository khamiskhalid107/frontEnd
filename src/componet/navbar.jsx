import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import Farmer from '../page/Farmer'
import Product from '../page/Product'

function Navbar() {
  return (
    <div>
       <header> 
    
    
  On Line Marketing
</header>

<section>
  <nav>
  <h1>Dashboard</h1>
    <ul>
    {/* <li><a href="#"><Link to='about'>{<Farmer />}ffff</Link></a></li><br></br> */}

      <li><a href="#"><Link to='farmer'>  Farmer</Link></a></li><br></br>
      <li><a href="#"><Link to='product'>Product</Link></a></li><br></br>
      <li><a href="#"><Link to='buyer'>Buyer</Link></a></li>
    </ul>
  </nav>
  
  <article>
    <h1>Welcome To Perishable Of Agricultural Products.</h1>
    <p>Welcome To Perishable Of Agricultural Products.</p>
    <p>perishable of agricultural products such as vegetables, potatoes as well as fruits.</p>
  </article>
</section>

<footer>
  <p>Footer</p>
</footer>
    </div>
  )
}

export default Navbar
