import React from 'react';
import { CardInfoProps, Stack } from 'src/types/types';

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
  return (
    <CardContainer>
      <CardTitle>{stakeholder.business}</CardTitle>
      <CardText>{stakeholder.description}</CardText>
      <CardText>{stakeholder.stakeholder}</CardText>
      <CardText>{stakeholder.email}</CardText>
      <CardButton type="button">More Details</CardButton>
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
  if (!stakeholders) return <div>Loading...</div>; // This line ensures that the following code will only run if 'stakeholders' is not undefined.

  const displayedStakeholders = searchQuery.trim()
    ? stakeholders.filter((stakeholder) =>
        stakeholder.business.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : stakeholders;

  return (
    <Container>
      {displayedStakeholders.map((stakeholder) => (
        <CardInfo key={stakeholder._id} stakeholder={stakeholder} />
      ))}
    </Container>
  );
};

export default CardList;
