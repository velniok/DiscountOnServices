import React, { useState } from 'react'
import logo from '../assets/header/logo.png'
import whatsappIcon from '../assets/icons/whatsapp-icon.svg'
import tgIcon from '../assets/icons/tg-icon.svg'
import { Link } from 'react-router-dom'
import AuthModalBlock from './AuthModalBlock/index'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [langMenuOpen, setLangMenuOpen] = useState(false)

  return (
    <header className="header">
        <div className="container">
            <div className="header-wrapper">
                <div className="header__logo">
                    <Link to="/" className="header__logo-link">
                        <img src={logo} alt="" className="header__logo-img" />
                        <span className="header__logo-text">DiscountsOnServices</span>
                    </Link>
                </div>
                <nav className="header__nav">
                    <ul className="header__nav-list">
                        <li className="header__nav-item">
                            <a href="#!" className="header__nav-link header__nav-link--menu" onClick={() => setMenuOpen(!menuOpen)}>Subscriptions</a>
                            <ul className={`header__menu-list ${menuOpen ? 'show' : ''}`}>
                                <li className="header__menu-item">
                                    <Link to='/netflix' className="header__menu-link" onClick={() => setMenuOpen(false)}>Netflix</Link>
                                </li>
                                <li className="header__menu-item">
                                    <Link to='/youtube' className="header__menu-link" onClick={() => setMenuOpen(false)}>YouTube Premium</Link>
                                </li>
                                <li className="header__menu-item">
                                    <Link to='/spotify' className="header__menu-link" onClick={() => setMenuOpen(false)}>Spotify</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="header__nav-item">
                            <Link to="/faq" className="header__nav-link">FAQ</Link>
                        </li>
                        <li className="header__nav-item">
                            <Link to="/support" className="header__nav-link">Support</Link>
                        </li>
                        <li className="header__nav-item">
                            <Link to="/about" className="header__nav-link">About</Link>
                        </li>
                    </ul>
                </nav>
                <div className="header__right">
                    <div className="header__contacts">
                        <ul className="header__contacts-list">
                            <li className="header__contacts-item">
                                <a href="#!" className="header__contacts-link">
                                    <img src={whatsappIcon} alt="" className="header__contacts-icon" />
                                </a>
                            </li>
                            <li className="header__contacts-item">
                                <a href="#!" className="header__contacts-link">
                                    <img src={tgIcon} alt="" className="header__contacts-icon" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="header__lang">
                        <span className="header__lang-title" onClick={() => setLangMenuOpen(!langMenuOpen)}>EN</span>
                        <ul className={`header__lang-list ${langMenuOpen ? 'show' : ''}`}>
                                <li className="header__lang-item">
                                    <a href='#!' className="header__lang-link">English</a>
                                </li>
                                <li className="header__lang-item">
                                    <a href='#!' className="header__lang-link">Ukraine</a>
                                </li>
                                <li className="header__lang-item">
                                    <a href='#!' className="header__lang-link">Russian</a>
                                </li>
                            </ul>
                    </div>
                    <AuthModalBlock />
                </div>
            </div>
        </div>
    </header>
  )
}
