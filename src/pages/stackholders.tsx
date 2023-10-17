import React, { useState } from 'react';

import CardInfo from '@/components/CardInfo/CardInfo';
import SearchBar from '@/components/SearchBar.tsx/SearchBar';
import { MainLayout } from '@/components/templates/MainLayout';

const StackHolders: React.FC = () => {
  const [searchInitiated, setSearchInitiated] = useState(false);

  const onSearch = (query) => {
    if (query.trim() !== '') {
      setSearchInitiated(true);
    } else {
      setSearchInitiated(false);
    }
  };

  return (
    <MainLayout>
      <SearchBar onSearch={onSearch} />
      {searchInitiated && <CardInfo />}
    </MainLayout>
  );
};

export default StackHolders;
