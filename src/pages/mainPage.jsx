import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Header from '../components/header';
import Footer from '../components/footer';
import SideMenu from '../components/SideMenu';
import SearchComponent from '../components/SearchComponent';
import CartComponent from '../components/CartComponent';
import Banner from '../components/Banner';
import ProductSection from '../components/ProductSection';


// 제품 데이터
const productsData = {
  popular: [
    {
      id: 1,
      name: 'Serum Set de Hidratación',
      price: '25,00',
      image: 'https://images.unsplash.com/photo-1643379850623-7eb6442cd262?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBjb3NtZXRpY3MlMjBjcmVhbSUyMGJvdHRsZXxlbnwxfHx8fDE3NjYzMDczNzN8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 2,
      name: 'Jabón Corporal Miel',
      price: '15,00',
      image: 'https://images.unsplash.com/photo-1718490953028-021d352b14fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMHByb2R1Y3RzJTIwYmVpZ2V8ZW58MXx8fHwxNzY2MzA3MzczfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 7,
      name: 'Crema Facial Antiarrugas',
      price: '35,00',
      image: 'https://images.unsplash.com/photo-1643379850623-7eb6442cd262?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBjb3NtZXRpY3MlMjBjcmVhbSUyMGJvdHRsZXxlbnwxfHx8fDE3NjYzMDczNzN8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 8,
      name: 'Aceite Esencial Lavanda',
      price: '22,00',
      image: 'https://images.unsplash.com/photo-1718490953028-021d352b14fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMHByb2R1Y3RzJTIwYmVpZ2V8ZW58MXx8fHwxNzY2MzA3MzczfDA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ],
  recommended: [
    {
      id: 3,
      name: 'Exfoliante Glow en Plástic Verde',
      price: '20,00',
      image: 'https://images.unsplash.com/photo-1765964492963-b0aa8c172431?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpYyUyMGphciUyMG5hdHVyYWx8ZW58MXx8fHwxNzY2MzA3Mzc0fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 4,
      name: 'Máscara De Lujo double ideas',
      price: '30,00',
      image: 'https://images.unsplash.com/photo-1693146187444-d3d993a74a53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBwcm9kdWN0JTIwbWluaW1hbHxlbnwxfHx8fDE3NjYyNTA4NTF8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 9,
      name: 'Tónico Facial Refrescante',
      price: '18,00',
      image: 'https://images.unsplash.com/photo-1765964492963-b0aa8c172431?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpYyUyMGphciUyMG5hdHVyYWx8ZW58MXx8fHwxNzY2MzA3Mzc0fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 10,
      name: 'Mascarilla Purificante',
      price: '28,00',
      image: 'https://images.unsplash.com/photo-1693146187444-d3d993a74a53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBwcm9kdWN0JTIwbWluaW1hbHxlbnwxfHx8fDE3NjYyNTA4NTF8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ],
  recent: [
    {
      id: 5,
      name: 'Colágeno 30, 50 Préstamo',
      price: '18,00',
      image: 'https://images.unsplash.com/photo-1733660227083-12b78ad0073d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2FwJTIwY29zbWV0aWNzJTIwYmVpZ2V8ZW58MXx8fHwxNzY2MzA3Mzc1fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 6,
      name: 'Jabón hydratante Corporal',
      price: '12,00',
      image: 'https://images.unsplash.com/photo-1739950839930-ef45c078f316?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMGNyZWFtJTIwbHV4dXJ5fGVufDF8fHx8MTc2NjMwNzM3NXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 11,
      name: 'Bálsamo Labial Natural',
      price: '8,00',
      image: 'https://images.unsplash.com/photo-1733660227083-12b78ad0073d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2FwJTIwY29zbWV0aWNzJTIwYmVpZ2V8ZW58MXx8fHwxNzY2MzA3Mzc1fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 12,
      name: 'Loción Corporal Hidratante',
      price: '24,00',
      image: 'https://images.unsplash.com/photo-1739950839930-ef45c078f316?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMGNyZWFtJTIwbHV4dXJ5fGVufDF8fHx8MTc2NjMwNzM3NXww&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ]
};

// Main MainPage 컴포넌트
const MainPage = () => {
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
      //isOpen, onClose는 매개변수(props), 상태변수 변경시에 Open/Close 결정
      //다만 isOpen, onClose의 형태가 다른 이유는 onClose는 콜백 함수이기 때문에
      //isOpen은 부모에서 상태변경이 이루어지면 자식 코드에게 props로 값을 전달하는 형태
      //onClose는 함수 자체를 props로 전달하여 자식 코드에서 onClose에 대한 이벤트 핸들러가 실행되면
      //콜백함수로 인해 부모의 상태를 변경시킬 수 있다.
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
          <Banner />
          <ProductSection title="Más popular" products={productsData.popular} />
          <ProductSection title="Recomendado" products={productsData.recommended} />
          <ProductSection title="Más reciente" products={productsData.recent} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

// Aphrodite 스타일 정의
const styles = StyleSheet.create({
  container: {
    minHeight: '100vh',
    backgroundColor: '#FFF9F6',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    display: 'flex',
    flexDirection: 'column',
  },
  
  // Main 스타일
  main: {
    flex: 1,
    padding: '0 20px 40px',
    '@media (min-width: 768px)': {
      padding: '0 40px 60px',
    },
    '@media (min-width: 1200px)': {
      padding: '0 60px 80px',
    },
  },

  mainContainer: {
    maxWidth: '1400px',
    margin: '0 auto',
  },
});

export default MainPage;
