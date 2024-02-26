import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UsersListType, UserType } from '@src/shared/types'

const initialState: UsersListType = {
  data: [],
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<UserType>) => {
      state.data = [action.payload]
    },
    changeState: (state, action: PayloadAction<string>) => {
      const selectedObjectId = action.payload

      state.data = state.data.map((obj: UserType) => {
        if (obj.api_id === selectedObjectId) {
          return { ...obj, selected: true }
        } else {
          return { ...obj, selected: false }
        }
      })
    },
  },
})

// Action creators are generated for each case reducer function
export const { add, changeState } = userSlice.actions

export default userSlice.reducer
