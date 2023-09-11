import React from 'react'
import SeatRow from './SeatRow'

export default function SeatCinema({ seats }) {
   
    return (
        
            <>
                <div className="text-center bg-warning">Màn Hình Chiếu</div>
                <div>
                    {seats.map((seat) => {
                        return (
                           <div className="row" key={seat.hang}>
                            <div className="col-md-1 d-flex justify-content-center align-items-center ">
                                <button className='btn btn-warning opacity-100' disabled={true}>{seat.hang}</button>
                            </div>
                           <SeatRow  seatRow={seat.danhSachGhe}/>
                           </div>
                        )
                    })}
                </div>
            </>
        
    )
}
