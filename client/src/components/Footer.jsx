import React from 'react'
import logo from '../assets/footer/footer-logo.png'
import whatsappIcon from '../assets/icons/footer-whatsapp-icon.svg'
import tgIcon from '../assets/icons/footer-tg-icon.svg'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer-wrapper">
                <div className="footer__top">
                    <div className="footer__left">
                        <Link to='/' className="footer__logo-link">
                            <img src={logo} alt="" className="footer__logo-img" />
                            <span className="footer__logo-text">DiscountsOnServices</span>
                        </Link>
                        <p className="footer__left-desc">It's simple, fast and economical</p>
                    </div>
                    <nav className="footer__nav">
                        <h3 className="footer__nav-title">Subscriptions</h3>
                        <ul className="footer__nav-list">
                            <li className="footer__nav-item">
                                <Link to="/netflix" className="footer__nav-link">Netflix</Link>
                            </li>
                            <li className="footer__nav-item">
                                <Link to="/youtube" className="footer__nav-link">YouTube Premium</Link>
                            </li>
                            <li className="footer__nav-item">
                                <Link to="/spotify" className="footer__nav-link">Spotify</Link>
                            </li>
                        </ul>
                    </nav>
                    <nav className="footer__nav">
                        <h3 className="footer__nav-title">Site navigation</h3>
                        <ul className="footer__nav-list">
                            <li className="footer__nav-item">
                                <a href="#!" className="footer__nav-link">About</a>
                            </li>
                            <li className="footer__nav-item">
                                <a href="#!" className="footer__nav-link">FAQ</a>
                            </li>
                            <li className="footer__nav-item">
                                <a href="#!" className="footer__nav-link">Support</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="footer__right">
                        <ul className="footer__contacts-list">
                            <li className="footer__contacts-item">
                                <a href="#!" className="footer__contacts-link">
                                    <img src={whatsappIcon} alt="" className="footer__contacts-icon" />
                                </a>
                            </li>
                            <li className="footer__contacts-item">
                            <a href="#!" className="footer__contacts-link">
                                    <img src={tgIcon} alt="" className="footer__contacts-icon" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer__bottom">
                    <span className="footer__bottom-text">Privacy Policy</span>
                    <span className="footer__bottom-text">Copyright 2021 © All Rights Reserved</span>
                    <span className="footer__bottom-text">Developed by ....</span>
                </div>
            </div>
        </div>
    </footer>
  )
}
