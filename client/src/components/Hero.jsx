import React from 'react'
import heroImg from '../assets/hero/hero-img.png'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero__content">
            <h1 className="hero__content-title title">Start enjoying a benefit of up to 50%</h1>
            <p className="hero__content-desc desc">You have always wanted to get the same product at a special price for you, without haggling - and it is yours.</p>
            <button className="hero__content-btn btn--white">Start using</button>
          </div>
          <img src={heroImg} alt="" className="hero__img" />
        </div>
      </div>
    </section>
  )
}
