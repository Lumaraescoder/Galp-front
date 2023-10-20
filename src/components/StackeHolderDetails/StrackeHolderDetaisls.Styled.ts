import styled, { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1500px;
  padding: 50px;

  margin-top: 30px;
`;

export const CenteredItem = styled.div`
  width: 85%;
  background-color: #ffffff;
  padding: 20px;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 40px;
  width: 100%;
  margin-top: 50px;
`;
