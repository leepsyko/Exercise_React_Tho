import { configureStore } from "@reduxjs/toolkit";
import cinemaReducer from "./redux/reducer/cinemaReducer";





const store = configureStore({
    reducer:{
        cinema: cinemaReducer

    }
})


export default store