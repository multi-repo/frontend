import React, { useEffect } from 'react'
import Glide from '@glidejs/glide'
import image1 from '../../../../assets/SliderLayout/photo-1494783367193-149034c05e8f.avif'
import image2 from '../../../../assets/SliderLayout/photo-1506744038136-46273834b3fb.avif'
import './styles/index.scss'

const Slider = () => {
  useEffect(() => {
    const glide = new Glide('.glide', {
      type: 'carousel',
      perView: 1,
      focusAt: 'center',
      gap: 10,
    })

    glide.mount()
    return () => glide.destroy()
  }, [])

  return (
    <div className="glide">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          <li className="glide__slide">
            <img src={image1} alt="Slide 1" />
          </li>
          <li className="glide__slide">
            <img src={image2} alt="Slide 2" />
          </li>
          <li className="glide__slide">
            <img src={image1} alt="Slide 3" />
          </li>
        </ul>
      </div>
      <div className="glide__arrows" data-glide-el="controls">
        <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 6L9 12L15 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 6L15 12L9 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="glide__bullets" data-glide-el="controls[nav]">
        <button className="glide__bullet" data-glide-dir="=0"></button>
        <button className="glide__bullet" data-glide-dir="=1"></button>
        <button className="glide__bullet" data-glide-dir="=2"></button>
      </div>
    </div>
  )
}

export default Slider
