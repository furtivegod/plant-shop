import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LandingContainer = styled.div`
  height: 100vh;
  background-color: #4CAF50; /* Solid color fallback */
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('/images/landing-bg.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin-bottom: 2rem;
`;

const GetStartedButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

function LandingPage() {
  const navigate = useNavigate();

  return (
    <LandingContainer>
      <Title>Welcome to Plant Paradise</Title>
      <Description>
        Discover our carefully curated collection of beautiful houseplants. 
        We're passionate about bringing nature into your home with healthy, 
        sustainably grown plants that purify your air and brighten your space.
      </Description>
      <GetStartedButton onClick={() => navigate('/products')}>
        Get Started
      </GetStartedButton>
    </LandingContainer>
  );
}

export default LandingPage; 