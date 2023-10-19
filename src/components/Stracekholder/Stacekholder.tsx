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
        <CardValue>{company}</CardValue> {/* Dynamically set value */}
      </CardItem>
      <CardItem>
        <CardLabel>Stakeholder:</CardLabel>
        <CardValue>{stakeholder}</CardValue> {/* Dynamically set value */}
      </CardItem>
      <CardItem>
        <CardLabel>Address:</CardLabel>
        <CardValue>{address}</CardValue> {/* Dynamically set value */}
      </CardItem>
    </CardContainers>
  );
};

export default StacekHolder;
