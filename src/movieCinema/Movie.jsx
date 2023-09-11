import React from 'react'
import SeatCinema from './seatCinema/SeatCinema'
import data from "./danhSachGhe.json"
import TicketCinema from './ticketCinema/TicketCinema'
import { useSelector } from 'react-redux'

export default function Movie() {

  const { totalPrice } = useSelector((state) => {
    console.log(state.cinema.selectedSeats)
    return state.cinema
  })


  const handleConfirmTicket = () => {
    console.log(totalPrice)
    alert(`Tong gia ve ${totalPrice}`)
  }


  return (
    <div style={{
      backgroundImage: `url("./bgmovie.jpg")`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      textAlign: 'center'
    }}>
      <h1 className='text-danger fs-1 fw-bolder'>Trang đặt vé xem phim</h1>
      <div className='row'>

        <h3 className='col-md-6 text-white fw-bolder' >Chọn ghế xem phim</h3>
        <h3 className='col-md-6 text-white fw-bolder'>Danh sách bạn đã chọn</h3>

        <div className="row">

          <div className="col-md-6">
            <SeatCinema seats={data} />
          </div>

          <div className="col-md-6 h-100" >

            <TicketCinema />

          </div>
        </div>
      </div>
      <div className='text-center'>
        <button className='btn btn-primary w-25 my-3 ' onClick={handleConfirmTicket} >Đặt vé</button>
      </div>



     






    </div>
  )
}
