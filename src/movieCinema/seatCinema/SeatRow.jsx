import React from 'react'
import { useSelector } from 'react-redux'
import SeatItem from './SeatItem'

export default function SeatRow({ seatRow }) {

    const {selectedSeats} = useSelector((state) => {
        return state.cinema
    })
    
   

    return (
       <div className='col-md-11'>
         <div className="row">
            {seatRow.map((seat) => {
                // kiểm tra ghế đã được chọn hay chưa
                const isSelected = selectedSeats.find(item => item.soGhe === seat.soGhe )
                return <SeatItem seat={seat} key={seat.soGhe} isSelected={!!isSelected}/>
            })}
        </div>
       </div>

    )

}
