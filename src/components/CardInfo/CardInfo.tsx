import { useRouter } from 'next/router';
import React from 'react';
import { CardInfoProps, Stack } from 'src/types/types';
import useSWR from 'swr';

import Spinner from '../Spinner/Spinner';
import { CardButton, CardContainer, CardText, CardTitle, Container } from './CardInfoStyled';

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
    router.push(`/stakeholderinfo/${stakeholder._id}`);
  };
  if (!stakeholder) {
    return <div>Loading or error... (appropriate message based on context)</div>;
  }

  return (
    <CardContainer>
      <CardTitle>{stakeholder.business}</CardTitle>
      <CardText>{stakeholder.description}</CardText>
      <CardText>{stakeholder.stakeholder}</CardText>
      <CardText>{stakeholder.email}</CardText>
      <CardButton type="button" onClick={showMoreDetails}>
        More Details
      </CardButton>
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

  const displayedStakeholders = stakeholders
    ? stakeholders.filter((stakeholder) => {
        return (
          stakeholder &&
          stakeholder.business &&
          stakeholder.business.toLowerCase().includes(searchQuery.toLowerCase())
        );
      })
    : [];

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
