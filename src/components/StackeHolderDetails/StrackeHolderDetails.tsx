import { useRouter } from 'next/router';
import React from 'react';
import { CompanyInfo, Stakeholder } from 'src/types/types';
import useSWR from 'swr';

import Contracts from '../Contracts/Contracts';
import CardLineChart from '../Graph/Graph';
import InfoCard from '../InfoCard/InfoCard';
import StacekHolder from '../Stracekholder/Stacekholder';
import Table from '../Table/Table';
import {
  CenteredContainer,
  CenteredItem,
  ChartContainer,
  ColumnContainer,
  Money,
  TableContainer,
  Users
} from './StrackeHolderDetaisls.Styled';

const fetcher = (url: string) =>
  fetch(url).then((res) => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    return res.json();
  });

const StakeholderDetails: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: stakeholder, error } = useSWR<Stakeholder>(
    id ? `https://galp-api.vercel.app/stakeholders/${id}` : null,
    fetcher
  );

  if (error) return <div>Failed to load stakeholder</div>;
  if (!stakeholder) return <div>Loading...</div>;
  const companyInfo: CompanyInfo = {
    name: stakeholder.business,
    description: stakeholder.description,
    location: stakeholder.location,
    contactNumber: stakeholder.contact,
    email: stakeholder.email,
    logo: stakeholder.logo
  };

  return (
    <CenteredContainer>
      <CenteredItem>
        <InfoCard company={companyInfo} />
        <ColumnContainer>
          <StacekHolder
            company={stakeholder.business}
            stakeholder={stakeholder.stakeholder}
            address={stakeholder.location}
          />
          <Contracts />
        </ColumnContainer>
        <ChartContainer>
          <Money className="fa fa-money" aria-hidden="true"></Money>

          <CardLineChart />
        </ChartContainer>
        <TableContainer>
          <Users className="fa fa-users" aria-hidden="true"></Users>

          <Table></Table>
        </TableContainer>
      </CenteredItem>
    </CenteredContainer>
  );
};

export default StakeholderDetails;
