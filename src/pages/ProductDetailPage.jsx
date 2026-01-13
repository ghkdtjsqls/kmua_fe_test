import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';
import { MdFavoriteBorder } from 'react-icons/md';
import Header from '../components/header';
import Footer from '../components/footer';
import SideMenu from '../components/SideMenu';
import SearchComponent from '../components/SearchComponent';
import CartComponent from '../components/CartComponent';
import { ANIMATION_DURATION, ANIMATION_EASING } from '../hooks/useAnimation';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Celadix RX131 Ampoule',
      price: '52,000',
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1643379850623-7eb6442cd262?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBjb3NtZXRpY3MlMjBjcmVhbSUyMGJvdHRsZXxlbnwxfHx8fDE3NjYzMDczNzN8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 2,
      name: 'Round Lab Birch Moisturizing Toner',
      price: '52,000',
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1718490953028-021d352b14fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMHByb2R1Y3RzJTIwYmVpZ2V8ZW58MXx8fHwxNzY2MzA3MzczfDA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ]);

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

  const handleAddToCart = () => {
    setCartOpen(true);
  };

  // 샘플 제품 데이터 (실제로는 props나 API에서 가져와야 함)
  const product = {
    id: id,
    name: 'Celadix IRX131 Ampoule',
    price: '52,000',
    image: 'https://images.unsplash.com/photo-1643379850623-7eb6442cd262?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBjb3NtZXRpY3MlMjBjcmVhbSUyMGJvdHRsZXxlbnwxfHx8fDE3NjYzMDczNzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    usage: [
      'Fortalece la barrera cutánea y mejora la humedad',
      'Mejora eficazmente los problemas de la piel flácida',
      'Suaviza la piel con cuidados dermatológicos',
      'Apto para todo tipo de piel'
    ],
    description: [
      'Formulado con ingredientes naturales de alta calidad para una piel radiante.',
      'Clínicamente probado para mejorar la elasticidad y firmeza de la piel.',
      'Libre de parabenos, sulfatos y fragancias artificiales.'
    ],
    recentProducts: [
      {
        id: 1,
        name: 'Serum Facial Glow',
        price: '20,00',
        image: 'https://images.unsplash.com/photo-1643379850623-7eb6442cd262?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBjb3NtZXRpY3MlMjBjcmVhbSUyMGJvdHRsZXxlbnwxfHx8fDE3NjYzMDczNzN8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        id: 2,
        name: 'Crema Hidratante',
        price: '32,00',
        image: 'https://images.unsplash.com/photo-1718490953028-021d352b14fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMHByb2R1Y3RzJTIwYmVpZ2V8ZW58MXx8fHwxNzY2MzA3MzczfDA&ixlib=rb-4.1.0&q=80&w=1080'
      }
    ]
  };

  // 페이지 전환 시 스크롤 최상단으로 초기화
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

      <main className={css(styles.main)}>
        <div className={css(styles.mainContainer)}>
          {/* 제품 이미지 */}
          <div className={css(styles.productImageContainer)}>
            <img
              src={product.image}
              alt={product.name}
              className={css(styles.productImage)}
            />
          </div>

          {/* 제품 정보 */}
          <div className={css(styles.productInfo)}>
            <h1 className={css(styles.productName)}>{product.name}</h1>
            <p className={css(styles.productPrice)}>$ {product.price}</p>

            {/* 사용법 항목 */}
            <ul className={css(styles.usageListInline)}>
              {product.usage.map((item, index) => (
                <li key={index} className={css(styles.usageItemInline)}>
                  {item}
                </li>
              ))}
            </ul>

            {/* 구매 버튼 */}
            <button className={css(styles.buyButton)} onClick={handleAddToCart}>
              COMPRAR AHORA
            </button>

            {/* 장바구니 */}
            <div className={css(styles.cartContainer)} onClick={handleAddToCart}>
              <MdFavoriteBorder size={20} color="#333" />
              <span className={css(styles.cartText)}>Carrito de compras</span>
            </div>
          </div>

          {/* 사용 방법 */}
          <div className={css(styles.section)}>
            <h2 className={css(styles.sectionTitle)}>Modo de uso</h2>
            <div className={css(styles.thickDivider)} />
            <div className={css(styles.descriptionContainer)}>
              <div className={css(styles.descriptionContent)}>
                {product.description.map((item, index) => (
                  <p key={index} className={css(styles.descriptionItem)}>
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* 최근 본 제품 */}
          <div className={css(styles.recentSection)}>
            <h2 className={css(styles.recentTitle)}>Productos vistos recientemente</h2>
            <div className={css(styles.thickDivider)} />

            <div className={css(styles.recentGrid)}>
              {product.recentProducts.map((item) => (
                <div key={item.id} className={css(styles.recentCard)}>
                  <div className={css(styles.recentImageContainer)}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className={css(styles.recentImage)}
                    />
                  </div>
                  <p className={css(styles.recentName)}>{item.name}</p>
                  <p className={css(styles.recentPrice)}>${item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: '100vh',
    backgroundColor: '#FAF8F5',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    display: 'flex',
    flexDirection: 'column',
  },

  main: {
    flex: 1,
    padding: '20px',
    '@media (min-width: 768px)': {
      padding: '40px',
    },
  },

  mainContainer: {
    maxWidth: '480px',
    margin: '0 auto',
  },

  productImageContainer: {
    width: '100%',
    aspectRatio: '1',
    borderRadius: '20px',
    overflow: 'hidden',
    backgroundColor: '#E8E4DF',
    marginBottom: '20px',
  },

  productImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },

  productInfo: {
    marginBottom: '32px',
  },

  productName: {
    fontSize: '16px',
    fontWeight: '400',
    color: '#333',
    marginBottom: '8px',
    textAlign: 'left',
  },

  productPrice: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#333',
    marginBottom: '16px',
    textAlign: 'left',
  },

  buyButton: {
    width: '100%',
    padding: '14px',
    backgroundColor: '#FF7F50',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    marginBottom: '16px',
    transition: `background-color ${ANIMATION_DURATION.normal} ${ANIMATION_EASING.ease}`,
    ':hover': {
      backgroundColor: '#FF6347',
    },
  },

  cartContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    cursor: 'pointer',
  },

  cartText: {
    fontSize: '14px',
    color: '#333',
  },

  section: {
    marginBottom: '24px',
  },

  sectionTitle: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#333',
    marginBottom: '8px',
    textAlign: 'left',
  },

  divider: {
    width: '100%',
    height: '1px',
    backgroundColor: '#B89F9F',
    marginBottom: '12px',
  },

  thickDivider: {
    width: '100%',
    height: '2px',
    backgroundColor: '#B89F9F',
    marginBottom: '12px',
  },

  usageListInline: {
    margin: 0,
    marginBottom: '16px',
    paddingLeft: '20px',
    listStyleType: 'disc',
  },

  usageItemInline: {
    fontSize: '13px',
    color: '#666',
    lineHeight: '1.6',
    marginBottom: '6px',
    textAlign: 'left',
  },

  descriptionContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },

  descriptionContent: {
    textAlign: 'left',
  },

  descriptionItem: {
    fontSize: '13px',
    color: '#666',
    lineHeight: '1.6',
    marginBottom: '8px',
    textAlign: 'left',
  },

  recentSection: {
    marginTop: '40px',
  },

  recentTitle: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#333',
    marginBottom: '8px',
    textAlign: 'left',
  },

  recentGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '16px',
  },

  recentCard: {
    cursor: 'pointer',
  },

  recentImageContainer: {
    width: '100%',
    aspectRatio: '1',
    borderRadius: '12px',
    overflow: 'hidden',
    backgroundColor: '#E8E4DF',
    marginBottom: '8px',
  },

  recentImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },

  recentName: {
    fontSize: '12px',
    color: '#666',
    marginBottom: '4px',
    textAlign: 'left',
  },

  recentPrice: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#333',
    margin: 0,
    textAlign: 'left',
  },
});

export default ProductDetailPage;
