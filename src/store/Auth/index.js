import authReducer from './authSlice'
import * as authActions from './authActions'

export { authReducer, authActions }
export { loginUser, checkAuthStatus } from '../Auth/authActions'
export default authReducer
