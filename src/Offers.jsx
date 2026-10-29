
import React from 'react';
import "./Offers.css";

export default function Offers() {

    const offers = [
        {
            id: 1,
            name: "Coffee Lovers Deal",
            description: "Buy 2 coffee bags and get 10% off.",
            discount: "10% OFF"
        },
        {
            id: 2,
            name: "Coffee and Mug Combo",
            description: "Get a coffee bag and a mug together.",
            discount: "₹699"
        },
        {
            id: 3,
            name: "First Order Offer",
            description: "Get a discount on your first order.",
            discount: "5% OFF"
        }
    ];

return (
    <div className="offers-page">
        <h2>Special Coffee Offers</h2>
            <div className="offers-layout">
                {offers.map((offer) => (
                    <div className="offers-card" key={offer.id}>
                        <h3>{offer.name}</h3>
                        <p>{offer.description}</p>
                        <h4>{offer.discount}</h4>
                    </div>
        ))}
            </div>

    </div>
);
}
