import React, { useEffect } from 'react'
import YoutubeBlock from '../components/YoutubeBlock'
import Invite from '../components/Invite'
import FaqBlock from '../components/FaqBlock'

export default function Youtube() {
    useEffect(() => {
      window.scrollTo(0, 0)
    })

  return (
    <>
      <YoutubeBlock />
      <Invite />
      <FaqBlock />
    </>
  )
}
