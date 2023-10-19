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
          <strong>{company.name}</strong> {/* Use dynamic data */}
        </Title>
        <Subtitle>{company.description}</Subtitle> {/* Use dynamic data */}
        <Subtitle>{company.location}</Subtitle> {/* Use dynamic data */}
        <Subtitle>{company.contactNumber}</Subtitle> {/* Use dynamic data */}
        <Subtitle>{company.email}</Subtitle> {/* Use dynamic data */}
      </InfoContainer>

      <LogoContainer>
        {/* Use dynamic logo URL */}
        <img src="/images/Nigeria-LNG-Limited_NLNG.jpg" alt="Company Logo" />
      </LogoContainer>
    </CardContainer>
  );
};
export default InfoCard;
