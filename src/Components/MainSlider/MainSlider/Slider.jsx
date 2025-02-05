import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './styles/index.scss'
import image1 from '../../../../assets/SliderLayout/photo-1494783367193-149034c05e8f.avif'

const images = [image1, image1, image1]

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState('left')

  const nextSlide = () => {
    setDirection('right')
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setDirection('left')
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 'right' : 'left')
    setCurrentIndex(index)
  }

  const ImgProps = {
    className: 'image',
    initial: { scale: 1 },
    animate: { scale: 1 },
    transition: { duration: 0.8 },
    style: { backgroundImage: `url(${images[currentIndex]})` },
  }

  const DotsProps = {
    whileHover: { scale: 1.2 },
    whileTap: { scale: 0.8 },
  }

  const ArrowProps = {
    whileHover: {
      scale: 1.1,
      translateY: '-50%',
    },
    whileTap: {
      scale: 0.95,
      translateY: '-50%',
    },
    className: 'arrowButton',
    style: {
      translateY: '-50%',
      transformOrigin: 'center',
    },
  }

  const variants = {
    hidden: (direction) => ({
      x: direction === 'right' ? '100%' : '-100%',
    }),
    visible: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    },
    exit: (direction) => ({
      x: direction === 'right' ? '-100%' : '100%',
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    }),
  }

  return (
    <div className="sliderContainer">
      {/* Left Arrow */}
      <motion.button
        {...ArrowProps}
        className="arrowButton leftArrow"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
        </svg>
      </motion.button>

      {/* Right Arrow */}
      <motion.button
        {...ArrowProps}
        className="arrowButton rightArrow"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
        </svg>
      </motion.button>

      <AnimatePresence mode="popLayout" custom={direction} initial={false}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="slide"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, { offset }) => {
            if (offset.x > 100) prevSlide()
            if (offset.x < -100) nextSlide()
          }}
        >
          <div className="dotsContainer">
            {images.map((_, index) => (
              <motion.button
                key={index}
                className={`dot ${index === currentIndex ? 'activeDot' : 'inactiveDot'}`}
                onClick={() => goToSlide(index)}
                {...DotsProps}
              />
            ))}
          </div>
          <motion.div {...ImgProps} />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Slider
