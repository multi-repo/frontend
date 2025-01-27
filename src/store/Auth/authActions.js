// src/redux/actions/authActions.js
import { loginRequest, checkAuthStatusRequest, logoutRequest } from './api.js'
import {
  setStatusLoading,
  setStatusError,
  setStatusSuccess,
  login,
  setAuthStatus,
} from './authSlice.js'

export const loginUser = (username, password) => async (dispatch) => {
  dispatch(setStatusLoading(true))
  try {
    const response = await loginRequest(username, password)
    if (response.status === 200) {
      dispatch(setStatusSuccess(true))
      dispatch(login())
    }
  } catch (error) {
    handleError(error, dispatch)
  } finally {
    dispatch(setStatusLoading(false))
  }
}

export const logoutUser = () => async (dispatch) => {
  try {
    const response = await logoutRequest()
    dispatch(setAuthStatus(!(response.status === 200)))
  } catch (error) {
    dispatch(setAuthStatus(true))
  } finally {
    dispatch(setStatusLoading(true))
  }
}

export const checkAuthStatus = () => async (dispatch) => {
  dispatch(setStatusLoading(true))
  try {
    const response = await checkAuthStatusRequest()
    dispatch(setAuthStatus(response.status === 200))
  } catch (error) {
    dispatch(setAuthStatus(false))
  } finally {
    dispatch(setStatusLoading(false))
  }
}

const handleError = (error, dispatch) => {
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
}
