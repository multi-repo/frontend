import authReducer from './authSlice'
import * as authActions from './authActions'

export { authReducer, authActions }
export { loginUser, checkAuthStatus, logoutUser } from '../Auth/authActions'
export default authReducer
