import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HashSliceState, ObjType } from '@src/shared/types'

const initialState: HashSliceState = {
  data: [],
}

export const hashSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ObjType>) => {
      state.data.push(action.payload)
    },
    changeState: (state, action: PayloadAction<number>) => {
      const selectedObjectId = action.payload

      // Update the 'selected' property immutably
      state.data = state.data.map((obj: any) =>
        obj.ID === selectedObjectId
          ? { ...obj, selected: true }
          : { ...obj, selected: false }
      )
    },
  },
})

// Action creators are generated for each case reducer function
export const { add, changeState } = hashSlice.actions

export default hashSlice.reducer
