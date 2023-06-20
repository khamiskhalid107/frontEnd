import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Customer from "./page/Customer";
import Farmer from "./page/Farmer";
import Navbar from "./componet/navbar";
import Product from "./page/Product";
import Buyer from "./page/Buyer";







function App() {
  return (
    // <div className="App">
    // <Customer/>
    // <Farmer/>
     
    // </div>
    <BrowserRouter>
      <Routes>
        <Route  path="farmer" element={<Farmer/>}/>
        <Route path="/" element={<Navbar/>}/>
        <Route path="product" element={<Product/>}/>
        <Route path="buyer" element={<Buyer/>}/>
        <Route path="addtable" element={<addtable/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
