import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
   name: 'user',
   initialState: {
      nom: '',
      prenom: '',
      type: '',
   },

   reducers: {
      connection: (state, newstate) => {
         return newstate.payload
      },
      deconnection: (state, newstate) => {
        return newstate.payload
      },
   },
})

// Action creators are generated for each case reducer function
export const { connection, deconnection } = userSlice.actions

export default userSlice.reducer
