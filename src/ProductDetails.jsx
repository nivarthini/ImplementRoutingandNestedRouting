
import React from 'react';
import "./ProductDetails.css";


export default function ProductDetails() {

    const products = [
        {
        id: 1,
        name: "House Blend",
        price: "₹499",
        weight: "250 g",
        roast: "Medium Roast",
        flavour: "Chocolate and Nuts",
        image: "https://cdn.dotpe.in/longtail/store-items/7797628/nLEJ5Knl.webp"
        },
        {
        id: 2,
        name: "Dark Roast",
        price: "₹599",
        weight: "250 g",
        roast: "Dark Roast",
        flavour: "Rich and Bold",
        image: "https://sleepyowl.co/cdn/shop/files/Dark_Roast_-_1st_Image_2.png?v=1773055628"
        },
        {
        id: 3,
        name: "Coffee Mug",
        price: "₹299",
        weight: "350 ml",
        roast: "Not applicable",
        flavour: "Daily Use",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiAc6-KkENi2RT6CQfSLAFHUExomFyAGcY4hkKN41k1A&s=10"
        }
    ];

return (
    <div className="details-page">
        <h2>Product Details</h2>
        <div className="details-layout">
            {products.map((product) => (
                <div className="details-card" key={product.id}>
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <h4>{product.price}</h4>
                    <p>Weight: {product.weight}</p>
                    <p>Roast: {product.roast}</p>
                    <p>Flavour / Use: {product.flavour}</p>

                </div>
        ))}
        </div>

    </div>
);
}
