import { useRouter } from 'next/router';
import React from 'react';
import { CompanyInfo, Stakeholder } from 'src/types/types';
import styled from 'styled-components';
import useSWR from 'swr';

import Contracts from '../Contracts/Contracts';
import CreditBank from '../CreditBank/CreditBank';
import InfoCard from '../InfoCard/InfoCard';
import Spinner from '../Spinner/Spinner';
import StacekHolder from '../Stracekholder/Stacekholder';
import TableDetails from '../tableDetails/TableDetails';
import {
  CenteredContainer,
  CenteredItem,
  ChartContainer,
  ColumnContainer,
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
const IconTextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 26px;
  position: relative;
  top: 10px;
  font-weight: 600;
  &:hover {
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.2);
  }
`;
const StakeholderDetails: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: stakeholder, error } = useSWR<Stakeholder>(
    id ? `https://galp-api.vercel.app/stakeholders/${id}` : null,
    fetcher
  );

  if (error) return <div>Failed to load stakeholder</div>;
  if (!stakeholder) return <Spinner />;

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
            location={stakeholder.location}
            email={stakeholder.email}
            cellphone={stakeholder.cellphone}
          />
          <Contracts />
        </ColumnContainer>
        <ChartContainer>
          <CreditBank />
        </ChartContainer>
        <TableContainer>
          <IconTextContainer>
            <Users className="fa fa-users" aria-hidden="true"></Users>
            <h1>Contacts</h1>
          </IconTextContainer>

          <TableDetails />
        </TableContainer>
      </CenteredItem>
    </CenteredContainer>
  );
};

export default StakeholderDetails;
