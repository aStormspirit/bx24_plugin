import { configureStore } from '@reduxjs/toolkit'
import hashSlice from '../features/form/redux/hashSlice'

export default configureStore({
  reducer: {
    store: hashSlice,
  },
})
