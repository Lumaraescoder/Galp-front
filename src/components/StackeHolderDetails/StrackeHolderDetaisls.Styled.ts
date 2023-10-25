import styled from 'styled-components';

export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
`;

export const CenteredItem = styled.div`
  width: 100%;
  background-color: #ffffff;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 40px;
  width: 100%;
  margin-top: 50px;

  @media only screen and (max-width: 764px) {
    flex-direction: column;
    justify-content: center;
  }
`;
export const ChartContainer = styled.div`
  margin-top: 30px;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.2);
  }
`;
export const TableContainer = styled.div`
  margin-top: 30px;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.2);
  }
`;
export const Money = styled.i`
  font-size: 30px;
  color: #ea5b0b;
`;
export const Users = styled.i`
  font-size: 30px;
  color: #ea5b0b;
`;
