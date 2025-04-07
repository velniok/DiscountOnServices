import React, { useState } from 'react'
import NetflixItem from './NetflixItem'

export default function NetflixBlock() {
  const netflixCard = [
    {
      title: 'Basic',
      desc: [
        'Ad-free music listening',
        'Play anywhere - even offline',
        'On-demand playback',
      ],
      price: 45,
    },
    {
      title: 'Standart',
      desc: [
        'Ad-free music listening',
        'Play anywhere - even offline',
        'On-demand playback',
      ],
      price: 60,
    },
    {
      title: 'Premium',
      desc: [
        'Ad-free music listening',
        'Play anywhere - even offline',
        'On-demand playback',
      ],
      price: 80,
    },
  ]

  const [tabOpen, setTabOpen] = useState(0)

  return (
    <section className="netflix">
        <div className="container">
            <div className="netflix-wrapper">
                <h1 className="netflix__title title">Choose a Netflix Plan</h1>
                <p className="netflix__desc">Listen without limits at a bargain price</p>
            </div>
            <div className="netflix__card">
                <div className="netflix__btn-list">
                  <button className={`netflix__btn-item ${tabOpen === 0 ? 'active' : ''}`} onClick={() => setTabOpen((prev) => prev = 0)}>6 months</button>
                  <button className={`netflix__btn-item ${tabOpen === 1 ? 'active' : ''}`} onClick={() => setTabOpen((prev) => prev = 1)}>12 months</button>
                </div>
                <ul className="netflix__card-list">
                   {
                    tabOpen === 0 ?
                    netflixCard.map((obj, index) => (
                      <NetflixItem key={index} item={obj} price={obj.price} id={index} />
                    )) :
                    netflixCard.map((obj, index) => (
                      <NetflixItem key={index} item={obj} price={obj.price * 2} id={index} />
                    ))
                   }
                </ul>
            </div>
        </div>
    </section>
  )
}
