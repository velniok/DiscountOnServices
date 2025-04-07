import React from 'react'
import { Link } from 'react-router-dom'

export default function SubscriptionItem({ item }) {
  return (
    <li className="subscription__card-item">
        <div className="subscription__card-content">
            <h3 className="subscription__card-title">{item.title}</h3>
            <p className="subscription__card-desc desc">{item.desc}</p>
            <Link to={item.link}>
              <button className="subscription__card-btn btn--blue">Learn more</button>
            </Link>
        </div>
        <img src={item.img} alt="" className="subscription__card-img" />
    </li>
  )
}
