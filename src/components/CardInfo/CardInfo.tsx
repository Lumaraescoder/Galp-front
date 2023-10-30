import { useRouter } from 'next/router';
import React from 'react';
import { CardInfoProps, Stack } from 'src/types/types';
import useSWR from 'swr';

import Spinner from '../Spinner/Spinner';
import { CardContainer, CardText, CardTitle, Container, WrapperSpacing } from './CardInfoStyled';

const fetcher = (url: string) =>
  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  }).then((res) => res.json());

const CardInfo: React.FC<Stack> = ({ stakeholder }) => {
  const router = useRouter();

  const showMoreDetails = () => {
    router.push(`/stakeholderdetail/${stakeholder._id}`);
  };
  if (!stakeholder) {
    return <div>Loading or error... (appropriate message based on context)</div>;
  }

  return (
    <CardContainer>
      <WrapperSpacing>
        <div>
          <CardTitle>{stakeholder.business}</CardTitle>
          <CardText>{stakeholder.description}</CardText>
          <CardText>{stakeholder.stakeholder}</CardText>
          <CardText>{stakeholder.email}</CardText>
        </div>
        <div>
          <i className="fa fa-arrow-circle-right" aria-hidden="true" onClick={showMoreDetails}></i>
        </div>
      </WrapperSpacing>
    </CardContainer>
  );
};
export type Props = {
  searchQuery: string;
};

const CardList: React.FC<Props> = ({ searchQuery }) => {
  const { data: stakeholders, error } = useSWR<CardInfoProps[]>(
    'https://galp-api.vercel.app/stakeholders',
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!stakeholders) return <Spinner />;

  const displayedStakeholders = stakeholders.filter((stakeholder) => {
    const businessMatch = stakeholder.business.toLowerCase().includes(searchQuery.toLowerCase());

    const keywordMatch = stakeholder.keywords.some((keyword) =>
      keyword.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return businessMatch || keywordMatch;
  });

  return (
    <Container>
      {Array.isArray(displayedStakeholders) ? (
        displayedStakeholders.map((stakeholder) => (
          <CardInfo key={stakeholder._id} stakeholder={stakeholder} />
        ))
      ) : (
        <div>Error or no stakeholders.</div>
      )}
    </Container>
  );
};

export default CardList;
