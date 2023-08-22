import React, { useState } from 'react'
import Item from './Item/Item'

export default function Body() {

  let [glass, setGlass] = useState("")

  const handleChangeGlass = (type) => {
    setGlass(type)
  }


  return (
    <div className='container mt-5'>
      <div className="row">
        <div className='col-6 text-center'>
          <img src="./glassesImage/model.jpg" alt="" width="250px" />
        </div>
        <div className='col-6 text-center position-relative'>
          <img src="./glassesImage/model.jpg" alt="" width="250px" />
          <div>
            <img src={glass} alt="" className='position-absolute' style={{top:" 33%", left: "50%", transform: "translate(-50%, -50%)",width:"150px"}} />
          </div>
        </div>
      </div>
      <div>
        <div className='row '>
          <Item onChangeType={handleChangeGlass}/>
        </div>
      </div>
    </div>
  )
}
