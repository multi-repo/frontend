import './styles/index.scss'
import MenuMainLayout from './Menu/Menu.jsx'
import WhiteLayout from './WhiteForm/WhiteMain.jsx'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from './AuthForm/AuthMain'
import AuthMain from './AuthForm/Auth'

const MainLayout = () => {
  return (
    <div className="MainLayout">
      <AuthMain />
      <MenuMainLayout />
      <WhiteLayout />
    </div>
  )
}

export default MainLayout
