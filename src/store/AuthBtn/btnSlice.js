import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuthenticated: false,
  isButtonPressed: false,
}

const authBtn = createSlice({
  name: 'authBtn',
  initialState,
  reducers: {
    pressButton: (state) => {
      state.isButtonPressed = !state.isButtonPressed
    },
  },
})

export const { pressButton } = authBtn.actions
export default authBtn.reducer
