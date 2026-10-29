import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from "./Home.jsx"
import About from "./About.jsx"
import Services from "./Services.jsx"
import Products from "./Products.jsx"
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import Offers from './Offers';
import Contact from "./Contact.jsx"
import "./App.css"


export default function App() {
  return (
    <div>
      <h1><img src="https://hotemoji.com/images/dl/d/coffee-emoji-by-google.png" alt="icon" width="50px" height="50px"/>The Daily Grind</h1>
      <BrowserRouter>
      <div className="header">
        <Link to={"/Home"}>Home</Link>
        <Link to={"/About"}>About</Link>
        <Link to={"/Services"}>Services</Link>
        <Link to={"/Products"}>Products</Link>
        <Link to={"/Contact"}>Contact</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Services" element={<Services/>}/>
        <Route path="/Products" element={<Products />}>
          <Route index element={<ProductList />} />
          <Route path="ProductList" element={<ProductList />} />
          <Route path="ProductDetails" element={<ProductDetails />} />
          <Route path="Offers" element={<Offers />} />
        </Route>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
