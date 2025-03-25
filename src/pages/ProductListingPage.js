import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { cartActions } from '../store/cartSlice';
import { products } from '../data/products';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const CategorySection = styled.section`
  margin-bottom: 3rem;
`;

const CategoryTitle = styled.h2`
  color: #2c3e50;
  border-bottom: 2px solid #4CAF50;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
`;

const ProductCard = styled.div`
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  padding: 1rem;
`;

const ProductName = styled.h3`
  margin: 0;
  color: #2c3e50;
`;

const ProductPrice = styled.p`
  color: #4CAF50;
  font-weight: bold;
  font-size: 1.2rem;
`;

const ProductDescription = styled.p`
  color: #666;
  font-size: 0.9rem;
`;

const AddToCartButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 0 0 8px 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover:not(:disabled) {
    background-color: #45a049;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

function ProductListingPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const categories = [...new Set(products.map(product => product.category))];

  const handleAddToCart = (product) => {
    dispatch(cartActions.addToCart(product));
  };

  const isProductInCart = (productId) => {
    return cartItems.some(item => item.id === productId);
  };

  return (
    <PageContainer>
      {categories.map(category => (
        <CategorySection key={category}>
          <CategoryTitle>{category}</CategoryTitle>
          <ProductGrid>
            {products
              .filter(product => product.category === category)
              .map(product => (
                <ProductCard key={product.id}>
                  <ProductImage src={product.image} alt={product.name} />
                  <ProductInfo>
                    <ProductName>{product.name}</ProductName>
                    <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
                    <ProductDescription>{product.description}</ProductDescription>
                  </ProductInfo>
                  <AddToCartButton
                    onClick={() => handleAddToCart(product)}
                    disabled={isProductInCart(product.id)}
                  >
                    {isProductInCart(product.id) ? 'In Cart' : 'Add to Cart'}
                  </AddToCartButton>
                </ProductCard>
              ))}
          </ProductGrid>
        </CategorySection>
      ))}
    </PageContainer>
  );
}

export default ProductListingPage; 