import styled, { keyframes } from 'styled-components';

import Form from '@/components/Form/Form';

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f5f5f5;
  border: none;
  margin-top: 5px;
  @media (max-width: 768px) {
    font-size: larger;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  justify-content: center;
  background-color: #ffffff;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
    align-items: stretch;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  animation: ${appearFromLeft} 1s ease;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 20px;
  }
`;

const Flex = styled.div`
  display: flex;
  gap: 20px;
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  white-space: nowrap;

  @media (max-width: 768px) {
    white-space: normal;
  }
`;

const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: -11px;
  p {
    color: #030517;
    font-weight: 799;
  }
`;

const LabelLeft = styled.div`
  margin: 12px 0px;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const LabelRight = styled.div`
  margin: 12px 20px;
`;

const WelcomeStack = styled.p`
  margin: 50px 0px;
  white-space: nowrap;
  font-size: 30px;
  position: relative;
  top: 24px;
`;

const ContainerLeft = styled.div``;
const StrackeHolderType = styled.div`
  margin-top: 29px;
`;

const LeftSide = () => {
  return (
    <ContainerLeft>
      <ContainerHeader>
        <WelcomeStack>Welcome, Stackeholder !</WelcomeStack>
      </ContainerHeader>
      <StrackeHolderType>Stackeholder Type</StrackeHolderType>
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
