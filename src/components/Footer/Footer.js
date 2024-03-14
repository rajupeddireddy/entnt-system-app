import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import './Footer.css'

export default function Footer() {
  return (
    <footer class="footer">
    <div class="footer-container">
        <div class="footer-section">
            <h3>About Us</h3>
            <p>Learn more about our company and mission.</p>
            <a href="/about">Read More<ArrowOutwardIcon sx={{color:'blue', fontSize:'16px'}}/></a>
        </div>
        <div class="footer-section">
            <h3>Contact Us</h3>
            <p>Have questions? Contact our support team.</p>
            <a href="/contact">Get in Touch<ArrowOutwardIcon sx={{color:'blue', fontSize:'16px'}}/></a>
        </div>
        <div class="footer-section">
            <h3>Follow Us</h3>
            <p>Stay connected with us on social media.</p>
            <ul class="social-links">
                <li><a href="#" class="icon-facebook"><FacebookIcon/></a></li>
                <li><a href="#" class="icon-twitter"><XIcon/></a></li>
                <li><a href="#" class="icon-instagram"><InstagramIcon/></a></li>
            </ul>
        </div>
    </div>
    <div class="footer-bottom">
        <p>&copy; Raju Peddireddi. All rights reserved.| 2024 | Privacy Policy| Leagl | About Cookies</p>
    </div>
</footer>

  )
}
