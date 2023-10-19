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
        <Subtitle>{company.location}</Subtitle>
        <Subtitle>{company.contactNumber}</Subtitle>
        <Subtitle>{company.email}</Subtitle>
      </InfoContainer>

      <LogoContainer>
        {/* Use dynamic logo URL */}
        <img src="/images/Nigeria-LNG-Limited_NLNG.jpg" alt="Company Logo" />
      </LogoContainer>
    </CardContainer>
  );
};
export default InfoCard;
