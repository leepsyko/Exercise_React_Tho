import React from 'react'
import Banner from './Banner'
import Item from './Item'

export default function Body() {
  return (
    <div className='bg-secondary'>
      <Banner />
      <div className="container px-lg-5">
        <div className="row gx-lg-5">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </div>
  )
}
