import React, { useState } from 'react'
import FaqItem from './FaqItem'

export default function FaqBlock() {
    const faqCard = [
        {
            id: 1,
            question: 'The set time has passed, but the invoice has not yet arrived, what should I do?',
            answer: 'Payment optisasasasasons we currently have: PayPal, BitcoinPayment optisasasasasons we currently have: PayPal, BitcoinPayment optisasasasasons we currently have: PayPal, BitcoinPayment optisasasasasons we currently have: PayPal, Bitcoin.',
        },
        {
            id: 2,
            question: 'Can I change my Netflix account email and password after purchase?',
            answer: 'Payment options we currently have: PayPal, Bitcoin.',
        },
        {
            id: 3,
            question: 'Can I add a phone number for password recovery?',
            answer: 'Payment options we currently have: PayPal, Bitcoin.',
        },
        {
            id: 4,
            question: 'How soon will I receive the account information I ordered?',
            answer: 'Payment options we currently have: PayPal, Bitcoin.',
        },
        {
            id: 5,
            question: 'How to pay?',
            answer: 'Payment options we currently have: PayPal, Bitcoin.',
        },
    ]

    const [activeAnswer, setActiveAnswer] = useState(null)

    const clickActiveAnswer = (id) => {
        if (id === activeAnswer) {
            setActiveAnswer((prev) => prev = null)
        } else {
            setActiveAnswer((prev) => prev = id)
        }
    }

  return (
    <section className="faq">
        <div className="container">
            <div className="faq-wrapper">
                <h1 className="faq__title title">FAQ</h1>
                <div className="faq__card">
                    <ul className="faq__card-list">
                        {
                            faqCard.map((obj) => (
                                <FaqItem clickActiveAnswer={clickActiveAnswer} activeAnswer={activeAnswer} item={obj} key={obj.id} />
                            ))
                        }
                    </ul>
                </div>
                <button className="faq__btn btn--black">Support</button>
            </div>
        </div>
    </section>
  )
}
