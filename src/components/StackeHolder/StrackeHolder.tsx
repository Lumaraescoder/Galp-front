import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Stakeholder } from 'src/types/types';
import useSWR from 'swr';

import {
  Card,
  Title,
  Text,
  ButtonGroupContainer,
  IconButton,
  Container,
  IconText
} from './StrackeHolcerStyled';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const CompanyInfoCard: React.FC<{ company: Stakeholder }> = ({ company }) => {
  const {
    name,
    description,
    location,
    phone,
    ceo,
    business,
    focalPoint,
    stakeholder,
    contact,
    cashflow,
    // logo,
    email
  } = company;

  const [activeButton, setActiveButton] = useState('Detalhes');
  const contracts = company.contracts || [];
  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  const renderContent = () => {
    switch (activeButton) {
      case 'Detalhes':
        return (
          <div>
            <h2>Detalhes do Stakeholder</h2>
            <Text>Nome: {name}</Text>
            <Text>{description}</Text>

            <Text>Stackeholder: {stakeholder}</Text>
            <Text>Contato:{contact}</Text>

            <Text>Foco: {focalPoint}</Text>
            <Text>Localização: {location}</Text>
            <Text>Email: {email}</Text>
            <Text>Cashflow: {cashflow}</Text>
            <Text>CEO: {ceo}</Text>
            <Text>Cellphone: {phone}</Text>
          </div>
        );
      case 'Contracts':
        return (
          <div>
            <h2>Contratos</h2>
            {contracts.map((contract) => (
              <div key={contract._id}>
                <a href={contract.url} target="_blank" rel="noopener noreferrer">
                  {contract.name}
                </a>
                <p>Criado por: {contract.createdBy}</p>
                <p>Criado em: {contract.createdAt}</p>
              </div>
            ))}
          </div>
        );
      default:
        return <div>Selecione uma das opções acima.</div>;
    }
  };

  return (
    <Card>
      <Title>{business}</Title>
      <Text>{description}</Text>
      <Text>{location}</Text>
      <Text>Tel: {phone}</Text>

      <ButtonGroupContainer>
        {/* Details IconButton */}
        <IconButton
          onClick={() => handleButtonClick('Detalhes')}
          selected={activeButton === 'Detalhes'}
        >
          <i
            className="fa fa-users"
            aria-hidden="true"
            style={{ color: activeButton === 'Detalhes' ? '#ea5b0b' : '#000000' }}
          ></i>
          <IconText selected={activeButton === 'Detalhes'}>Detalhes</IconText>
        </IconButton>

        <IconButton
          onClick={() => handleButtonClick('Contracts')}
          selected={activeButton === 'Contracts'}
        >
          <i
            className="fa fa-address-book"
            aria-hidden="true"
            style={{ color: activeButton === 'Contracts' ? '#ea5b0b' : '#000000' }}
          ></i>
          <IconText selected={activeButton === 'Contracts'}>Contracts</IconText>
        </IconButton>

        <IconButton
          onClick={() => handleButtonClick('Structure')}
          selected={activeButton === 'Structure'}
        >
          <i
            className="fa fa-sitemap"
            aria-hidden="true"
            style={{ color: activeButton === 'Structure' ? '#ea5b0b' : '#000000' }}
          ></i>
          <IconText selected={activeButton === 'Structure'}>Structure</IconText>
        </IconButton>

        <IconButton
          onClick={() => handleButtonClick('Interaction')}
          selected={activeButton === 'Interaction'}
        >
          <i
            className="fa fa-handshake-o"
            aria-hidden="true"
            style={{ color: activeButton === 'Interaction' ? '#ea5b0b' : '#000000' }}
          ></i>
          <IconText selected={activeButton === 'Interaction'}>Interaction</IconText>
        </IconButton>

        <IconButton
          onClick={() => handleButtonClick('Credit Bank')}
          selected={activeButton === 'Credit Bank'}
        >
          <i
            className="fa fa-university"
            aria-hidden="true"
            style={{ color: activeButton === 'Credit Bank' ? '#ea5b0b' : '#000000' }}
          ></i>
          <IconText selected={activeButton === 'Credit Bank'}>Credit Bank</IconText>
        </IconButton>
      </ButtonGroupContainer>

      <div style={{ marginTop: '20px' }}>{renderContent()}</div>

      <h2 style={{ marginTop: '20px', marginBottom: '10px' }}>Meetings Recentes</h2>

      <Text>As abas acima darão acesso a documentos em PDF, links da web e dados adicionais.</Text>
    </Card>
  );
};
const StakeholderDetails: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: stakeholder, error } = useSWR(
    id ? `https://galp-api.vercel.app/stakeholders/${id}` : null,
    fetcher
  );

  if (error) return <div>Failed to load stakeholder</div>;
  if (!stakeholder) return <div>Loading...</div>;

  const companyData = {
    _id: stakeholder._id,
    description: stakeholder.description,
    business: stakeholder.business,
    stakeholder: stakeholder.stakeholder,
    location: stakeholder.location,
    ceo: stakeholder.ceo,
    contact: stakeholder.contact,
    cashflow: stakeholder.cashflow,
    logo: stakeholder.logo,
    email: stakeholder.email,
    cellphone: stakeholder.cellphone,
    contracts: stakeholder.contracts,
    stakeholderType: stakeholder.stakeholderType,
    address: stakeholder.address,
    phone: stakeholder.phone,
    name: stakeholder.name,
    focalPoint: stakeholder.focalPoint
  };

  return (
    <Container>
      <CompanyInfoCard company={companyData} />
    </Container>
  );
};

export default StakeholderDetails;
