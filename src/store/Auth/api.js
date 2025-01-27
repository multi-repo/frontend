import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
})

export const loginRequest = (username, password) => {
  return api.post('/auth/login', { username, password, remember: true })
}

export const logoutRequest = () => {
  return api.get('/auth/logout')
}

export const checkAuthStatusRequest = () => {
  return api.get('/auth/status')
}

export default api
