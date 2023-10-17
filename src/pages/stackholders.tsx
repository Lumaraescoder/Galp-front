import React, { useState } from 'react';

import CardInfo from '@/components/CardInfo/CardInfo';
import SearchBar from '@/components/SearchBar.tsx/SearchBar';
import { MainLayout } from '@/components/templates/MainLayout';

const StackHolders: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const onSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <MainLayout>
      <SearchBar onSearch={onSearch} />
      <CardInfo searchQuery={searchQuery} />
    </MainLayout>
  );
};

export default StackHolders;
