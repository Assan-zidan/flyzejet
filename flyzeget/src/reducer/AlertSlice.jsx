import { createSlice } from '@reduxjs/toolkit'

export const alertSlice = createSlice({
   name: 'alert',
   initialState: {
      createTask: [false," "],
      
   },

   reducers: {
      IsAlert: (state, newstate) => {
         return newstate.payload
      }
   },
})

// Action creators are generated for each case reducer function
export const { IsAlert } = alertSlice.actions

export default alertSlice.reducer
