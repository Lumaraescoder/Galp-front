import React from 'react';

import CardInfo from '@/components/CardInfo/CardInfo';
import SearchBar from '@/components/SearchBar.tsx/SearchBar';
import { MainLayout } from '@/components/templates/MainLayout';

const StackHolders: React.FC = () => {
  return (
    <MainLayout>
      <SearchBar />
      <CardInfo />
    </MainLayout>
  );
};

export default StackHolders;
