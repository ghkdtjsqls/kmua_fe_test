import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom';
import { ANIMATION_DURATION, ANIMATION_EASING } from '../hooks/useAnimation';

// 배너 이미지 임포트 (1920 x 300 규격)
// import banner1 from '../assets/images/banner1.png';
import banner2 from '../assets/images/image2.png';
// import banner3 from '../assets/images/banner3.png';

const Banner = ({ onBannerClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [
    {
      id: 1,
    //   title: 'Nueva Colección',
    //   subtitle: 'Descubre nuestros productos premium',
      bgColor: '#E8DDD0',
      image: banner2, // 실제 이미지를 사용할 경우
      link: '/banner/1'
    },
    // {
    //   id: 2,
    //   title: 'Ofertas Especiales',
    //   subtitle: 'Hasta 30% de descuento',
    //   bgColor: '#D4C4B0',
    //   // image: banner2, // 실제 이미지를 사용할 경우
    //   link: '/banner/2'
    // },
    // {
    //   id: 3,
    //   title: 'Cuidado Natural',
    //   subtitle: 'Productos orgánicos certificados',
    //   bgColor: '#C9B8A3',
    //   // image: banner3, // 실제 이미지를 사용할 경우
    //   link: '/banner/3'
    // }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const handleBannerClick = (banner) => {
    if (onBannerClick) {
      onBannerClick(banner);
    }
  };

  return (
    <div className={css(styles.bannerContainer)}>
        <Link to="/bannerPage"><img src={banner2} alt="banner" className={css(styles.bannerImage)} /></Link>

      {/* Navigation Arrows */}
      {/* <button 
        className={css(styles.bannerArrow, styles.bannerArrowLeft)}
        onClick={(e) => {
          e.stopPropagation();
          prevSlide();
        }}
      >
        ‹
      </button> */}
      {/* <button 
        className={css(styles.bannerArrow, styles.bannerArrowRight)}
        onClick={(e) => {
          e.stopPropagation();
          nextSlide();
        }}
      >
        ›
      </button> */}

      {/* Dots Indicator */}
      {/* <div className={css(styles.bannerDots)}>
        {banners.map((_, index) => (
          <button
            key={index}
            className={css(
              styles.bannerDot,
              index === currentSlide && styles.bannerDotActive
            )}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentSlide(index);
            }}
          />
        ))}
      </div> */}
    </div>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    position: 'relative',
    overflow: 'hidden',
    marginBottom: '20px',
    '@media (min-width: 768px)': {
      marginBottom: '30px',
    },
  },

  bannerWrapper: {
    display: 'flex',
    transition: `transform ${ANIMATION_DURATION.carousel} ${ANIMATION_EASING.easeInOut}`,
  },

  bannerSlide: {
    flex: '0 0 100%',
    maxWidth: '1920px',
    height: '500px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: `opacity ${ANIMATION_DURATION.normal} ${ANIMATION_EASING.ease}`,
    ':hover': {
      opacity: 0.95,
    },
    '@media (min-width: 768px)': {
      maxWidth: '1920px',
      height: '500px',
    },
    '@media (min-width: 1200px)': {
      maxWidth: '1920px',
      height: '500px',
    },
  },

  bannerSlideActive: {
    transform: 'translateX(0)',
  },

  bannerContent: {
    textAlign: 'center',
    color: '#333',
    padding: '20px',
    position: 'relative',
    zIndex: 1,
  },

  bannerTitle: {
    fontSize: '24px',
    fontWeight: '600',
    marginBottom: '10px',
    '@media (min-width: 768px)': {
      fontSize: '32px',
    },
    '@media (min-width: 1200px)': {
      fontSize: '40px',
    },
  },

  bannerSubtitle: {
    fontSize: '16px',
    fontWeight: '400',
    marginBottom: '20px',
    '@media (min-width: 768px)': {
      fontSize: '20px',
    },
    '@media (min-width: 1200px)': {
      fontSize: '24px',
    },
  },

  bannerButton: {
    backgroundColor: '#333',
    color: '#FAF8F5',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '8px',
    fontSize: '12px',
    cursor: 'pointer',
    transition: `background-color ${ANIMATION_DURATION.normal} ${ANIMATION_EASING.ease}`,
    ':hover': {
      backgroundColor: '#555',
    },
    '@media (min-width: 768px)': {
      fontSize: '13px',
      padding: '12px 24px',
    },
  },

  bannerArrow: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: '#FAF8F5',
    border: 'none',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    cursor: 'pointer',
    fontSize: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: `background-color ${ANIMATION_DURATION.normal} ${ANIMATION_EASING.ease}`,
    zIndex: 2,
    ':hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    '@media (min-width: 768px)': {
      width: '50px',
      height: '50px',
      fontSize: '30px',
    },
  },

  bannerArrowLeft: {
    left: '10px',
    '@media (min-width: 768px)': {
      left: '20px',
    },
  },

  bannerArrowRight: {
    right: '10px',
    '@media (min-width: 768px)': {
      right: '20px',
    },
  },

  bannerDots: {
    position: 'absolute',
    bottom: '15px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '8px',
    zIndex: 2,
    '@media (min-width: 768px)': {
      bottom: '25px',
    },
  },

  bannerDot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    border: 'none',
    cursor: 'pointer',
    transition: `background-color ${ANIMATION_DURATION.normal} ${ANIMATION_EASING.ease}`,
    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
    '@media (min-width: 768px)': {
      width: '12px',
      height: '12px',
    },
  },

  bannerDotActive: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },

    bannerImage: {
    width: '100%',
    height: '700px',
    objectFit: 'cover',

    '@media (max-width: 767px)': {
        height: '280px',
    },

    '@media (min-width: 768px) and (max-width: 1199px)': {
        height: '480px',
    },
    },
});

export default Banner;
