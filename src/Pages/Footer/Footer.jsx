import React from 'react'
import "./Footer.scss"

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { PiTelegramLogoBold } from "react-icons/pi";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='Footer'>
        <div className="block">
                <div className="cantact">
                    <img src="./img/Logo (1).png" alt="" />
                    <p>Funking is the a popular Ecommerce site. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    <div className="logos">
                    <FaFacebookF className='i' />
                    <FaTwitter className='i' />
                    <AiFillInstagram className='i' />
                    <PiTelegramLogoBold className='i' />
                    </div>
                </div>
                <div className="help">
                    <h3>Help</h3>
                    <Link><p>Privacy Policy</p></Link>
                    <Link><p>Shipping & Delivery</p></Link>
                    <Link><p>Refund Policy</p></Link>
                    <Link><p>Track Your  Order</p></Link>
                </div>
                <div className="Store">
                <h3>Store</h3>
                    <Link><p>Furniture</p></Link>
                    <Link><p>Tabble</p></Link>
                    <Link><p>Sofa</p></Link>
                    <Link><p>Other</p></Link>
                </div>
                <div className="Supports">
                <h3>Supports</h3>
                    <Link><p>Feedbcak</p></Link>
                    <Link><p>Contact us</p></Link>
                    <Link><p>Download app</p></Link>
                    <Link><p>Terms conditins</p></Link>
                </div>
        </div>
        <div className="yil">
                <p>© 2021 Funking - All rights reserved.</p>

                <ul>
                    <li>Privacy</li>
                    <li>Security</li>
                    <li>Terms</li>
                </ul>
        </div>
        
    </div>
    
  )
}

export default Footer