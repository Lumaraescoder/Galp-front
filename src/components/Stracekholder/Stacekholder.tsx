import React from 'react';
import { StacekHolderProps } from 'src/types/types';

import {
  CardContainers,
  CardHeader,
  CardItem,
  CardLabel,
  CardTitle,
  CardValue,
  IconUser
} from './StrackeholderStyled';

const StacekHolder: React.FC<StacekHolderProps> = ({ company, ceo, address, email, cellphone }) => {
  return (
    <CardContainers>
      <CardHeader>
        <CardTitle>
          <IconUser className="fa fa-users" aria-hidden="true"></IconUser>
          <p>Stakeholder Details</p>
        </CardTitle>
      </CardHeader>
      <CardItem>
        <CardLabel>Company:</CardLabel>
        <CardValue>{company}</CardValue>
      </CardItem>
      <CardItem>
        <CardLabel>CEO:</CardLabel>
        <CardValue>{ceo}</CardValue>
      </CardItem>
      <CardItem>
        <CardLabel>Address:</CardLabel>
        <CardValue>{address}</CardValue>
      </CardItem>

      <CardItem>
        <CardLabel>E-mail:</CardLabel>
        <CardValue>{email}</CardValue>
      </CardItem>
      <CardItem>
        <CardLabel>Contact:</CardLabel>
        <CardValue>{cellphone}</CardValue>
      </CardItem>
    </CardContainers>
  );
};

export default StacekHolder;
