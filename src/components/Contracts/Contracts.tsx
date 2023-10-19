import React from 'react';

import {
  ContractItem,
  ContractName,
  ContractsContainer,
  ContractsHeader,
  DownloadIcon,
  Title
} from './ContractsStyled';

const Contracts = () => {
  const staticContracts = [
    { name: 'energy_contract_2023.pdf', downloadLink: '#' },
    { name: 'energy_contract_2018.pdf', downloadLink: '#' },
    { name: 'energy_contract_2017.pdf', downloadLink: '#' }
  ];

  return (
    <ContractsContainer>
      <ContractsHeader>
        <DownloadIcon className=" fa fa-pencil" />
        &nbsp;&nbsp; <Title>Contracts</Title>
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
