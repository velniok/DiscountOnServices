import React from 'react'

export default function NetflixItem({ item, id, price }) {
  return (
    <li className="netflix__card-item">
      <h1 className="netflix__card-title">{item.title}</h1>
      {
        item.desc.map((obj, index) => (
          <p className="netflix__card-desc" key={index}>{obj}</p>
        ))
      }
      <div className="netflix__card-bottom">
        <span className="netflix__card-price">${price}</span>
        <button className={`netflix__card-btn ${id % 2 ? 'btn--blue' : 'btn--black'}`}>Get started</button>
      </div>
    </li>
  )
}
