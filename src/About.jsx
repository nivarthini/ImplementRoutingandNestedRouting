import React from 'react'
import roastsImage from './assets/roasts.png'
import "./About.css"

export default function About() {
return (
    <div>
        <div className="about-section">
            <img src={roastsImage} alt='' width="100%" height="500px"/>
            <div className="about-content">
                <h1> About The Daily Grind</h1>
                <p> Welcome to The Daily Grind, where every cup tells a story. We are passionate about serving fresh, delicious coffee made from carefully selected beans.</p>
                <h3>Our Mission</h3>
                <p>Our mission is to provide high-quality coffee and create a wonderful experience for every coffee lover.</p>
                <h3>Our Vision</h3>
                <p>We aim to become a favourite destination for coffee lovers by offering great taste, quality, and friendly service.</p>
                <h3>Why Choose Us?</h3>
                <ul>
                    <li>Freshly roasted coffee beans</li>
                    <li>Premium quality ingredients</li>
                    <li>Friendly customer service</li>
                    <li>A variety of coffee flavours</li>
                </ul>
                <button>Discover Our Coffee</button>
            </div>
        </div>

    </div>
)
}
