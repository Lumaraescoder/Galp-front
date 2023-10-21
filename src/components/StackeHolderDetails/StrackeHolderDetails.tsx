import { useRouter } from 'next/router';
import React from 'react';
import { CompanyInfo, Stakeholder } from 'src/types/types';
import styled from 'styled-components';
import useSWR from 'swr';

import Contracts from '../Contracts/Contracts';
import CreditBank from '../CreditBank/CreditBank';
import CardLineChart, { Steam } from '../Graph/Graph';
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

const Container = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  gap: 20px;
`;
const SmallCards = styled.div`
  flex-direction: column;
`;
const Card = styled.div`
  width: 283px;
  height: 142px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  font-family: Arial, sans-serif;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  margin: 26px 21px;
`;

const DarkCard = styled(Card)`
  background-color: #333;
  color: #fff;
`;

const LightCard = styled(Card)`
  background-color: #f5f5f5;
  color: #333;
`;

const Chart = styled.div`
  width: 220px;
  height: 120px;
  background-color: #ffd1d1;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Line = styled.div`
  width: 190px;
  height: 3px;
  background-color: #0077ff;
  border-radius: 10px;
`;

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
          <CreditBank />
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
