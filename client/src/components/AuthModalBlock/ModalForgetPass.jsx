import React from 'react'
import closeIcon from '../../assets/icons/close-modal-icon.svg'

export default function ModalForgetPass({ closeModal }) {
  return (
    <div className="modal">
        <div className="modal__backgound">
            <div className="modal__sign">
                <div className="modal__container">
                    <button className="modal__close-btn" onClick={closeModal}>
                        <img src={closeIcon} alt="" className="modal__close-icon" />
                    </button>
                    Forget Password
                </div>
            </div>
        </div>
    </div>
  )
}