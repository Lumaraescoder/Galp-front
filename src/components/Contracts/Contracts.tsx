import React from 'react';
import styled from 'styled-components';

const ContractsContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  width: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  p {
    font-weight: 600;
  }
`;

const ContractItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  margin: 20px 0;
  &:last-child {
    border-bottom: none;
  }
`;

const DownloadIcon = styled.i`
  font-size: 24px;
  color: #ea5b0b;
`;

const ContractsHeader = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  margin-bottom: 20px;
`;

const ContractName = styled.span`
  font-size: 18px;
  color: #000;
`;

const Contracts = () => {
  const staticContracts = [
    { name: 'energy_contract_2023.pdf', downloadLink: '#' },
    { name: 'energy_contract_2018.pdf', downloadLink: '#' },
    { name: 'energy_contract_2017.pdf', downloadLink: '#' }
  ];

  return (
    <ContractsContainer>
      <ContractsHeader>
        <DownloadIcon className="fa fa-download" />
        &nbsp;&nbsp; <p>Contracts</p>
      </ContractsHeader>
      {staticContracts.map((contract, index) => (
        <ContractItem key={index}>
          <ContractName>{contract.name}</ContractName>
          <a href={contract.downloadLink} target="_blank" rel="noopener noreferrer">
            <DownloadIcon className="fa fa-download" />
          </a>
        </ContractItem>
      ))}
    </ContractsContainer>
  );
};

export default Contracts;
