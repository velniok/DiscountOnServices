import React, { useState } from 'react'
import SpotifyItem from './SpotifyItem'

export default function SpotifyBlock() {
      const spotifyCard = [
        {
          title: 'Individual',
          desc: [
            'Ad-free music listening',
            'Play anywhere - even offline',
            'On-demand playback',
          ],
          price: 47,
        },
        {
          title: 'Duo',
          desc: [
            '2 Premium accounts for a couple under one roof',
            'Ad-free music listening, play offline, on-demand playback',
          ],
          price: 57,
        },
        {
          title: 'Family',
          desc: [
            '6 Premium accounts for family members living under one roof',
            'Block explicit music',
            'Ad-free music listening, play offline, on-demand playback',
          ],
          price: 77,
        },
      ]
    
      const [tabOpen, setTabOpen] = useState(0)

  return (
    <section className="spotify">
            <div className="container">
                <div className="spotify-wrapper">
                    <h1 className="spotify__title title">Choose a Spotify Plan</h1>
                    <p className="spotify__desc">Listen without limits at a bargain price</p>
                </div>
                <div className="spotify__card">
                    <div className="spotify__btn-list">
                      <button className={`spotify__btn-item ${tabOpen === 0 ? 'active' : ''}`} onClick={() => setTabOpen((prev) => prev = 0)}>6 months</button>
                      <button className={`spotify__btn-item ${tabOpen === 1 ? 'active' : ''}`} onClick={() => setTabOpen((prev) => prev = 1)}>12 months</button>
                    </div>
                    <ul className="spotify__card-list">
                       {
                        tabOpen === 0 ?
                        spotifyCard.map((obj, index) => (
                          <SpotifyItem key={index} item={obj} price={obj.price} id={index} />
                        )) :
                        spotifyCard.map((obj, index) => (
                          <SpotifyItem key={index} item={obj} price={obj.price * 2} id={index} />
                        ))
                       }
                    </ul>
                </div>
            </div>
        </section>
  )
}
