import React from 'react';
import styled, { keyframes } from 'styled-components';

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;
const RightSection = styled.div`
  flex: 0 0 100%;
  border-radius: 3px;
  margin-left: 60px;
  margin-top: 240px;
  animation: ${appearFromRight} 1s ease;
  animation-delay: 1.5;
  @media (min-width: 768px) {
    flex: 0 0 45%;
  }
  @media (max-width: 768px) {
    margin-top: 60px;
    margin-left: 0;
    padding-left: 10px;
  }
`;

const RightSideFormContainer = styled.div``;

const InputContainer = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;

const HiddenInput = styled.input`
  display: none;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 12px 15px;
  resize: vertical;
  resize: none;
  background-color: #f5f5f5;
  ::placeholder {
    color: black;
    opacity: 1;
  }
`;

const LogoButton = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  color: black;
  padding: 10px 15px;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const LogoUploads = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UploadedLogo = styled.img`
  width: 50px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
  }
`;

const Button = styled.button`
  padding: 12px 20px;
  cursor: pointer;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-weight: bold;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

const CancelButton = styled(Button)`
  background-color: #ffffff;
  color: #666;
  width: 45%;
  border: solid 1px #ff6347;
  color: #ff6347;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

const SubmitButton = styled(Button)`
  background-color: #ff6347;
  color: #ffffff;
  width: 45%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: 400;
  color: black;
  font-size: 16px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: none;
  background-color: #f5f5f5;
  ::placeholder {
    color: black !important;
    opacity: 1;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin: 5px 0;
  }
`;

const TwoColumns = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledInputFull = styled.input`
  background-color: white;
  flex: 1;
`;

const StyledInputFullRight = styled.input`
  background-color: #f5f5f5;
  flex: 1;
  width: 100%;
  padding: 0px 10px;
`;

const Icon = styled.i`
  position: absolute;
  left: 10px;
  top: 50%;
  color: #ea5b0b !important;
  transform: translateY(-50%);
  font-size: 21px;
`;

const IconButton = styled.i`
  color: #ea5b0b !important;
  transform: translateY(-50%);
  font-size: 31px;
  position: relative;
  top: 15px;
`;

const InputIconContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 8px;
`;

const StyledInputWithIcon = styled(StyledInputFull)`
  padding-left: 40px;
`;

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
            <LogoButton onClick={() => document.getElementById('fileInput').click()}>
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
