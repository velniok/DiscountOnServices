import React from 'react'
import SubscriptionItem from './SubscriptionItem'

export default function SubscriptionBlock() {
    const subCard = [
        {
            title: 'Netflix subscription rates',
            desc: 'The constant contributes to the task of the same and thus the intended features and the set relation to the check and set also.',
            img: 'img/sub/sub-img-01.png',
            link: '/netflix'
        },
        {
            title: 'Spotify Premium',
            desc: 'The constant contributes to the task of the same and thus the intended features and the set relation to the check and set also.',
            img: 'img/sub/sub-img-02.png',
            link: '/spotify'
        },
        {
            title: 'YouTube Premium',
            desc: 'The constant contributes to the task of the same and thus the intended features and the set relation to the check and set also.',
            img: 'img/sub/sub-img-03.png',
            link: '/youtube'
        },
    ]
  return (
    <section className="subscription">
        <div className="container">
            <div className="subscription-wrapper">
                <h1 className="subscription__title title">Choose a subscription</h1>
                <div className="subscription__card">
                    <ul className="subscription__card-list">
                        {
                            subCard.map((obj, index) => (
                                <SubscriptionItem key={index} item={obj} />
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}
