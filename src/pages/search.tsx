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
      <SearchBar onSearch={onSearch} />
      {searchInitiated && (
        <CardContainer>
          <CardInfo searchQuery={searchQuery} />
        </CardContainer>
      )}
    </MainLayout>
  );
};

export default StackHolders;
