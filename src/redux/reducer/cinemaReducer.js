const initState = {
  selectedSeats: [],
  totalPrice: 0,
};

const cinemaReducer = (state = initState, action) => {
  switch (action.type) {
    case "selectedSeat": {
      const { isSelected, ...seat } = action.seatAction;
      //   console.log(isSelected)
      if (isSelected) {
        console.log(seat);
        const selectedSeats = [...state.selectedSeats, seat];
        const totalPrice = state.totalPrice + seat.gia;
        return { ...state, selectedSeats, totalPrice };
      }
      const selectedSeats = state.selectedSeats.filter(
        (item) => item.soGhe !== seat.soGhe
        );
        
        const totalPrice = state.totalPrice - seat.gia;
        console.log(totalPrice)
      return { ...state, selectedSeats, totalPrice };
    }

    case "deleteTicket":{
      const selectedSeats = state.selectedSeats.filter((item)=>{
        console.log(item.soGhe)
        console.log(action.deleteAction)
        return item.soGhe !== action.deleteAction
      })
      const totalPrice = selectedSeats.reduce((result,item)=>{
        return result + item.gia
      },0)
      
        return {...state,selectedSeats,totalPrice}
    }
    default:
      return state;
  }
};

export default cinemaReducer;
