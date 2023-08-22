import React from 'react'
import Body from './Body/Body'
import Header from './Header.jsx/Header'

export default function Baiso2() {
  return (
    <div className='h-100' style={{backgroundImage: "url(./glassesImage/background.jpg)",backgroundSize:"Cover"}}>
      <Header />
      <Body />
    </div>
  )
}
