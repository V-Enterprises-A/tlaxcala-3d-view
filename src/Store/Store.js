import { configureStore } from '@reduxjs/toolkit'
import { churchSlice } from "./slices/churchs";



export const store = configureStore({
  reducer: {
    DataChurch: churchSlice.reducer,
  },
})

