import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logoutUser } from '../../store/Auth'

export const useAuthButtonHandler = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleButtonClick = useCallback(async () => {
    if (isAuthenticated) {
      dispatch(logoutUser())
      navigate('/')
    } else {
      navigate('/auth')
    }
  }, [isAuthenticated, dispatch, navigate])

  return { isAuthenticated, handleButtonClick }
}
