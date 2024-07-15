import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
       <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" className='footlog'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iure fugiat mollitia aliquid cumque cum aspernatur excepturi explicabo quam, culpa quod voluptatibus aut, consectetur laboriosam velit molestiae corporis adipisci debitis.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" /> 
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
           <li>Home</li>
           <li>About us</li>
           <li>Delivery</li>
           <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-223-333-4494</li>
            <li>contact@srhotel.com</li>
          </ul>
        </div>
       </div>
       <hr />
       <p className="footer-copyright">
       Copyright 2024 @ srhotel.com - All Right Reserved.
       </p>
    </div>
  )
}

export default Footer;