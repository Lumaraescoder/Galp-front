import React from 'react';

import {
  CardContainers,
  CardHeader,
  CardItem,
  CardLabel,
  CardTitle,
  CardValue,
  IconUser
} from './StrackeholderStyled';

const StacekHolder = () => {
  return (
    <CardContainers>
      <CardHeader>
        <CardTitle>
          <IconUser className="fa fa-users" aria-hidden="true"></IconUser>
          &nbsp; Stakeholder Details
        </CardTitle>
      </CardHeader>
      <CardItem>
        <CardLabel>Company</CardLabel>
        <CardValue>LNG producing company</CardValue>
      </CardItem>
      <CardItem>
        <CardLabel>Stakeholder</CardLabel>
        <CardValue>John Doe</CardValue>
      </CardItem>
      <CardItem>
        <CardLabel>Address:</CardLabel>
        <CardValue>123 Main Street, Cityville, Country</CardValue>
      </CardItem>
    </CardContainers>
  );
};
export default StacekHolder;
