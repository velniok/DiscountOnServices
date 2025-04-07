import React, { useEffect } from 'react'
import Invite from '../components/Invite'
import FaqBlock from '../components/FaqBlock'
import SpotifyBlock from '../components/SpotifyBlock'

export default function Spotify() {
    useEffect(() => {
      window.scrollTo(0, 0)
    })

  return (
    <>
        <SpotifyBlock />
        <Invite />
        <FaqBlock />
    </>
  )
}
