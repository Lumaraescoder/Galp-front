import styled, { keyframes } from 'styled-components';

export const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerElement = styled.div`
  border: 4px solid #3498db;
  border-top: 4px solid transparent;
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;
