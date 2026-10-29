
import React from 'react';

export default function ProductList() {

    const products = [
    {
        id: 1,
        name: "House Blend",
        description: "Smooth and balanced coffee.",
        price: "₹499",
        image: "https://cdn.dotpe.in/longtail/store-items/7797628/nLEJ5Knl.webp"
    },
    {
        id: 2,
        name: "Dark Roast",
        description: "Rich and bold coffee flavour.",
        price: "₹599",
        image: "https://sleepyowl.co/cdn/shop/files/Dark_Roast_-_1st_Image_2.png?v=1773055628"
    },
    {
        id: 3,
        name: "Coffee Mug",
        description: "Perfect for your daily coffee.",
        price: "₹299",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiAc6-KkENi2RT6CQfSLAFHUExomFyAGcY4hkKN41k1A&s=10"
    }
];

return (
    <div className="productlist-title">
        <h2>Product List</h2>
        <div className="product-layout">

        {products.map((product) => (
        <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h3>{product.price}</h3>

        </div>
        ))}

    </div>
    </div>
);
}
