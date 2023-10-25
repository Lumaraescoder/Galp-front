import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

import CardInfo from '@/components/CardInfo/CardInfo';
import SearchBar from '@/components/SearchBar.tsx/SearchBar';
import { MainLayout } from '@/components/templates/MainLayout';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

export const CardContainer = styled.div`
  animation: ${fadeIn} 1s ease-in-out;
`;
const StackHolders: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchInitiated, setSearchInitiated] = useState(false);

  const onSearch = (query: string) => {
    setSearchQuery(query);
    setSearchInitiated(query.trim().length > 0);
  };

  return (
    <MainLayout>
      <Wrapper>
        <SearchBar onSearch={onSearch} />
        {searchInitiated && (
          <CardContainer>
            <CardInfo searchQuery={searchQuery} />
          </CardContainer>
        )}
      </Wrapper>
    </MainLayout>
  );
};

export default StackHolders;
