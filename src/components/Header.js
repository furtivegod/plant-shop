import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import './Header.css';

const CartLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CartCount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #e44d26;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
`;

function Header() {
  const cartQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <CartLink to="/cart">
          Cart
          {cartQuantity > 0 && <CartCount>{cartQuantity}</CartCount>}
        </CartLink>
      </nav>
    </header>
  );
}

export default Header; 