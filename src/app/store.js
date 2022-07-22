import { configureStore } from '@reduxjs/toolkit'
import MainGridSliceReducer from '../modules/MainGrid/MainGridSlice'

export const store = configureStore({
  reducer: {
    maingrid: MainGridSliceReducer,
  },
})

