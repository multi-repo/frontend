import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  theme: 'light',
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchTheme(state) {
      state.theme = state.theme === 'light' ? 'dark' : 'light'
    },
  },
})

export const { switchTheme } = themeSlice.actions
export default themeSlice.reducer
