import React from 'react'
import './Contact.css';

export default function Contact() {
return (
    <div className="contact">
        <h1>Contact Us</h1>
        <p>We would love to hear from you!</p>

        <div className="contact-info">
            <h2>Get in Touch</h2>
            <p><b>Address:</b> The Daily Grind Coffee Shop</p>
            <p><b>Email:</b> hello@thedailygrind.com</p>
            <p><b>Phone:</b> +91 98765 43210</p>
        </div>
        <div className="contact-form">
        <h2>Send Us a Message</h2>

        <form>

            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="button">Send Message</button>
        </form>
        </div>
    </div>
);
}

