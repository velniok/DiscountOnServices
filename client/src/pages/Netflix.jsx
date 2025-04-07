import React, { useEffect } from 'react'
import NetflixBlock from '../components/NetflixBlock'
import FaqBlock from '../components/FaqBlock'
import Invite from '../components/Invite'

export default function Netflix() {
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <>
      <NetflixBlock />
      <Invite />
      <FaqBlock />
    </>
  )
}
