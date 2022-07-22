import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  open: true,
  high: true,
  low: true,
  close: true,
  data: []
}

export const MainGridSlice= createSlice({
  name: 'maingrid',
  initialState,
  reducers: {
    toggleOpen: (state) => {
        state.open = !state.open
    },
    toggleClose: (state) => {
        state.close = !state.close
    },
    toggleHigh: (state) => {
        state.high = !state.high
    },
    toggleLow: (state) => {
        state.low = !state.low
    },
    setData: (state, action) => {
      state.data = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { toggleClose, toggleHigh, toggleLow, toggleOpen, setData } = MainGridSlice.actions

export default MainGridSlice.reducer