import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Auth = {
  login: string | null
  token: string | null
  isAuth?: boolean
}

const initialState: Auth = {
  login: null,
  token: null,
  isAuth: false,
}

export const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<Auth>) => {
      state.login = action.payload.login
      state.token = action.payload.token
      state.isAuth = true
      // ...
    },
    checkAuth: (state, action: PayloadAction<any>) => {
      // ...
    },
    logout: (state, action: PayloadAction<any>) => {
      // ...
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, checkAuth, logout } = userSlice.actions

export default userSlice.reducer
