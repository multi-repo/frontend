import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuthenticated: false,
  statusLoading: false,
  statusError: null,
  errorMessage: '',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state) {
      state.isAuthenticated = true
    },
    logout(state) {
      state.isAuthenticated = false
    },
    setStatusLoading(state, action) {
      state.statusLoading = action.payload
    },
    setStatusError(state, action) {
      state.statusError = action.payload.status
      state.errorMessage = action.payload.message
    },
    setStatusSuccess(state, action) {
      state.isAuthenticated = action.payload
    },
    clearError(state) {
      state.statusError = null
      state.errorMessage = ''
    },
    setAuthStatus(state, action) {
      state.isAuthenticated = action.payload
    },
  },
})

export const {
  login,
  logout,
  setStatusLoading,
  setStatusError,
  setStatusSuccess,
  clearError,
  setAuthStatus,
} = authSlice.actions

export default authSlice.reducer
