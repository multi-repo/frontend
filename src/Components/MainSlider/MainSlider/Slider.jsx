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

  const variants = {
    hidden: (direction) => ({
      x: direction === 'right' ? '100%' : '-100%',
      opacity: 0,
      scale: 0.8,
    }),
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
    exit: (direction) => ({
      x: direction === 'right' ? '-100%' : '100%',
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.5, ease: 'easeInOut' },
    }),
  }

  return (
    <div className="sliderContainer">
      <AnimatePresence mode="wait" custom={direction} initial={false}>
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
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>
          <motion.div
            className="image"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            style={{ backgroundImage: `url(${images[currentIndex]})` }}
          />
{/* 
          <motion.div
            className="textContainer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="title">Slide {currentIndex + 1}</h2>
            <p className="description">
              Discover amazing content with our seamless slider experience
            </p>
          </motion.div> */}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Slider
