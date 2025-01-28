import './styles/index.scss'
import MenuMainLayout from './Menu/Menu.jsx'
import WhiteLayout from './WhiteForm/WhiteMain.jsx'

const MainLayout = () => {
  return (
    <div className="MainLayout">
      <MenuMainLayout />
      <WhiteLayout />
    </div>
  )
}

export default MainLayout
