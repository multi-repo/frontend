/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import './styles/index.scss'
import image1 from '../../../assets/SliderLayout/photo-1494783367193-149034c05e8f.avif'

const originalImages = [image1, image1, image1]

const Slider = () => {
  const slideCount = originalImages.length
  const slides = [...originalImages, ...originalImages, ...originalImages]

  // Изначально currentIndex указывает на начало центральной копии
  const [currentIndex, setCurrentIndex] = useState(slideCount)
  const [dragOffset, setDragOffset] = useState(0)
  const [disableTransition, setDisableTransition] = useState(false)
  const [containerWidth, setContainerWidth] = useState(window.innerWidth)
  const sliderRef = useRef(null)

  // Размеры слайда и зазора
  const slideWidth = containerWidth * 0.8
  const gap = containerWidth * 0.02
  const slideWithGap = slideWidth + gap

  useEffect(() => {
    const updateWidth = () => {
      if (sliderRef.current) {
        setContainerWidth(sliderRef.current.offsetWidth)
      }
    }
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  const nextSlide = () => {
    setCurrentIndex(prev => prev + 1)
    setDragOffset(0)
  }

  const prevSlide = () => {
    setCurrentIndex(prev => prev - 1)
    setDragOffset(0)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index + slideCount)
    setDragOffset(0)
  }

  const handleDrag = (e, info) => {
    setDragOffset(info.offset.x)
  }

  const handleDragEnd = (e, info) => {
    const threshold = containerWidth * 0.03
    if (Math.abs(info.offset.x) > threshold) {
      info.offset.x > 0 ? prevSlide() : nextSlide()
    }
    setDragOffset(0)
  }

  // Универсальная корректировка индекса после завершения анимации
  // Если индекс вышел за пределы центральной копии, обновляем его синхронно без анимации
  const handleAnimationComplete = () => {
    setCurrentIndex(prev => {
      let newIndex = prev
      if (prev < slideCount) {
        newIndex = prev + slideCount
      } else if (prev >= slideCount * 2) {
        newIndex = prev - slideCount
      }
      if (newIndex !== prev) {
        setDisableTransition(true)
        // Обновляем без перехода до следующей отрисовки
        setTimeout(() => {
          setDisableTransition(false)
        }, 0)
      }
      return newIndex
    })
  }

  const baseOffset = -currentIndex * slideWithGap
  const currentOffset = baseOffset + dragOffset
  const activeDotIndex = currentIndex % slideCount

  return (
    <div className="sliderContainer" ref={sliderRef}>
      <motion.button
        className="arrowButton leftArrow"
        onClick={prevSlide}
        aria-label="Previous slide"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
        </svg>
      </motion.button>

      <motion.button
        className="arrowButton rightArrow"
        onClick={nextSlide}
        aria-label="Next slide"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
        </svg>
      </motion.button>

      <motion.div
        className="slidesWrapper"
        drag="x"
        dragMomentum={false}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        animate={{ x: currentOffset }}
        transition={
          disableTransition
            ? { duration: 0 }
            : { type: 'spring', stiffness: 150, damping: 20 }
        }
        onAnimationComplete={handleAnimationComplete}
      >
        {slides.map((image, index) => (
          <motion.div
            key={index}
            className="slide"
            style={{
              backgroundImage: `url(${image})`,
              borderRadius: '15px',
              width: slideWidth,
              marginRight: gap,
            }}
            animate={{
              scale: index === currentIndex ? 1 : 0.9,
              opacity: index === currentIndex ? 1 : 0.6,
            }}
            transition={
              disableTransition
                ? { duration: 0 }
                : { type: 'spring', stiffness: 150, damping: 20 }
            }
          />
        ))}
      </motion.div>

      <div className="dotsContainer">
        {originalImages.map((_, index) => (
          <motion.button
            key={index}
            className={`dot ${index === activeDotIndex ? 'activeDot' : 'inactiveDot'}`}
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          />
        ))}
      </div>
    </div>
  )
}

export default Slider
