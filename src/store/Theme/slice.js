import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  theme: localStorage.getItem('theme') || 'light',
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchTheme(state) {
      state.theme = state.theme === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', state.theme)
    },
  },
})

export const { switchTheme } = themeSlice.actions
export default themeSlice.reducer
