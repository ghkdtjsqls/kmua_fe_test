import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import { useNavigate, useLocation } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';
import Shoppingbags from '../assets/images/Shopping bags illustration.png';
import { ANIMATION_DURATION, ANIMATION_EASING } from '../hooks/useAnimation';

const OrderCompletePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const cartItems = location.state?.cartItems || [
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
  ];

  const generateOrderNumber = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const random = String(Math.floor(Math.random() * 1000)).padStart(3, '0');
    return `${year}${month}${day}${hours}${minutes}${seconds}${random}`;
  };

  const formatDate = () => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const orderNumber = generateOrderNumber();
  const orderDate = formatDate();

  // 페이지 전환 시 스크롤 최상단으로 초기화
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={css(styles.container)}>
      <Header
        showMenu={false}
        showNav={false}
        showSearch={false}
        showCart={false}
        showShip={true}
      />

      {/* Main Content */}
      <main className={css(styles.main)}>
        <h2 className={css(styles.title)}>Pedido completado</h2>

        {/* Shopping Illustration */}
        <div className={css(styles.illustrationContainer)}>
          <img
            src={Shoppingbags}
            alt="Shopping bags illustration"
            className={css(styles.illustrationImage)}
          />
        </div>

        {/* Order Info */}
        <div className={css(styles.orderInfo)}>
          <p className={css(styles.orderDateText)}>
            Este es tu número de pedido del {orderDate}
          </p>
          <p className={css(styles.orderNumber)}>{orderNumber}</p>
        </div>

        {/* Order Items */}
        <div className={css(styles.orderItems)}>
          {cartItems.map((item) => (
            <div key={item.id} className={css(styles.orderItem)}>
              <img
                src={item.image}
                alt={item.name}
                className={css(styles.itemImage)}
              />
              <div className={css(styles.itemDetails)}>
                <p className={css(styles.itemName)}>{item.name}</p>
                <p className={css(styles.itemQuantity)}>X {item.quantity}</p>
                <p className={css(styles.itemPrice)}>$ {item.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className={css(styles.buttonContainer)}>
          <button className={css(styles.whatsappButton)}>
            Contactanos por WhatsApp
          </button>
          <button className={css(styles.statusButton)}>
            Ver el estado de tu pedido
          </button>
          <button
            className={css(styles.exploreButton)}
            onClick={() => navigate('/')}
          >
            Seguir explorando
          </button>
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
  },

  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    maxWidth: '480px',
    margin: '0 auto',
  },

  logo: {
    fontSize: '22px',
    fontWeight: '400',
    letterSpacing: '4px',
    color: '#333',
    margin: 0,
    cursor: 'pointer',
  },

  divider: {
    height: '1px',
    backgroundColor: '#E8E4DF',
  },

  main: {
    padding: '20px',
    maxWidth: '480px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  title: {
    fontSize: '24px',
    fontWeight: '400',
    color: '#333',
    margin: '20px 0 30px 0',
    textAlign: 'center',
  },

  illustrationContainer: {
    marginBottom: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  illustrationImage: {
    width: '150px',
    height: '150px',
    objectFit: 'contain',
  },

  orderInfo: {
    textAlign: 'center',
    marginBottom: '30px',
  },

  orderDateText: {
    fontSize: '14px',
    color: '#333',
    fontWeight: '600',
    margin: '0 0 8px 0',
  },

  orderNumber: {
    fontSize: '16px',
    fontWeight: '700',
    color: '#333',
    margin: 0,
  },

  orderItems: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '1px',
    backgroundColor: '#E8E4DF',
    border: '1px solid #E8E4DF',
    borderRadius: '8px',
    overflow: 'hidden',
    marginBottom: '40px',
  },

  orderItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '16px',
    backgroundColor: '#FFFFFF',
    gap: '16px',
  },

  itemImage: {
    width: '70px',
    height: '70px',
    objectFit: 'cover',
    borderRadius: '8px',
  },

  itemDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },

  itemName: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#333',
    margin: 0,
    textAlign: 'left',
  },

  itemQuantity: {
    fontSize: '13px',
    color: '#999',
    margin: 0,
    textAlign: 'left',
  },

  itemPrice: {
    fontSize: '13px',
    color: '#666',
    margin: 0,
    textAlign: 'left',
  },

  buttonContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    alignItems: 'center',
  },

  whatsappButton: {
    width: '80%',
    padding: '14px',
    backgroundColor: '#D4C5C5',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: `background-color ${ANIMATION_DURATION.normal} ${ANIMATION_EASING.ease}`,
    ':hover': {
      backgroundColor: '#C4B5B5',
    },
  },

  statusButton: {
    width: '80%',
    padding: '14px',
    backgroundColor: '#D4B8A0',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: `background-color ${ANIMATION_DURATION.normal} ${ANIMATION_EASING.ease}`,
    ':hover': {
      backgroundColor: '#C4A890',
    },
  },

  exploreButton: {
    width: '80%',
    padding: '14px',
    backgroundColor: '#D4B8A0',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: `background-color ${ANIMATION_DURATION.normal} ${ANIMATION_EASING.ease}`,
    ':hover': {
      backgroundColor: '#C4A890',
    },
  },
});

export default OrderCompletePage;
