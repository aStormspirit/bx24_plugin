import { configureStore } from '@reduxjs/toolkit'
import hashSlice from './userSlice'

export default configureStore({
  reducer: {
    store: hashSlice,
  },
})
