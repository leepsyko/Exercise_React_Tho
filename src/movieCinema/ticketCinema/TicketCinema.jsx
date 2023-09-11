import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function TicketCinema() {

  const dispatch = useDispatch()

  const { selectedSeats,totalPrice } = useSelector((state) => {
    return state.cinema
  })



  const handleDeleteTicket = (soGhe) => {
    // console.log(soGhe)
    dispatch({ type: "deleteTicket", deleteAction: soGhe })
  }


  return (
    <div  style={{ height: "80vh", overflow: "auto", borderRadius:"10px", }} className="bg-dark">
      <div className=' p-1 h-100 ' >

        <table className='table  table-dark table-striped table-hover' >
          <thead style={{position:"sticky", top:"0"}}>
            <tr>
              <th style={{ width: "15%" }}>
                Stt
              </th>
              <th   >
                Số ghế
              </th>
              <th>
                Giá ghế
              </th>
              <th>
                Huỷ
              </th>
            </tr>
          </thead>
          <tbody className='table-group-divider'>
            {selectedSeats.map((item, index) => {
              return <tr key={item.soGhe}>
                <td>{index + 1}</td>
                <td>{item.soGhe}</td>
                <td>{item.gia}</td>
                <td>
                  <button className='btn btn-danger' onClick={() => handleDeleteTicket(item.soGhe)}>X</button>
                </td>
              </tr>
            })}
          </tbody>
          <tfoot style={{position:"sticky", bottom:"0"}}>
           <tr>
            <td>Tổng Tiền</td>
            <td colSpan={3} className="bg-secondary">{totalPrice}</td>
            </tr> 
          </tfoot>
        </table>
      </div>
    </div>


  )
}
