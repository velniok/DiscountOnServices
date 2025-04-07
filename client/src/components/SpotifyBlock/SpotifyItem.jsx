import React from 'react'

export default function SpotifyItem({ item, id, price }) {
  return (
    <li className="spotify__card-item">
    <h1 className="spotify__card-title">{item.title}</h1>
    {
      item.desc.map((obj, index) => (
        <p className="spotify__card-desc" key={index}>{obj}</p>
      ))
    }
    <div className="spotify__card-bottom">
        <span className="spotify__card-price">${price}</span>
        <button className={`spotify__card-btn ${id % 2 ? 'btn--blue' : 'btn--black'}`}>Get started</button>
    </div>
  </li>
  )
}
