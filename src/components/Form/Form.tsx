import React from 'react';
import styled from 'styled-components';

const RightSection = styled.div`
  flex: 0 0 45%;
  /* background: #f5f5f5; // changed background color to a light grey to match the screenshot */
  border-radius: 8px;
  margin-top: 211px;
  padding: 20px; // added padding for the entire container
`;

const FileName = styled.span`
  /* margin-left: 15px; */
`;

const RightSideFormContainer = styled.div`
  padding: 20px;
`;

const InputContainer = styled.div`
  /* margin-bottom: 10px; */
  margin-bottom: 20px; // increased margin for spacing
`;

const UploadIcon = styled.span`
  margin-right: 10px;
`;

const HiddenInput = styled.input`
  display: none;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 12px 15px;
  resize: vertical;
  margin-bottom: 15px;
`;

const LogoUploads = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UploadedLogo = styled.img`
  width: 50px; // reduced size to match the screenshot
  border: 1px solid #e0e0e0; // added border
  border-radius: 8px; // increased border-radius
`;
const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Button = styled.button`
  padding: 12px 20px;
  cursor: pointer;
  border: 1px solid #e0e0e0; // changed border color
  border-radius: 8px; // increased border-radius
  font-weight: bold; // added font-weight
`;

const CancelButton = styled(Button)`
  background-color: #ffffff;
  color: #666; // added text color
  width: 45%;
  border: solid 1px #ff6347;
  color: #ff6347;
`;

const SubmitButton = styled(Button)`
  background-color: #ff6347;
  color: #ffffff;
  width: 45%;
`;

const StyledLabel = styled.label`
  display: block; // changed to block for better alignment
  margin-bottom: 10px; // added margin for spacing
  font-weight: bold; // added font-weight to make it look like the screenshot
  color: #666; // changed color to a dark grey to match the screenshot
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #e0e0e0; // changed border color to a light grey
  border-radius: 8px; // increased border-radius
`;
const TwoColumns = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledInputFull = styled.input`
  flex: 1;
`;

const Form = () => {
  return (
    <RightSection>
      <RightSideFormContainer>
        <TwoColumns>
          <InputContainer>
            <StyledLabel>Contract </StyledLabel>
            <StyledInputFull type="text" placeholder="Upload Contract" />
          </InputContainer>

          <InputContainer>
            <StyledLabel>&nbsp;</StyledLabel>
            <StyledInputFull type="text" placeholder="contract.pdf" />
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
            <UploadIcon>🔼</UploadIcon> Upload Logo
            <HiddenInput type="file" />
          </StyledLabel>
          <UploadedLogo src="/path/to/logo.png" alt="Uploaded Logo" />
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
