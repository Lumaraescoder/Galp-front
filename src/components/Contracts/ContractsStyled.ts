import styled from 'styled-components';

export const ContractsContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: auto;

  p {
    font-weight: 600;
  }

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const ContractItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  margin: 20px 0;
  padding-bottom: 20px;

  &:last-child {
    border-bottom: none;
  }
`;

export const DownloadIcon = styled.i`
  font-size: 24px;
  color: #ea5b0b;
`;

export const ContractsHeader = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  margin-bottom: 20px;
`;

export const ContractName = styled.span`
  font-size: 18px;
  color: #000;
`;
export const Title = styled.p`
  font-size: 18px;
  font-weight: bold;
`;
