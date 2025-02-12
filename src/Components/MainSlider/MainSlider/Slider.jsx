/* eslint-disable max-lines */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './styles/index.scss';
import image1 from '../../../../assets/SliderLayout/photo-1494783367193-149034c05e8f.avif';

const images = [image1, image1, image1];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const totalSlides = images.length;

  // Параметры слайда в vw
  const slideWidth = 80; 
  const gap = 2;      
  const slideWithGap = slideWidth + gap;

  const baseOffset = -currentIndex * slideWithGap;
  // Пересчитываем текущее смещение: переводим dragOffset из px в vw
  const currentOffset = baseOffset + (dragOffset / window.innerWidth) * 100;

  // Переход к следующему слайду (по клику на стрелку, переходит только на один слайд)
  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDragOffset(0);
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  // Переход к предыдущему слайду (по клику на стрелку, переходит только на один слайд)
  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDragOffset(0);
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  // Переход к конкретному слайду (при клике на точку)
  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setDragOffset(0);
    setCurrentIndex(index);
  };

  // Обработчик движения (drag)
  const handleDrag = (e, info) => {
    if (isAnimating) return;
    setDragOffset(info.offset.x);
  };

  // Здесь вычисляется, на сколько слайдов нужно перейти, исходя из величины свайпа.
  const handleDragEnd = (e, info) => {
    if (isAnimating) return;
    const vwThreshold = 6; // порог в vw для перехода одного слайда
    const windowWidth = window.innerWidth;
    const thresholdInPixels = (vwThreshold / 100) * windowWidth;

    if (Math.abs(info.offset.x) > thresholdInPixels) {
      // Вычисляем, сколько слайдов нужно перескочить
      const slidesToJump = Math.floor(Math.abs(info.offset.x) / thresholdInPixels) || 1;
      setIsAnimating(true);
      setDragOffset(0);
      if (info.offset.x > 0) {
        // Свайп вправо: переходим к предыдущим слайдам
        setCurrentIndex((prev) => {
          // Расчёт с учётом цикличности (отрицательные индексы корректируем)
          const newIndex = prev - slidesToJump;
          return ((newIndex % totalSlides) + totalSlides) % totalSlides;
        });
      } else {
        // Свайп влево: переходим к следующим слайдам
        setCurrentIndex((prev) => (prev + slidesToJump) % totalSlides);
      }
    } else {
      // Если свайп меньше порога – сбрасываем смещение,
      // и слайдер анимированно возвращается в исходное положение.
      setDragOffset(0);
    }
  };

  // Сброс флага анимации через 400мс (подберите время под длительность вашей анимации)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 400);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Обработчик колесика мыши с debounce (на 500мс)
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
  }, [isAnimating]);

  return (
    <div className="sliderContainer">
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
        animate={{ x: `${currentOffset}vw` }}
        transition={{ type: 'spring', stiffness: 150, damping: 20 }}
        drag={isAnimating ? false : "x"}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="slide"
            style={{
              backgroundImage: `url(${image})`,
              borderRadius: '15px',
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
