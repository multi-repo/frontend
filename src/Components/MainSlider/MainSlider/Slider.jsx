import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './styles/index.scss';
import image1 from '../../../../assets/SliderLayout/photo-1494783367193-149034c05e8f.avif';

const images = [image1, image1, image1];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [containerWidth, setContainerWidth] = useState(window.innerWidth);
  const sliderRef = useRef(null);
  const totalSlides = images.length;
  
  const slideWidth = containerWidth * 0.8; 
  const gap = containerWidth * 0.02;      
  const slideWithGap = slideWidth + gap;
  
  useEffect(() => {
    const updateWidth = () => {
      if (sliderRef.current) {
        setContainerWidth(sliderRef.current.offsetWidth);
      } else {
        setContainerWidth(window.innerWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);
  
  // Базовое смещение для текущего слайда (в пикселях)
  const baseOffset = -currentIndex * slideWithGap;
  // Общее смещение с учётом перетаскивания
  const currentOffset = baseOffset + dragOffset;
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    setDragOffset(0);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    setDragOffset(0);
  };
  
  const goToSlide = (index) => {
    setCurrentIndex(index);
    setDragOffset(0);
  };
  
  const handleDrag = (e, info) => {
    setDragOffset(info.offset.x);
  };
  
  const handleDragEnd = (e, info) => {
    const threshold = containerWidth * 0.03;
    if (Math.abs(info.offset.x) > threshold) {
      if (info.offset.x > 0) {
        setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
      } else {
        // Переключаемся на следующий слайд
        setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
      }
    }
    setDragOffset(0);
  };
  
  // Обработка колесика мыши с дебаунсом
  useEffect(() => {
    let wheelTimeout = null;
    const handleWheel = (e) => {
      if (wheelTimeout) return;
      if (e.deltaY > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      wheelTimeout = setTimeout(() => {
        wheelTimeout = null;
      }, 500);
    };
    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);
  
  return (
    <div className="sliderContainer" ref={sliderRef}>
      {/* Кнопка "Предыдущий слайд" */}
      <motion.button
        className="arrowButton leftArrow"
        onClick={prevSlide}
        aria-label="Предыдущий слайд"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
        </svg>
      </motion.button>
  
      {/* Кнопка "Следующий слайд" */}
      <motion.button
        className="arrowButton rightArrow"
        onClick={nextSlide}
        aria-label="Следующий слайд"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
        </svg>
      </motion.button>
  
      {/* Обёртка слайдов */}
      <motion.div
        className="slidesWrapper"
        drag="x"
        dragMomentum={false}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        animate={{ x: currentOffset }}
        transition={{ type: 'spring', stiffness: 150, damping: 20 }}
      >
        {images.map((image, index) => (
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
            transition={{ duration: 0.3 }}
          />
        ))}
      </motion.div>
  
      {/* Навигационные точки */}
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
    </div>
  );
};

export default Slider;
