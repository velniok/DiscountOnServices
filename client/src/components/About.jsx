import React from 'react'
import logo from '../assets/about/about-logo.png'
import img from '../assets/about/about-img.png'

export default function About() {
  return (
    <section className="about">
        <div className="container">
            <div className="about-wrapper">
                <h1 className="about__title title">About us</h1>
                <div className="about__content">
                    <div className="about__text">
                        <img src={logo} alt="" className="about__text-logo" />
                        <p className="about__text-desc">We offer you a subscription to various media services at the best price.</p>
                        <p className="about__text-desc">We have partnered with several companies to help you find the best prices for your media subscriptions and provide you with the best prices for the Premium subscriptions you want.</p>
                        <p className="about__text-desc about__text-desc--strong">It's simple, fast and economical.</p>
                    </div>
                    <img src={img} alt="" className="about__img" />
                </div>
            </div>
        </div>
    </section>
  )
}
