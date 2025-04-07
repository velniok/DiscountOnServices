import React, { useState } from 'react'
import YoutubeItem from './YoutubeItem'

export default function YoutubeBlock() {
      const youtubeCard = [
        {
          title: 'Music',
          desc: [
            'YouTube and YouTube Music without ads, in the background and offline',
          ],
          price: 60,
        },
        {
          title: 'Premium',
          desc: [
            'Listen to music without ads, in the background and offline',
          ],
          price: 80,
        },
      ]
    
      const [tabOpen, setTabOpen] = useState(0)

  return (
    <section className="youtube">
            <div className="container">
                <div className="youtube-wrapper">
                    <h1 className="youtube__title title">Choose a YouTube Plan</h1>
                    <p className="youtube__desc">Listen without limits at a bargain price</p>
                </div>
                <div className="youtube__card">
                    <div className="youtube__btn-list">
                      <button className={`youtube__btn-item ${tabOpen === 0 ? 'active' : ''}`} onClick={() => setTabOpen((prev) => prev = 0)}>6 months</button>
                      <button className={`youtube__btn-item ${tabOpen === 1 ? 'active' : ''}`} onClick={() => setTabOpen((prev) => prev = 1)}>12 months</button>
                    </div>
                    <ul className="youtube__card-list">
                       {
                        tabOpen === 0 ?
                        youtubeCard.map((obj, index) => (
                          <YoutubeItem key={index} item={obj} price={obj.price} id={index} />
                        )) :
                        youtubeCard.map((obj, index) => (
                          <YoutubeItem key={index} item={obj} price={obj.price * 2} id={index} />
                        ))
                       }
                    </ul>
                </div>
            </div>
        </section>
  )
}
