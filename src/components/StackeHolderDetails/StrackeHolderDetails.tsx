import React from 'react';

import Contracts from '../Contracts/Contracts';
import CardLineChart from '../Graph/Graph';
import InfoCard from '../InfoCard/InfoCard';
import StacekHolder from '../Stracekholder/Stacekholder';
import Table from '../Table/Table';
import { CenteredContainer, CenteredItem, ColumnContainer } from './StrackeHolderDetaisls.Styled';

const StakeholderDetails: React.FC = () => {
  return (
    <CenteredContainer>
      <CenteredItem>
        <InfoCard />
        <ColumnContainer>
          <StacekHolder />
          <Contracts />
        </ColumnContainer>
        <ColumnContainer>
          <CardLineChart></CardLineChart>
        </ColumnContainer>
        <Table></Table>
      </CenteredItem>
    </CenteredContainer>
  );
};

export default StakeholderDetails;
