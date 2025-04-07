import React from 'react'
import copyIcon from '../assets/icons/copy-icon.svg'

export default function Invite() {
  return (
    <section className="invite">
        <div className="container">
            <div className="invite-wrapper">
                <div className="invite__text">
                    <h3 className="invite__title">Invite friends</h3>
                    <p className="invite__desc">Starting today up to 50% for NETFLIX, YOUTUBE, SPOTIFY subscriptions with a secure payment from PAYPAL</p>
                </div>
                <button className="invite__btn">
                    <span className="invite__btn-title">Click on the link</span>
                    <div className="invite__btn-content"> 
                        <a href="#!" className="invite__btn-link">Discounts On Services</a>
                        <img src={copyIcon} alt="" className="invite__btn-icon" />
                    </div>
                </button>
            </div>
        </div>
    </section>
  )
}
