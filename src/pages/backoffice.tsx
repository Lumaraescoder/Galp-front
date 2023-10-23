import Link from 'next/link';
import React, { useState } from 'react';
import styled from 'styled-components';

import { ChartContainer } from '@/components/StackeHolderDetails/StrackeHolderDetaisls.Styled';
import Table from '@/components/Table/Table';

const ButtonStake = styled.button`
  border: none;
  background-color: E6E6E6;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-right: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 266px;
  border-radius: 8px;
  font-weight: 503;
  &:hover {
    background-color: #f0f0f0;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

const ButtonDash = styled.button`
  padding: 10px 20px;
  border: none;
  height: 50px;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-right: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 8px;
  font-weight: 503;
  width: 266px;
  color: grey;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const ButtonsContainers = styled.div`
  display: flex;
  margin: 20px 34px;
`;
const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: -11px;
  p {
    color: #030517;
    font-weight: 799;
  }
`;
const Image = styled.img`
  width: 120px;
  height: 120px;
  margin: 3px 0px;
`;
const WelcomeStack = styled.p`
  margin: 50px 0px;
  white-space: nowrap;
  font-size: 40px;
  position: relative;
  top: 24px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  justify-content: center;
  background-color: #ffffff;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
    align-items: stretch;
  }
`;
const SearchContainer = styled.div`
  width: 100%;
  padding: 18px 37px;
  display: flex;
  align-items: center;
  position: relative;
`;

const TableContainer = styled.div`
  margin-top: 50px;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.2);
  height: 55vh;
  border-radius: 12px;

  @media (max-height: 800px) {
    height: 70vh;
  }

  @media (max-width: 768px) {
    height: 70vh;
  }
`;
const ButtonCreate = styled.button`
  padding: 10px 20px;
  border: none;
  height: 53px;
  background-color: #ea5b0b;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-right: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 8px;
  font-weight: 503;
  color: white;
  position: absolute;
  right: 26px;
  bottom: 10px;
  top: 38px;
  &:hover {
    background-color: #f0f0f0;
  }
`;
const StacekHolderList: React.FC = () => {
  const [activeSection, setActiveSection] = useState('table');

  const handleButtonClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <Container>
      <ContainerHeader>
        <Image src="/images/boy.png" alt="Boy" />
        <WelcomeStack>Welcome, user !</WelcomeStack>
      </ContainerHeader>
      <ButtonsContainers>
        <ButtonStake
          onClick={() => handleButtonClick('table')}
          className={activeSection === 'table' ? 'active' : ''}
          style={activeSection === 'table' ? { backgroundColor: '#f0f0f0' } : {}}
        >
          Lista de Stakeholders
        </ButtonStake>
        <ButtonDash
          onClick={() => handleButtonClick('other')}
          className={activeSection === 'other' ? 'active' : ''}
          style={activeSection === 'other' ? { backgroundColor: '#f0f0f0' } : {}}
        >
          Users
        </ButtonDash>
      </ButtonsContainers>
      <div>
        {activeSection === 'table' ? (
          <TableContainer>
            <SearchContainer>
              <Link href="/stakeholderadd" passHref>
                <ButtonCreate>Create Stakeholder</ButtonCreate>
              </Link>
            </SearchContainer>
            <Table />
          </TableContainer>
        ) : null}
        {activeSection === 'other' ? <ChartContainer /> : null}
      </div>
    </Container>
  );
};

export default StacekHolderList;
