import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import dialogsSlice from './dialogSlice'
import authSlice from './authSlice'

export default configureStore({
  reducer: {
    telegram: dialogsSlice,
    user: userSlice,
    auth: authSlice,
  },
})
