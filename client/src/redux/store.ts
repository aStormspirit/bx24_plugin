import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import dialogsSlice from './dialogSlice'

export default configureStore({
  reducer: {
    telegram: dialogsSlice,
    user: userSlice,
  },
})
