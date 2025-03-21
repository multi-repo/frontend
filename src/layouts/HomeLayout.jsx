import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Loader from '../Components/Loader/Loader.js'

const MenuMainLayout = React.lazy(() => import('../Components/Menu/Menu.jsx'))
const Slider = React.lazy(() => import('../Components/MainSlider/Slider.jsx'))

const HomeLayout = () => (
  <Suspense fallback={<Loader />}>
    <MenuMainLayout />
    <MenuMainLayout />
    <Slider />
    <Outlet />
  </Suspense>
)

export default HomeLayout
