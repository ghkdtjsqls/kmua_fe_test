import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';
import { MdShoppingCart } from 'react-icons/md';
import { ANIMATION_DURATION, ANIMATION_EASING } from '../hooks/useAnimation';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      className={css(styles.productCard)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div className={css(styles.productImageContainer)}>
        <img 
          src={product.image} 
          alt={product.name}
          className={css(
            styles.productImage,
            isHovered && styles.productImageHovered
          )}
        />
      </div>
      <h3 className={css(styles.productName)}>{product.name}</h3>
      <div className={css(styles.productFooter)}>
        <p className={css(styles.productPrice)}>${product.price}</p>
        <button className={css(styles.cartButton)}>
          <MdShoppingCart size={18} color="#333" />
        </button>
      </div>
    </div>
  );
};

const Pagination = ({ active = 0 }) => {
  return (
    <div className={css(styles.pagination)}>
      {[0, 1, 2].map((dot) => (
        <div
          key={dot}
          className={css(
            styles.paginationDot,
            active === dot && styles.paginationDotActive
          )}
        />
      ))}
    </div>
  );
};

const ProductSection = ({ title, products }) => {
  return (
    <section className={css(styles.section)}>
      <div className={css(styles.sectionHeader)}>
        <div className={css(styles.sectionLine)} />
        <h2 className={css(styles.sectionTitle)}>{title}</h2>
        <div className={css(styles.sectionLine)} />
      </div>
      
      <div className={css(styles.productsGrid)}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      <Pagination active={0} />
    </section>
  );
};

const styles = StyleSheet.create({
  section: {
    marginTop: '32px',
    '@media (min-width: 768px)': {
      marginTop: '48px',
    },
    '@media (min-width: 1200px)': {
      marginTop: '64px',
    },
  },
  
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '20px',
    '@media (min-width: 768px)': {
      gap: '16px',
      marginBottom: '32px',
    },
  },
  
  sectionLine: {
    flex: 1,
    height: '1px',
    backgroundColor: '#D4C4B0',
  },
  
  sectionTitle: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#333',
    whiteSpace: 'nowrap',
    margin: 0,
    '@media (min-width: 768px)': {
      fontSize: '16px',
    },
    '@media (min-width: 1200px)': {
      fontSize: '18px',
    },
  },
  
  productsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '16px',
    marginBottom: '20px',
    '@media (min-width: 640px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '20px',
    },
    '@media (min-width: 768px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '24px',
    },
    '@media (min-width: 1024px)': {
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '28px',
    },
    '@media (min-width: 1400px)': {
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '32px',
    },
  },
  
  productCard: {
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
    transition: `transform ${ANIMATION_DURATION.normal} ${ANIMATION_EASING.ease}`,
    ':hover': {
      transform: 'translateY(-4px)',
    },
  },
  
  productImageContainer: {
    width: '100%',
    aspectRatio: '1',
    borderRadius: '16px',
    overflow: 'hidden',
    backgroundColor: '#E8E4DF',
    marginBottom: '12px',
    position: 'relative',
    '@media (min-width: 768px)': {
      borderRadius: '20px',
      marginBottom: '16px',
    },
  },
  
  productImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: `transform ${ANIMATION_DURATION.normal} ${ANIMATION_EASING.ease}`,
  },

  productImageHovered: {
    transform: 'scale(1.05)',
  },
  
  productName: {
    fontSize: '12px',
    color: '#666',
    marginBottom: '8px',
    lineHeight: '1.4',
    minHeight: '34px',
    '@media (min-width: 768px)': {
      fontSize: '13px',
      marginBottom: '10px',
    },
  },

  productFooter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  
  productPrice: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#333',
    margin: 0,
    '@media (min-width: 768px)': {
      fontSize: '16px',
    },
  },

  cartButton: {
    background: 'none',
    border: '1px solid #E8E4DF',
    borderRadius: '8px',
    padding: '6px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: `all ${ANIMATION_DURATION.normal} ${ANIMATION_EASING.ease}`,
    ':hover': {
      backgroundColor: '#333',
      borderColor: '#333',
    },
    ':hover svg': {
      color: '#FAF8F5 !important',
    },
    '@media (min-width: 768px)': {
      padding: '8px',
    },
  },
  
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    gap: '8px',
    marginTop: '16px',
    '@media (min-width: 768px)': {
      marginTop: '24px',
      gap: '10px',
    },
  },
  
  paginationDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#D4C4B0',
    transition: `background-color ${ANIMATION_DURATION.normal} ${ANIMATION_EASING.ease}`,
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#A89B8B',
    },
    '@media (min-width: 768px)': {
      width: '10px',
      height: '10px',
    },
  },
  
  paginationDotActive: {
    backgroundColor: '#A89B8B',
  },
});

export { ProductCard };
export default ProductSection;
