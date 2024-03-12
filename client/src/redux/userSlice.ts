import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserType } from '@src/shared/types'

const initialState: any = {
  config: [],
  profile: [],
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addConfig: (state, action: PayloadAction<UserType>) => {
      state.config = [action.payload]
    },
    addProfile: (state, action: PayloadAction<any>) => {
      state.profile = [action.payload]
    },
  },
})

// Action creators are generated for each case reducer function
export const { addConfig, addProfile } = userSlice.actions

export default userSlice.reducer
