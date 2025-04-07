import React, { useState } from 'react'
import ModalLogin from './ModalLogin'
import ModalSign from './ModalSign'
import ModalForgetPass from './ModalForgetPass'
import { Link } from 'react-router'

export default function ModalAuthBlock() {
    const [openModal, setOpenModal] = useState(false)
    const [openLoginModal, setOpenLoginModal] = useState(false)
    const [openSignModal, setOpenSignModal] = useState(false)
    const [openForgetPassModal, setOpenForgetPassModal] = useState(false)

    const clickModalBackground = (e) => {
      if (e.target.classList.contains("modal__background")) {
        closeModal()
      }
    }
    
    const clickOpenModal = () => {
      document.body.classList.add('lock')
      setOpenModal(true)
      setOpenLoginModal(true)
    }

    const clickOpenLoginModal = () => {
      setOpenLoginModal(true)
      setOpenSignModal(false)
      setOpenForgetPassModal(false)
    }

    const clickOpenSignModal = () => {
      setOpenLoginModal(false)
      setOpenSignModal(true)
    }

    const clickOpenForgetPassModal = () => {
      setOpenLoginModal(false)
      setOpenForgetPassModal(true)
    }

    const closeModal = () => {
      document.body.classList.remove('lock')
      setOpenModal(false)
      setOpenLoginModal(false)
      setOpenSignModal(false)
      setOpenForgetPassModal(false)
    }

  return (
    <div className="header__login">
        <Link to={'/login'}>
          <button className="header__login-btn btn--blue" onClick={() => clickOpenModal()}>Log in</button>
        </Link>
        <div className="modal">
            <div className={`modal__background ${openModal ? 'show' : ''}`}>
              {
                openLoginModal ? 
                  <ModalLogin closeModal={closeModal} clickOpenSignModal={clickOpenSignModal} clickOpenForgetPassModal={clickOpenForgetPassModal} /> 
                  :
                openSignModal ? 
                  <ModalSign closeModal={closeModal} clickOpenLoginModal={clickOpenLoginModal} /> 
                  :
                  openForgetPassModal ?
                  <ModalForgetPass closeModal={closeModal} />
                  :
                <></>
              }
            </div>
        </div>
    </div>
  )
}
