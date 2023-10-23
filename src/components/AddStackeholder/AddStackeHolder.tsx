import React from 'react';
import styled, { keyframes } from 'styled-components';

import {
  ButtonsContainer,
  CancelButton,
  HiddenInput,
  Icon,
  IconButton,
  InputContainer,
  InputIconContainer,
  LogoButton,
  LogoUploads,
  RightSection,
  RightSideFormContainer,
  StyledInputFullRight,
  StyledInputWithIcon,
  StyledTextArea,
  SubmitButton,
  TwoColumns,
  UploadedLogo
} from './AddStackeHolderStyled';

export const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const StyledInput = styled.input`
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

export const Container = styled.div`
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

export const LeftSection = styled.div`
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

export const StyledLabel = styled.label`
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

export const LabelLeft = styled.div`
  margin: 12px 0px;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const LabelRight = styled.div`
  margin: 12px 20px;
`;

export const WelcomeStack = styled.p`
  margin: 50px 0px;
  white-space: nowrap;
  font-size: 30px;
  position: relative;
  top: 24px;
`;

export const ContainerLeft = styled.div``;
export const StrackeHolderType = styled.div`
  margin-top: 29px;
`;

const LeftSide = () => {
  return (
    <ContainerLeft>
      <ContainerHeader>
        <WelcomeStack>Create Stakeholder !</WelcomeStack>
      </ContainerHeader>
      <StrackeHolderType>Stakeholder Type</StrackeHolderType>
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
const Form = () => {
  return (
    <RightSection>
      <RightSideFormContainer>
        <TwoColumns>
          <InputContainer>
            <StyledLabel>Contract </StyledLabel>
            <InputIconContainer>
              <Icon className="fa fa-cloud-upload" aria-hidden="true"></Icon>
              <StyledInputWithIcon type="text" placeholder="Upload Contract" />
            </InputIconContainer>
          </InputContainer>
          <InputContainer>
            <StyledLabel>&nbsp;</StyledLabel>
            <StyledInputFullRight type="text" placeholder="contract.pdf" />
          </InputContainer>
        </TwoColumns>
        <InputContainer>
          <StyledLabel>Contract Date</StyledLabel>
          <StyledInput type="text" placeholder="10/10/2021" />
        </InputContainer>
        <InputContainer>
          <StyledLabel>Cashflow</StyledLabel>
          <StyledInput type="text" placeholder="$5B" />
        </InputContainer>
        <InputContainer>
          <StyledLabel>Description</StyledLabel>
          <StyledTextArea placeholder="..."></StyledTextArea>
        </InputContainer>
        <InputContainer as={LogoUploads}>
          <StyledLabel as="div">
            <LogoButton>
              <IconButton className="fa fa-cloud-upload" aria-hidden="true"></IconButton>
              &nbsp; Upload Logo
            </LogoButton>
            <HiddenInput id="fileInput" type="file" />
          </StyledLabel>
          <UploadedLogo src="/images/Galp.png" alt="Uploaded Logo" />
        </InputContainer>
        <ButtonsContainer>
          <CancelButton>Cancel</CancelButton>
          <SubmitButton>Submit</SubmitButton>
        </ButtonsContainer>
      </RightSideFormContainer>
    </RightSection>
  );
};

const AddStackeHolder = () => {
  return (
    <Container>
      <LeftSection>
        <LeftSide />
      </LeftSection>
      <Form />
    </Container>
  );
};
export default AddStackeHolder;
