import React from 'react';
import { CompanyInfo } from 'src/types/types';

import { CardContainer, InfoContainer, LogoContainer, Subtitle, Title } from './InfoCardStyled';
interface InfoCardProps {
  company: CompanyInfo;
}
const InfoCard: React.FC<InfoCardProps> = ({ company }) => {
  return (
    <CardContainer>
      <InfoContainer>
        <Title>
          <strong>{company.name}</strong>
        </Title>
        <Subtitle>{company.description}</Subtitle>
      </InfoContainer>
      <LogoContainer>
        <img src={company.logo} alt="Company Logo" />
      </LogoContainer>
    </CardContainer>
  );
};
export default InfoCard;
