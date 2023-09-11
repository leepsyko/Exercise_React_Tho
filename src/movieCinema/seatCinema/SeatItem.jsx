import React from 'react'
import { useDispatch } from 'react-redux'

export default function SeatItem({ seat,isSelected }) {



    const dispatch = useDispatch()

    const handleSelected = () => {
// isSelected = !isSelected
        
        console.log(isSelected)
        dispatch({ type: "selectedSeat", seatAction: { ...seat, isSelected: !isSelected } })
    }

    
    let classes = "btn m-2 "
    if(seat.daDat) {
      classes += "btn-danger"
    }else if (isSelected) {
      classes += "btn-success"
    } else {
      classes += "btn-secondary"
    }
  



    return seat.gia === 0 & seat.daDat ===undefined ? <button style={{ width: "40px", opacity:1 }} className={`p-1 m-2 col-md-1 btn btn-warning`} onClick={handleSelected} disabled={true}>
    {seat.soGhe}
    </button> : <button style={{ width: "40px", opacity:1 }} className={`p-1 m-2 col-md-1 ${classes} `} onClick={handleSelected} disabled={seat.daDat}>
      {seat.soGhe}
      </button>
    
    
}
