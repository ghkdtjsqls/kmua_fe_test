import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/mainPage';
import BannerPage from './pages/BannerPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ShippingAddressPage from './pages/ShippingAddressPage';
import OrderCompletePage from './pages/OrderCompletePage';
import ShippingCheckPage from './pages/ShippingCheckPage';
import CategoryPage from './pages/CategoryPage';

function App() {
    return (
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/bannerPage" element={<BannerPage />} />
                        <Route path="/product/:id" element={<ProductDetailPage />} />
                        <Route path="/shipping" element={<ShippingAddressPage />} />
                        <Route path="/order-complete" element={<OrderCompletePage />} />
                        <Route path="/shipping-check" element={<ShippingCheckPage />} />
                        <Route path="/:category/:subcategory" element={<CategoryPage />} />
                    </Routes>
                </BrowserRouter>
            </div>
    );
}

export default App;
