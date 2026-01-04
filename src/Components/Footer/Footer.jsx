import React from 'react'
import "./Footer.css"

import { FaRegUserCircle } from "react-icons/fa";
const Footer = () => {
return (
<div className='footer' >
 <div className="footer-top">
<div className="footer-top-left">
 <img src="" alt="" />
<p>we are the company are develop the web based application and more and we also train the students.</p>
 </div>
<div className="footer-top-right">
<div className="footer-email-input">
<FaRegUserCircle />
 <input type="email" placeholder='enter your email' />
 </div>
<div className="footer-subscribe">subscribe</div>
</div>
 </div>
<hr />
 <div className="footer-bottom">
<p className='footer-bottom-left'>© {new Date().getFullYear()} Think Academy. All rights reserved.</p>
<div className="footer-bottom-right">
 <p>term of services</p>
 <p>privacy policy</p>
 <p>connect with us</p>
</div>
</div>
 </div>
 )
}

export default Footer