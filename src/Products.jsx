import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import "./Product.css"
import productImage from './assets/product.png'

export default function Products() {
return (
    <div className="products">
        <div className="product-hero">
            <img src={productImage} alt=""/>

        <div className="product-content">
            <h1>Our Products</h1>
            <p> Discover the perfect coffee for every moment.
            From rich espresso to creamy cappuccino, explore
            our freshly prepared beverages made with love.
            </p>


        <div className="product-menu">
            <Link to="ProductList">Product List</Link>
            <Link to="ProductDetails">Product Details</Link>
            <Link to="Offers">Offers</Link>
        </div>
        </div>
        </div>
        <div className="product-output">
        <Outlet />
        </div>
    </div>
)
}
