import { Route, Routes } from 'react-router-dom'
import Slider from './MainSlider/Slider'

const SliderLayout = () => {
  return (
    <Routes>
      <Route path="/" element={<> <Slider /> </>} />
    </Routes>
  )
}

export default SliderLayout
