import React, { useState } from 'react';

import CardInfo from '@/components/CardInfo/CardInfo';
import SearchBar from '@/components/SearchBar.tsx/SearchBar';
import { MainLayout } from '@/components/templates/MainLayout';

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
      {searchInitiated && <CardInfo searchQuery={searchQuery} />}
    </MainLayout>
  );
};

export default StackHolders;
