import React, { useEffect } from 'react'

import Hero from '../components/Hero'
import SubscriptionBlock from '../components/SubscriptionBlock/index'
import Steps from '../components/Steps'
import About from '../components/About'
import FaqBlock from '../components/FaqBlock/index'
import Request from '../components/Request'
import Invite from '../components/Invite'

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <>
      <Hero />
      <Hero />
      <SubscriptionBlock />
      <Steps />
      <Invite />
      <About />
      <FaqBlock />
      <Request />
    </>
  )
}
