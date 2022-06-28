import React, { Component } from 'react';
import "./index.css";
import logo from "./img/logo.png";

class Footer extends Component {
    render() {
        return (
            <footer>
                <img src={logo} alt=""></img>
                <div className='social-icons-container'>
                    <a href='https://www.facebook.com/' target="_blank" className="social-icon"></a>
                    <a href='https://www.instagram.com/' target="_blank" className="social-icon"></a>
                    <a href='https://web.whatsapp.com/' target="_blank" className="social-icon"></a>
                </div>
                <ul className='footer-menu-container'>
                    <li className="menu-item">Legal</li>
                    <li className="menu-item">Cookies</li>
                    <li className="menu-item">Privacy</li>
                    <li className="menu-item">Shipping</li>
                    <li className="menu-item">Refounds</li>
                </ul>
                <span className="copyright">&copy;2022, Labe Ninja. All rights reserved.</span>

            </footer>
        )
    }
}

export default Footer;