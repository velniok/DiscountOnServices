import React, { useEffect, useState } from 'react'
import closeIcon from '../../assets/icons/close-modal-icon.svg'
import googleIcon from '../../assets/icons/signin-icon-01.svg'
import facebookIcon from '../../assets/icons/signin-icon-02.svg'
import appleIcon from '../../assets/icons/signin-icon-03.svg'
import axios from 'axios'
import { Link } from 'react-router'

export default function ModalSign({ closeModal, clickOpenLoginModal }) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [users, setUsers] = useState([])

  useEffect(() => {
    let data = axios.get('http://localhost:5000/api/users')
    data.then(res => {
      setUsers(res.data)
    })
  }, [])

  const signIn = () => {
    let post = axios.post('http://localhost:5000/api/', {
      id: users.length + 1,
      email: email,
      password: password,
    })
  }

  return (
    <div className="modal-sign">
        <div className="modal__container">
            <Link to={'/'}>
              <button className="modal__close-btn" onClick={closeModal}>
                  <img src={closeIcon} alt="" className="modal__close-icon" />
              </button>
            </Link>
            <div className="modal-sign__top">
                <h1 className="modal-sign__top-title">Create an account</h1>
                <p className="modal-sign__top-desc">Already have an account? <Link to={'/login'} className="modal-sign__top-link" onClick={clickOpenLoginModal}>Sign In</Link></p>
            </div>
            <form className="modal-sign__form">
                <ul className="modal-sign__form-list">
                {/* <li className="modal-sign__form-item">
                    <label className="modal-sign__form-title">User name</label>
                    <input type="name" className="modal-sign__form-name" placeholder='Enter your name' required />
                  </li> */}
                  <li className="modal-sign__form-item">
                    <label className="modal-sign__form-title">Email Address</label>
                    <input type="email" className="modal-sign__form-email" placeholder='Enter your e-mail' value={email} onChange={e => setEmail(e.target.value)} required />
                  </li>
                  <li className="modal-sign__form-item">
                    <label className="modal-sign__form-title">Password</label>
                    <input type="password" className="modal-sign__form-password" placeholder='********' value={password} onChange={e => setPassword(e.target.value)} required />
                  </li>
                </ul>
                <Link to={'/'}>
                  <button className="modal-sign__form-submit btn--blue" onClick={signIn}>Sign up</button>
                </Link>
            </form>
            <div className="modal-sign__signin">
                <span className="modal-sign__signin-title">Or sign in with</span>
                <ul className="modal-sign__signin-list">
                  <li className="modal-sign__signin-item">
                    <img src={googleIcon} alt="" className="modal-sign__signin-icon" />
                  </li>
                  <li className="modal-sign__signin-item">
                    <img src={facebookIcon} alt="" className="modal-sign__signin-icon" />
                  </li>
                  <li className="modal-sign__signin-item">
                    <img src={appleIcon} alt="" className="modal-sign__signin-icon" />
                  </li>
                </ul>
            </div>    
        </div>
    </div>
  )
}
