import React from 'react'
import stepsImg01 from '../assets/steps/steps-img-01.png'
import stepsImg02 from '../assets/steps/steps-img-02.png'
import stepsImg03 from '../assets/steps/steps-img-03.png'

export default function Steps() {
  return (
    <section className="steps">
        <div className="container">
            <div className="steps-wrapper">
                <h1 className="steps__title title">How it works?</h1>
                <div className="steps__card">
                    <ul className="steps__card-list">
                        <li className="steps__card-item">
                            <img src={stepsImg01} alt="" className="steps__card-img" />
                            <div className="steps__card-text">
                                <h3 className="steps__card-title">Step 1</h3>
                                <p className="steps__card-desc">Enter your account information</p>
                            </div>
                        </li>
                        <li className="steps__card-item">
                            <img src={stepsImg02} alt="" className="steps__card-img" />
                            <div className="steps__card-text">
                                <h3 className="steps__card-title">Step 2</h3>
                                <p className="steps__card-desc">Select the desired subscription and plan</p>
                            </div>
                        </li>
                        <li className="steps__card-item">
                            <img src={stepsImg03} alt="" className="steps__card-img" />
                            <div className="steps__card-text">
                                <h3 className="steps__card-title">Step 3</h3>
                                <p className="steps__card-desc">Pay your bill <br />with PayPal</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}
