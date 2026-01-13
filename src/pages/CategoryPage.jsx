import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';
import Header from '../components/header';
import SideMenu from '../components/SideMenu';
import SearchComponent from '../components/SearchComponent';
import CartComponent from '../components/CartComponent';
import { ProductCard } from '../components/ProductSection';
import { CATEGORIES } from '../tests/categorys';
import { ANIMATION_DURATION, ANIMATION_EASING } from '../hooks/useAnimation';

const CategoryPage = () => {
  const { category, subcategory } = useParams();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // 현재 카테고리 정보 찾기
  const currentCategory = CATEGORIES.find(cat => cat.id === category);
  const currentSubcategory = currentCategory?.children.find(
    child => child.link === `/${category}/${subcategory}`
  );

  const categoryName = currentSubcategory?.name || subcategory;

  // 페이지 전환 시 스크롤 최상단으로 초기화
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryName]);

  // Mock 상품 데이터
  const mockProducts = [
    {
      id: 1,
      name: 'Round Lab Birch Moisturizing Toner',
      price: '48,000',
      image: 'https://images.unsplash.com/photo-1643379850623-7eb6442cd262?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBjb3NtZXRpY3MlMjBjcmVhbSUyMGJvdHRsZXxlbnwxfHx8fDE3NjYzMDczNzN8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 2,
      name: 'Klairs Supple Preparation Toner',
      price: '34,000',
      image: 'https://images.unsplash.com/photo-1718490953028-021d352b14fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMHByb2R1Y3RzJTIwYmVpZ2V8ZW58MXx8fHwxNzY2MzA3MzczfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 3,
      name: 'Medicube Essential Sheet Mask',
      price: '20,000',
      image: 'https://images.unsplash.com/photo-1765964492963-b0aa8c172431?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpYyUyMGphciUyMG5hdHVyYWx8ZW58MXx8fHwxNzY2MzA3Mzc0fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 4,
      name: 'Manyo 3Ds Quick Bubble Mask',
      price: '25,000',
      image: 'https://images.unsplash.com/photo-1693146187444-d3d993a74a53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBwcm9kdWN0JTIwbWluaW1hbHxlbnwxfHx8fDE3NjYyNTA4NTF8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 5,
      name: 'Celladix RX131 Ampoule',
      price: '52,000',
      image: 'https://images.unsplash.com/photo-1733660227083-12b78ad0073d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2FwJTIwY29zbWV0aWNzJTIwYmVpZ2V8ZW58MXx8fHwxNzY2MzA3Mzc1fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 6,
      name: 'Shiku Hyaluronic Ampoule',
      price: '65,000',
      image: 'https://images.unsplash.com/photo-1739950839930-ef45c078f316?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMGNyZWFtJTIwbHV4dXJ5fGVufDF8fHx8MTc2NjMwNzM3NXww&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  const handleUpdateQuantity = (itemId, delta) => {
    setCartItems(items =>
      items.map(item =>
        item.id === itemId
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemoveItem = (itemId) => {
    setCartItems(items => items.filter(item => item.id !== itemId));
  };

  return (
    <div className={css(styles.container)}>
      <Header
        onMenuClick={() => setMenuOpen(true)}
        onSearchClick={() => setSearchOpen(true)}
        onCartClick={() => setCartOpen(true)}
      />

      <SideMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />

      <SearchComponent
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />

      <CartComponent
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      {/* Title Section */}
      <div className={css(styles.titleSection)}>
        <p className={css(styles.titleLabel)}>BUSCAR</p>
        <p className={css(styles.titleResult)}>resultados para "{categoryName}"</p>
      </div>

      {/* Product Grid */}
      <main className={css(styles.main)}>
        <div className={css(styles.mainContainer)}>
          <div className={css(styles.productsGrid)}>
            {mockProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: '100vh',
    backgroundColor: '#FFF9F6',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    display: 'flex',
    flexDirection: 'column',
  },

  titleSection: {
    backgroundColor: '#F5EBE6',
    padding: '20px',
    textAlign: 'center',
    '@media (min-width: 768px)': {
      padding: '30px 40px',
    },
  },

  titleLabel: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#333',
    margin: '0 0 4px 0',
  },

  titleResult: {
    fontSize: '14px',
    color: '#666',
    margin: 0,
  },

  main: {
    flex: 1,
    padding: '20px',
    '@media (min-width: 768px)': {
      padding: '30px 40px',
    },
    '@media (min-width: 1200px)': {
      padding: '40px 60px',
    },
  },

  mainContainer: {
    maxWidth: '1400px',
    margin: '0 auto',
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

  filterSection: {
    display: 'flex',
    justifyContent: 'center',
    gap: '12px',
    marginTop: '40px',
    paddingBottom: '20px',
  },

  filterButton: {
    padding: '10px 20px',
    backgroundColor: 'transparent',
    color: '#999',
    border: '1px solid #E8E4DF',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: `all ${ANIMATION_DURATION.fast} ${ANIMATION_EASING.ease}`,
    ':hover': {
      borderColor: '#D4B8A0',
      color: '#333',
    },
    '@media (min-width: 768px)': {
      fontSize: '13px',
      padding: '12px 24px',
    },
  },

  filterButtonActive: {
    backgroundColor: '#D4B8A0',
    color: '#FFFFFF',
    borderColor: '#D4B8A0',
    ':hover': {
      backgroundColor: '#C4A890',
      borderColor: '#C4A890',
      color: '#FFFFFF',
    },
  },
});

export default CategoryPage;
