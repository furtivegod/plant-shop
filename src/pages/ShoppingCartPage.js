import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { cartActions } from '../store/cartSlice';

const CartContainer = styled.div`
  max-width: 1000px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const CartTitle = styled.h1`
  color: #2c3e50;
  margin-bottom: 2rem;
`;

const CartSummary = styled.div`
  background-color: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
`;

const CartItem = styled.div`
  display: grid;
  grid-template-columns: 100px 2fr 1fr 1fr auto;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid #e1e1e1;

  &:last-child {
    border-bottom: none;
  }
`;

const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
`;

const ItemInfo = styled.div`
  h3 {
    margin: 0;
    color: #2c3e50;
  }
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    opacity: 0.9;
  }
`;

const QuantityButton = styled(Button)`
  background-color: #e1e1e1;
  color: #333;
`;

const DeleteButton = styled(Button)`
  background-color: #dc3545;
  color: white;
`;

const ActionButton = styled(Button)`
  background-color: ${props => props.primary ? '#4CAF50' : '#6c757d'};
  color: white;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  margin-right: 1rem;
`;

function ShoppingCartPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, totalQuantity, totalAmount } = useSelector(state => state.cart);

  const handleIncrease = (item) => {
    dispatch(cartActions.addToCart(item));
  };

  const handleDecrease = (id) => {
    dispatch(cartActions.removeFromCart(id));
  };

  const handleDelete = (id) => {
    dispatch(cartActions.deleteFromCart(id));
  };

  const handleCheckout = () => {
    alert('Coming Soon!');
  };

  if (items.length === 0) {
    return (
      <CartContainer>
        <CartTitle>Your Cart is Empty</CartTitle>
        <ActionButton onClick={() => navigate('/products')}>
          Continue Shopping
        </ActionButton>
      </CartContainer>
    );
  }

  return (
    <CartContainer>
      <CartTitle>Shopping Cart</CartTitle>
      <CartSummary>
        <h3>Cart Summary</h3>
        <p>Total Items: {totalQuantity}</p>
        <p>Total Amount: ${totalAmount.toFixed(2)}</p>
      </CartSummary>

      {items.map(item => (
        <CartItem key={item.id}>
          <ItemImage src={item.image} alt={item.name} />
          <ItemInfo>
            <h3>{item.name}</h3>
            <p>${item.price.toFixed(2)} each</p>
          </ItemInfo>
          <QuantityControl>
            <QuantityButton onClick={() => handleDecrease(item.id)}>-</QuantityButton>
            <span>{item.quantity}</span>
            <QuantityButton onClick={() => handleIncrease(item)}>+</QuantityButton>
          </QuantityControl>
          <div>${item.totalPrice.toFixed(2)}</div>
          <DeleteButton onClick={() => handleDelete(item.id)}>Delete</DeleteButton>
        </CartItem>
      ))}

      <div style={{ marginTop: '2rem' }}>
        <ActionButton primary onClick={handleCheckout}>
          Checkout
        </ActionButton>
        <ActionButton onClick={() => navigate('/products')}>
          Continue Shopping
        </ActionButton>
      </div>
    </CartContainer>
  );
}

export default ShoppingCartPage; 