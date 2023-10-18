import React from 'react';

import { CardContainer, InfoContainer, LogoContainer, Subtitle, Title } from './InfoCardStyled';

const InfoCard: React.FC = () => {
  return (
    <CardContainer>
      <InfoContainer>
        <Title>
          <strong>NLNG (Nigeria LNG Limited)</strong>
        </Title>
        <Subtitle>LNG producing company</Subtitle>
        <Subtitle>Bonny Island, Nigéria</Subtitle>
        <Subtitle>+1 213 456 789</Subtitle>
        <Subtitle>teste@teste.ng</Subtitle>
      </InfoContainer>

      <LogoContainer>
        <img src="/images/Nigeria-LNG-Limited_NLNG.jpg" alt="Company Logo" />
      </LogoContainer>
    </CardContainer>
  );
};
export default InfoCard;
