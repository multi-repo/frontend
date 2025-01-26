import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

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
  },
})

export const {
  login,
  logout,
  setStatusLoading,
  setStatusError,
  setStatusSuccess,
  clearError,
} = authSlice.actions

// Async action for login
// src/store/authSlice.js

export const loginUser = (username, password) => async (dispatch) => {
  dispatch(setStatusLoading(true))
  try {
    const response = await axios.post(
      'http://localhost:3000/auth/login',
      {
        username,
        password,
        remember: true, // Используем булевое значение вместо строки
      },
      { withCredentials: true } // Добавляем withCredentials для работы с cookie
    )

    if (response.status === 200) {
      // Save the token in localStorage
      localStorage.setItem('auth_token', response.data.token)

      // Set authentication state
      dispatch(setStatusSuccess(true))
      dispatch(login())
    }
  } catch (error) {
    if (error.response) {
      const { status, data } = error.response
      const errorMessage = data.message || 'An error occurred'
      dispatch(setStatusError({ status, message: errorMessage }))
    } else {
      dispatch(
        setStatusError({
          status: 'Network Error',
          message: 'Failed to reach the server',
        })
      )
    }
  } finally {
    dispatch(setStatusLoading(false))
  }
}

export default authSlice.reducer
