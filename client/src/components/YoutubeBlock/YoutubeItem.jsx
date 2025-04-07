import React from 'react'

export default function YoutubeItem({ item, id, price }) {
  return (
    <li className="youtube__card-item">
      <h1 className="youtube__card-title">{item.title}</h1>
      {
        item.desc.map((obj, index) => (
          <p className="youtube__card-desc" key={index}>{obj}</p>
        ))
      }
      <div className="youtube__card-bottom">
        <span className="youtube__card-price">${price}</span>
        <button className={`youtube__card-btn ${id % 2 ? 'btn--blue' : 'btn--black'}`}>Get started</button>
      </div>
    </li>
  )
}
