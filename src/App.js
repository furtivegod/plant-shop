import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import ProductListingPage from './pages/ProductListingPage';
import ShoppingCartPage from './pages/ShoppingCartPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<ProductListingPage />} />
            <Route path="/cart" element={<ShoppingCartPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App; 