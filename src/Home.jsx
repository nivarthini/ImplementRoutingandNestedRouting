import React from 'react'
import homeImage from './assets/home.jpg'
import "./Home.css"

export default function Home() {
return (
    <div>
        <div className="mainpage">
            <img src={homeImage} alt="Coffee_image" />
            <div className="home-content">
                <h3>WELCOME TO THE DAILY GRIND</h3>
                <h1>Crafted Coffee, Roasted Daily</h1>
                <p>Discover rich aromas and exceptional coffee for your everyday moments.</p>
                <button>Explore Our Coffee</button>
            </div>
        </div>
    </div>
)
}
