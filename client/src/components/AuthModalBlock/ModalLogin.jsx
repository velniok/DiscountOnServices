import React, { useState } from 'react'
import closeIcon from '../../assets/icons/close-modal-icon.svg'
import googleIcon from '../../assets/icons/signin-icon-01.svg'
import facebookIcon from '../../assets/icons/signin-icon-02.svg'
import appleIcon from '../../assets/icons/signin-icon-03.svg'
import axios from 'axios'
import { Link } from 'react-router'

export default function ModalLogin({ clickOpenSignModal, clickOpenForgetPassModal, closeModal }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginIn = () => {
      let post = axios.post('http://localhost:5000/api/login', {
        email: email,
        password: password,
      })
    }

  return (
          <div className="modal-login">
            <div className="modal__container">
              <Link to={'/'}>
                <button className="modal__close-btn" onClick={closeModal}>
                  <img src={closeIcon} alt="" className="modal__close-icon" />
                </button>
              </Link>
              <div className="modal-login__top">
                <h1 className="modal-login__top-title">Log in</h1>
                <p className="modal-login__top-desc">New user? <Link to={'/registration'} className="modal-login__top-link" onClick={clickOpenSignModal}>Create an account</Link></p>
              </div>
              <form className="modal-login__form">
                <ul className="modal-login__form-list">
                  <li className="modal-login__form-item">
                    <label className="modal-login__form-title">Email Address</label>
                    <input type="email" className="modal-login__form-email" placeholder='Enter your e-mail' value={email} onChange={e => setEmail(e.target.value)} required />
                  </li>
                  <li className="modal-login__form-item">
                    <label className="modal-login__form-title">Password</label>
                    <input type="password" className="modal-login__form-password" placeholder='********' value={password} onChange={e => setPassword(e.target.value)} required />
                  </li>
                </ul>
                <div className="modal-login__form-bottom">
                  <a className="modal-login__form-forgetpass" onClick={clickOpenForgetPassModal}>Forget password?</a>
                  <Link to={'/'}>
                    <button className="modal-login__form-submit btn--blue" onClick={loginIn}>Log in</button>
                  </Link>
                </div>
              </form>
              <div className="modal-login__signin">
                <span className="modal-login__signin-title">Or sign in with</span>
                <ul className="modal-login__signin-list">
                  <li className="modal-login__signin-item">
                    <img src={googleIcon} alt="" className="modal-login__signin-icon" />
                  </li>
                  <li className="modal-login__signin-item">
                    <img src={facebookIcon} alt="" className="modal-login__signin-icon" />
                  </li>
                  <li className="modal-login__signin-item">
                    <img src={appleIcon} alt="" className="modal-login__signin-icon" />
                  </li>
                </ul>
              </div>
              <p className="modal-login__bottom-text">Protected by reCAPTCHA and subject to the Google Privacy Policy and Terms of Service.</p>
            </div>
          </div>
  )
}

