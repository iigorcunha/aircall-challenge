import styled from 'styled-components';

export const Container = styled.div`
  height: 528px;
  background-color: #fbfbfb;
`;

export const Card = styled.div`
  background-color: #fff;
  margin: 16px 24px;
  height: 100%;
  border-radius: 1rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: 500;
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
`;

export const CallInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  font-size: 18px;
  padding: 8px 16px;
  border-radius: 1rem;
  background-color: #3fbc1f;
  color: #fff;
`;

export const Spinner = styled.div`
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3fbc1f; /* Blue */
  border-radius: 50%;
  width: 64px;
  height: 64px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
