import styled from 'styled-components';

export const CardContainers = styled.div`
  width: 300px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  flex: 1;
  padding: 17px 22px;
  &:hover {
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.2);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const CardTitle = styled.h2`
  font-size: 26px;
  color: #333;
  margin: 0;
  font-weight: 700;
  padding: 11px 0px 0px 0px;
`;

export const CardItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
`;
export const CardLabel = styled.label`
  font-weight: bold;
  color: #555;
  width: 100px;
`;
export const CardValue = styled.span`
  flex: 1;
  /* text-align: right; */
  color: #777;
`;
export const IconUser = styled.i`
  font-size: 30px;
  color: #ea5b0b !important;
`;
