import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../reducer/UserSlice'
import alertReducer from '../reducer/AlertSlice'


export default configureStore({
  reducer: {
    user: userReducer,
    alert: alertReducer
  }
})