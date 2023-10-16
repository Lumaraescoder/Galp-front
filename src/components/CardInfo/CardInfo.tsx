import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: -100px;
`;
const CardContainer = styled.div`
  display: block;
  border-radius: 0.75rem;
  background-color: #f7f7f7;
  padding: 1.5rem;
  box-shadow: 0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04);
  width: 63% !important;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3rem;
  margin-top: 40px;

  &.dark {
    background-color: #2a2e37;
    color: #d1d5db;
  }
`;
const CardTitle = styled.h5`
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.25;
  color: #1f2937;
  &.dark {
    color: #f9fafb;
  }
`;

const CardText = styled.p`
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #4b5563;

  &.dark {
    color: #d1d5db;
  }
`;

const CardButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  border-radius: 0.375rem;
  padding: 0.625rem 1.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 1.25;
  box-shadow: 0 4px 9px -4px #3b71ca;
  transition: all 0.15s ease-in-out;

  &:hover {
    background-color: #2563eb;
    box-shadow: 0 8px 9px -4px rgba(59, 113, 202, 0.3), 0 4px 18px 0 rgba(59, 113, 202, 0.2);
  }
  &:focus {
    background-color: #2563eb;
    box-shadow: 0 8px 9px -4px rgba(59, 113, 202, 0.3), 0 4px 18px 0 rgba(59, 113, 202, 0.2);
    outline: none;
  }
  &:active {
    background-color: #1d4ed8;
    box-shadow: 0 8px 9px -4px rgba(59, 113, 202, 0.3), 0 4px 18px 0 rgba(59, 113, 202, 0.2);
  }
  &.dark {
  }
`;
interface CardInfoProps {
  id: string;
}

const CardInfo: React.FC<CardInfoProps> = (props) => {
  return (
    <CardContainer>
      <CardTitle>Card title - {props.id}</CardTitle>
      <CardText>
        Some quick example text to build on the card title and make up the bulk of the content.
      </CardText>
      <CardButton type="button">Button</CardButton>
    </CardContainer>
  );
};

const CardList = () => {
  const cardIds = ['id1', 'id2', 'id3', 'id4'];

  return (
    <Container>
      {cardIds.map((id) => (
        <CardInfo key={id} id={id} />
      ))}
    </Container>
  );
};

export default CardList;
