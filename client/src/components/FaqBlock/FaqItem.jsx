import React, { useRef, useState } from 'react'
import arrowDownIcon from '../../assets/faq/arrow-down.svg'
import arrowUpIcon from '../../assets/faq/arrow-up.svg'

export default function FaqItem({ item, clickActiveAnswer, activeAnswer }) {
    const answerText = useRef(null)

    const [answerTextHeight, setAnswerTextHeight] = useState(0)

  return (
    <li className="faq__card-item" onClick={() => {setAnswerTextHeight((prev) => prev = answerText.current.getBoundingClientRect().height); const id = item.id; clickActiveAnswer(id)}}>
        <div className="faq__card-top">
            <h3 className="faq__card-question">{item.question}</h3>
            <img src={activeAnswer === item.id ? arrowUpIcon : arrowDownIcon} alt="" className="faq__card-icon" />
        </div>
        <div className={`faq__card-answer ${activeAnswer === item.id ? 'show' : ''}`} style={ {height: `${activeAnswer === item.id ? answerTextHeight : 0 }px`} }>
            <p ref={answerText} className={`faq__card-answer-text`}>{item.answer}</p>
        </div>
    </li>
  )
}
