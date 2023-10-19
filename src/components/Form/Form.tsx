import React from 'react';

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
  StyledInput,
  StyledInputFullRight,
  StyledInputWithIcon,
  StyledLabel,
  StyledTextArea,
  SubmitButton,
  TwoColumns,
  UploadedLogo
} from './FormStyled';

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
          <UploadedLogo id="uploadedLogo" src="images/logo-form.png" alt="Uploaded Logo" />
        </InputContainer>
        <ButtonsContainer>
          <CancelButton>Cancel</CancelButton>
          <SubmitButton>Submit</SubmitButton>
        </ButtonsContainer>
      </RightSideFormContainer>
    </RightSection>
  );
};

export default Form;
