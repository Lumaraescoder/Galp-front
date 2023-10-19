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

const StacekHolder: React.FC<StacekHolderProps> = ({ company, stakeholder, address }) => {
  return (
    <CardContainers>
      <CardHeader>
        <CardTitle>
          <IconUser className="fa fa-users" aria-hidden="true"></IconUser>
          &nbsp; Stakeholder Details
        </CardTitle>
      </CardHeader>
      <CardItem>
        <CardLabel>Company: </CardLabel>
        <CardValue>{company}</CardValue>
      </CardItem>
      <CardItem>
        <CardLabel>Stakeholder:</CardLabel>
        <CardValue>{stakeholder}</CardValue>
      </CardItem>
      <CardItem>
        <CardLabel>Address:</CardLabel>
        <CardValue>{address}</CardValue>
      </CardItem>
    </CardContainers>
  );
};

export default StacekHolder;
