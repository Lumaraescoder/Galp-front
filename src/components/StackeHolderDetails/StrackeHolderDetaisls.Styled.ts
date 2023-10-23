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
  height: 1800px;
  padding: 50px;

  margin-top: 100px;
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
export const ChartContainer = styled.div`
  margin-top: 30px;
  height: 650px;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.2);
  }
`;
export const TableContainer = styled.div`
  margin-top: 50px;
  height: 600px;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
export const Money = styled.i`
  font-size: 30px;
  color: #ea5b0b;
  margin: 17px 15px;
`;
export const Users = styled.i`
  font-size: 30px;
  color: #ea5b0b;
  margin: 17px 15px;
`;
