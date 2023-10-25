import Link from 'next/link';
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

import Table from '@/components/Table/Table';
import UsersTable from '@/components/UsersTable/UsersTable';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ButtonStake = styled.button`
  border: none;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #e6e6e6;
  margin-right: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 266px;
  border-radius: 8px;
  font-weight: 503;
  height: 61px;
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
  height: 61px;
  background-color: #ffffff;
  border: 1px solid #e6e6e6;
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
  margin: 20px 0;
`;

const ContainerHeader = styled.div`
  display: flex;
  align-items: end;
  gap: 10px;
  justify-content: flex-start;

  p {
    color: #030517;
    font-weight: 900;
  }
`;

const Image = styled.img`
  width: 154px;
  height: 140px;
`;

const WelcomeStack = styled.p`
  font-size: 40px;
`;

const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const Container = styled.div`
  justify-content: center;
  background-color: #ffffff;
  animation: ${fadeIn} 1.5s ease-in-out;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
    align-items: stretch;
  }
`;

const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const TableContainer = styled.div`
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 20px;
`;

const ButtonCreate = styled.button`
  padding: 10px 20px;
  border: none;
  height: 44px;
  background-color: #ea5b0b;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 8px;
  font-weight: 600;
  color: white;

  &:hover {
    opacity: 0.8;
  }
`;

const StacekHolderList: React.FC = () => {
  const [activeSection, setActiveSection] = useState('table');

  const handleButtonClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <Wrapper>
      <Container>
        <ContainerHeader>
          <Image src="/images/boy.png" alt="Boy" />
          <WelcomeStack>Welcome, João!</WelcomeStack>
        </ContainerHeader>
        <ButtonsContainers>
          <ButtonStake
            onClick={() => handleButtonClick('table')}
            className={activeSection === 'table' ? 'active' : ''}
            style={activeSection === 'table' ? { backgroundColor: '#f0f0f0' } : {}}
          >
            Stakeholders
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
          {activeSection === 'other' ? (
            <TableContainer>
              <SearchContainer>
                <ButtonCreate>Create User</ButtonCreate>
              </SearchContainer>
              <UsersTable />
            </TableContainer>
          ) : null}
        </div>
      </Container>
    </Wrapper>
  );
};

export default StacekHolderList;
