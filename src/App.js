import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Customer from "./page/Customer";
import Farmer from "./page/Farmer";
import Navbar from "./componet/navbar";
import Product from "./page/Product";
import Buyer from "./page/Buyer";
import Addproduct from "./page/Addproduct";
import Addfarmer from "./page/Addfarmer";
import Addbuyer from "./page/Addbuyer";
import Loginf from "./componet/Loginf";
import Registration from "./componet/Registration";


// import Addtable from "./page/Addtable";







function App() {
  return (
    // <div className="App">
    // <Customer/>
    // <Farmer/>
     
    // </div>
    <BrowserRouter>
      <Routes>
        <Route  path="farmer" element={<Farmer/>}/>
        <Route path="/navbar" element={<Navbar/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="buyer" element={<Buyer/>}/>
        <Route path="addproduct" element={<Addproduct/>}/>
        <Route path="addfarmer" element={<Addfarmer/>}/>
        <Route path="addbuyer" element={<Addbuyer/>}/>
        <Route path="/" element={<Loginf/>}/>
        <Route path="" element={<Registration/>}/>
        
        {/* <Route path="addtable" element={<Addtable/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
