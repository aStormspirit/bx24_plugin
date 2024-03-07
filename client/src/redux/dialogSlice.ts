import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DialogType } from '@src/shared/types'

type dialogReduxType = {
  dialogs: DialogType[]
}

const initialState: dialogReduxType = {
  dialogs: [],
}

export const dialogSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addDialogs: (state, action: PayloadAction<any>) => {
      console.log(action.payload)
      state.dialogs = [action.payload]
    },
  },
})

// Action creators are generated for each case reducer function
export const { addDialogs } = dialogSlice.actions

export default dialogSlice.reducer
