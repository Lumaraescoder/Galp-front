import styled from 'styled-components';

export const CardContainers = styled.div`
  width: 100%;
  max-width: 800px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  flex: 1;
  padding: 20px;
  &:hover {
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.2);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const CardTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 26px;
  color: #333;
  font-weight: 700;
  gap: 20px;
`;

export const CardItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 12px;
  font-size: 18px;
  gap: 20px;

  @media only screen and (max-width: 764px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
  }
`;

export const CardLabel = styled.span`
  font-weight: bold;
  color: black;
`;

export const CardValue = styled.span`
  color: #777;
`;
export const IconUser = styled.i`
  font-size: 30px;
  color: #ea5b0b !important;
`;
