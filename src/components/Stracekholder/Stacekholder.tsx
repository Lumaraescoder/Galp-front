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

const StacekHolder: React.FC<StacekHolderProps> = ({
  company,
  stakeholder,
  address,
  email,
  cellphone
}) => {
  return (
    <CardContainers>
      <CardHeader>
        <CardTitle>
          <IconUser className="fa fa-users" aria-hidden="true"></IconUser>
          &nbsp; Detalhe Stakeholder
        </CardTitle>
      </CardHeader>
      <CardItem>
        <CardLabel>Company: </CardLabel>
        <CardValue> &nbsp; &nbsp;&nbsp;{company}</CardValue>
      </CardItem>
      <CardItem>
        <CardLabel>Stakeholder:</CardLabel>
        <CardValue> &nbsp;&nbsp;&nbsp; {stakeholder}</CardValue>
      </CardItem>
      <CardItem>
        <CardLabel>Address:</CardLabel>
        <CardValue> &nbsp;&nbsp;&nbsp;{address}</CardValue>
      </CardItem>

      <CardItem>
        <CardLabel>E-mail:</CardLabel>
        <CardValue>&nbsp;&nbsp;&nbsp;{email}</CardValue>
      </CardItem>
      <CardItem>
        <CardLabel>Contact:</CardLabel>
        <CardValue>&nbsp;&nbsp;&nbsp;{cellphone}</CardValue>
      </CardItem>
    </CardContainers>
  );
};

export default StacekHolder;
