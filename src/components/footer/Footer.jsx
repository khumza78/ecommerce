import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <>
        <footer>
            <div className="container grid2">
                <div className="box">
                    <h1>Bonik</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.</p>
                    <div className="icon d_flex">
                        <div className="img d_flex">
                            <i className='fab fa-google-play'></i>
                            <span>Google Play</span>
                        </div>
                        <div className="img d_flex">
                            <i className='fab fa-app-store-ios'></i>
                            <span>App Store</span>
                        </div>
                    </div>
                </div>
                
                <div className="box">
                    <h2>About Us</h2>
                    <ul>
                        <li>Careers</li>
                        <li>Our Stories</li>
                        <li>Our Cares</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="box">
                    <h2>Customer Care</h2>
                    <ul>
                        <li>Help Center</li>
                        <li>How to Buy</li>
                        <li>Track Your Order</li>
                        <li>Corporate & Bulk Purchasing</li>
                        <li>Returns and Refunds</li>
                    </ul>
                </div>
                <div className="box">
                    <h2>Contact Us</h2>
                    <ul>
                        <li>70 Washington Square South, New York, NY 10012, United States</li>
                        <li>Email: Example@gmail.com</li>
                        <li>Phone: +123 456 123 123</li>
                    </ul>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer