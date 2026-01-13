import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';
import { MdShoppingCart, MdCreditCard } from 'react-icons/md';
import CartComponent from '../components/CartComponent';
import Header from '../components/header';
import { ANIMATION_DURATION, ANIMATION_EASING } from '../hooks/useAnimation';

const ShippingAddressPage = () => {
  const navigate = useNavigate();
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
  const [formData, setFormData] = useState({
    phone: '',
    instagram: '',
    country: 'Mexico',
    firstName: '',
    lastName1: '',
    lastName2: '',
    address: '',
    apartment: '',
    postalCode: '',
    city: '',
    state: ''
  });

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to order complete page with cart items
    navigate('/order-complete', { state: { cartItems } });
  };

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
        showCart={true}
        showShip={false}
        onCartClick={() => setCartOpen(true)}
      />

      {/* Cart Component */}
      <CartComponent
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      {/* Header */}
      {/* <header className={css(styles.header)}>
        <div className={css(styles.headerSpacer)} />
        <h1 className={css(styles.logo)} onClick={() => navigate('/')}>KMUA</h1>
        <button className={css(styles.cartButton)} onClick={() => setCartOpen(true)}>
          <MdShoppingCart size={24} color="#333" />
        </button>
      </header> */}

      <div className={css(styles.divider)} />

      {/* Main Content */}
      <main className={css(styles.main)}>
        <form onSubmit={handleSubmit} className={css(styles.form)}>
          {/* Contacto Section */}
          <section className={css(styles.section)}>
            <h2 className={css(styles.sectionTitle)}>Contacto</h2>
            <input
              type="tel"
              name="phone"
              placeholder="전화부"
              value={formData.phone}
              onChange={handleInputChange}
              className={css(styles.input)}
            />
            <input
              type="text"
              name="instagram"
              placeholder="ID de Instagram"
              value={formData.instagram}
              onChange={handleInputChange}
              className={css(styles.input)}
            />
          </section>

          {/* Entrega Section */}
          <section className={css(styles.section)}>
            <h2 className={css(styles.sectionTitle)}>Entrega</h2>
            <div className={css(styles.selectWrapper)}>
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className={css(styles.select)}
              >
                <option value="Mexico">Mexico</option>
              </select>
              <span className={css(styles.selectLabel)}>País / Region</span>
            </div>
            <input
              type="text"
              name="firstName"
              placeholder="Nombre"
              value={formData.firstName}
              onChange={handleInputChange}
              className={css(styles.input)}
            />
            <input
              type="text"
              name="lastName1"
              placeholder="Apellidos"
              value={formData.lastName1}
              onChange={handleInputChange}
              className={css(styles.input)}
            />
            <input
              type="text"
              name="lastName2"
              placeholder="Apellidos"
              value={formData.lastName2}
              onChange={handleInputChange}
              className={css(styles.input)}
            />
            <input
              type="text"
              name="address"
              placeholder="Direccion"
              value={formData.address}
              onChange={handleInputChange}
              className={css(styles.input)}
            />
            <input
              type="text"
              name="apartment"
              placeholder="Casa, apartamento, etc. (opcional)"
              value={formData.apartment}
              onChange={handleInputChange}
              className={css(styles.input)}
            />
            <input
              type="text"
              name="postalCode"
              placeholder="Codigo postal"
              value={formData.postalCode}
              onChange={handleInputChange}
              className={css(styles.input)}
            />
            <input
              type="text"
              name="city"
              placeholder="Ciudad"
              value={formData.city}
              onChange={handleInputChange}
              className={css(styles.input)}
            />
            <input
              type="text"
              name="state"
              placeholder="Estado"
              value={formData.state}
              onChange={handleInputChange}
              className={css(styles.input)}
            />
          </section>

          {/* Pago Section */}
          <section className={css(styles.section, styles.pagoSection)}>
            <h2 className={css(styles.sectionTitle)}>Pago</h2>
            <div className={css(styles.paymentBox)}>
              <span className={css(styles.paymentLabel)}>Mercado Page</span>
              <div className={css(styles.paymentContent)}>
                <div className={css(styles.cardDesign)}>
                  <div className={css(styles.cardChip)}>
                    <div className={css(styles.chipLine)} />
                    <div className={css(styles.chipLine)} />
                    <div className={css(styles.chipLine)} />
                  </div>
                  <div className={css(styles.cardWave)}>
                    <MdCreditCard size={24} color="#4A90D9" />
                  </div>
                </div>
                <p className={css(styles.paymentDescription)}>
                  Después de hacer clic en "Pagar con PayPal", se te redirigirá a PayPal para completar tu compra de forma segura.
                </p>
              </div>
            </div>
          </section>

          {/* Summary Section */}
          <section className={css(styles.summarySection)}>
            <div className={css(styles.summaryRow)}>
              <span className={css(styles.summaryLabel)}>tarifa de entrega</span>
              <span className={css(styles.summaryValue)}>$20.00</span>
            </div>
            <div className={css(styles.summaryRow, styles.totalRow)}>
              <span className={css(styles.totalLabel)}>total</span>
              <span className={css(styles.totalValue)}>$599.00</span>
            </div>
            <button type="submit" className={css(styles.payButton)}>
              Pagar ahora
            </button>
          </section>
        </form>
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
    justifyContent: 'space-between',
    padding: '20px',
    maxWidth: '480px',
    margin: '0 auto',
    position: 'relative',
  },

  headerSpacer: {
    width: '32px',
  },

  logo: {
    fontSize: '18px',
    fontWeight: '600',
    letterSpacing: '2px',
    color: '#333',
    margin: 0,
    cursor: 'pointer',
    flex: 1,
    textAlign: 'center',
  },

  cartButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '4px',
    display: 'flex',
    alignItems: 'center',
  },

  divider: {
    height: '1px',
    backgroundColor: '#E8E4DF',
  },

  main: {
    padding: '20px',
    maxWidth: '480px',
    margin: '0 auto',
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
  },

  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },

  sectionTitle: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#333',
    margin: '0 0 4px 0',
    textAlign: 'left',
  },

  input: {
    width: '100%',
    padding: '14px 16px',
    border: '1px solid #B89F9F',
    borderRadius: '8px',
    fontSize: '14px',
    color: '#333',
    backgroundColor: '#FFFFFF',
    outline: 'none',
    boxSizing: 'border-box',
    transition: `border-color ${ANIMATION_DURATION.fast} ${ANIMATION_EASING.ease}`,
    ':focus': {
      borderColor: '#B89F9F',
    },
    '::placeholder': {
      color: '#999',
    },
  },

  selectWrapper: {
    position: 'relative',
    width: '100%',
  },

  select: {
    width: '100%',
    padding: '22px 16px 10px 16px',
    border: '1px solid #B89F9F',
    borderRadius: '8px',
    fontSize: '14px',
    color: '#333',
    backgroundColor: '#FFFFFF',
    outline: 'none',
    appearance: 'none',
    cursor: 'pointer',
    boxSizing: 'border-box',
    ':focus': {
      borderColor: '#B89F9F',
    },
  },

  selectLabel: {
    position: 'absolute',
    top: '8px',
    left: '16px',
    fontSize: '11px',
    color: '#999',
    pointerEvents: 'none',
  },

  pagoSection: {
    marginTop: '20px',
  },

  paymentBox: {
    border: '1px solid #B89F9F',
    borderRadius: '8px',
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
  },

  paymentLabel: {
    display: 'block',
    padding: '14px 16px',
    fontSize: '14px',
    color: '#999',
    borderBottom: '1px solid #B89F9F',
    textAlign: 'left',
  },

  paymentContent: {
    padding: '20px 16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
  },

  cardDesign: {
    width: '100px',
    height: '65px',
    backgroundColor: '#E8F4FD',
    borderRadius: '8px',
    padding: '12px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxShadow: '0 2px 8px rgba(74, 144, 217, 0.2)',
  },

  cardChip: {
    width: '28px',
    height: '20px',
    backgroundColor: '#FFD700',
    borderRadius: '3px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '2px',
    padding: '3px',
  },

  chipLine: {
    height: '2px',
    backgroundColor: '#DAA520',
    borderRadius: '1px',
  },

  cardWave: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  paymentDescription: {
    fontSize: '11px',
    color: '#999',
    textAlign: 'left',
    margin: 0,
    lineHeight: '1.5',
  },

  summarySection: {
    marginTop: '40px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },

  summaryRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  summaryLabel: {
    fontSize: '14px',
    color: '#666',
  },

  summaryValue: {
    fontSize: '14px',
    color: '#666',
  },

  totalRow: {
    marginTop: '8px',
  },

  totalLabel: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#333',
  },

  totalValue: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#333',
  },

  payButton: {
    width: '100%',
    padding: '16px',
    backgroundColor: '#4FC3F7',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: `background-color ${ANIMATION_DURATION.normal} ${ANIMATION_EASING.ease}`,
    marginTop: '8px',
    ':hover': {
      backgroundColor: '#29B6F6',
    },
  },
});

export default ShippingAddressPage;
