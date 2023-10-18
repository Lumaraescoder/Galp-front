import React from 'React';
import styled from 'styled-components';

import Form from '@/components/Form/Form';

const StyledInput = styled.input`
  width: 90%;
  padding: 12px 15px; // Increased padding
  // Increased margin-bottom
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  padding: 40px 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const LeftSection = styled.div`
  flex: 0 0 60%;
  max-width: 50%;
`;

const Flex = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Image = styled.img`
  width: 120px; // Adjusted width
  height: 120px; // Adjusted height
  margin: 15px 40px;
`;
const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: -11px;
  p {
    color: #030517;
    font-size: 36px; // Adjusted font-size
    font-weight: 799;
  }
`;

const ButtonStake = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: E6E6E6;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-right: 10px; // For spacing between buttons
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 0px 53px;
  border-radius: 8px;
  font-weight: 503;
  width: 221px;
  &:hover {
    background-color: #f0f0f0;
  }
`;
const ButtonDash = styled.button`
  padding: 10px 20px;
  border: none;
  height: 50px;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-right: 10px; // For spacing between buttons
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 8px;
  font-weight: 503;
  width: 221px;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const ButtonsContainers = styled.div`
  display: flex;
  margin-top: 20px; // For spacing above the buttons
`;

const LabelLeft = styled.div`
  margin: 12px 0px;
`;
const LabelRight = styled.div`
  /* margin: 12px 0px; */
  margin: 12px 20px;
`;
const ContainerLeft = styled.div`
  p {
    margin: 7px 0px;
    white-space: nowrap;
  }
`;
const LeftSide = () => {
  return (
    <ContainerLeft>
      <ContainerHeader>
        <Image src="/images/boy.png" alt="Boy" />
        <p>Welcome João</p>
      </ContainerHeader>
      <ButtonsContainers>
        <ButtonDash>Dashboard</ButtonDash>
        <ButtonStake>Stakeholder</ButtonStake>
      </ButtonsContainers>

      <p>Stackeholder Type</p>
      <Flex>
        <LabelLeft>
          <input type="radio" name="stakeholder" id="company" />
          <label htmlFor="company"> &nbsp;Company</label>
        </LabelLeft>
        <LabelRight className="right-label">
          <input type="radio" name="stakeholder" id="people" />
          <label htmlFor="people"> &nbsp;People</label>
        </LabelRight>
      </Flex>

      <StyledLabel htmlFor="stakeholder-name">Stakeholder Name</StyledLabel>
      <StyledInput id="stakeholder-name" type="text" />

      <StyledLabel htmlFor="business-name">Business</StyledLabel>
      <StyledInput id="business-name" type="text" />

      <StyledLabel htmlFor="location">Location</StyledLabel>
      <StyledInput id="location" type="text" />

      <StyledLabel htmlFor="ceo">CEO</StyledLabel>
      <StyledInput id="ceo" type="text" />

      <StyledLabel htmlFor="contact">Contact</StyledLabel>
      <StyledInput id="contact" type="text" />
    </ContainerLeft>
  );
};

const BackOffice = () => {
  return (
    <Container>
      <LeftSection>
        <LeftSide />
      </LeftSection>
      <Form />
    </Container>
  );
};

export default BackOffice;
