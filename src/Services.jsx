import React from 'react'
import "./Service.css"
import serviceImage from './assets/service.jpeg'

export default function Services() {
return (
    <div>
        <div className="service">
            <img src={serviceImage} alt="" width="100%" />
            <div className="service-content">
                <h1>Our Services</h1>
                <p>Welcome to The Daily Grind! We offer quality coffee and convenient services to make every coffee moment special.</p>
                <button>Contact Us Today</button>
                <h2>What We Offer</h2>

                <ul>
                    <li>Freshly Brewed Coffee</li>
                    <li>Delicious Snacks and Treats</li>
                    <li>Quick Takeaway Service</li>
                    <li>Friendly Customer Service</li>
                    <li>Comfortable Coffee Shop Atmosphere</li>
                </ul>
                <p>Our goal is to provide quality coffee, friendly service,
                and a comfortable place to relax and enjoy every moment.
                </p>
            </div>
        </div>
    </div>
)
}
