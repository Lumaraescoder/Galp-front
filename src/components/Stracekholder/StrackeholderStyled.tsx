import styled from 'styled-components';

export const CardContainers = styled.div`
  width: 300px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 17px 22px 10px 21px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  flex: 1;
  padding: 3px 14px;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
`;

export const CardTitle = styled.h2`
  font-size: 20px;
  color: #333;
  margin: 0;
  font-weight: 700;
  padding: 11px 0px 0px 0px;
`;

export const CardItem = styled.div`
  margin-bottom: 16px;
`;

export const CardLabel = styled.label`
  font-weight: bold;
  color: #555;
`;

export const CardValue = styled.span`
  margin-left: 10px;
  color: #777;
`;

export const IconUser = styled.i`
  font-size: 30px;
  color: #ea5b0b !important;
`;
