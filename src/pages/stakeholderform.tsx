import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { StakeholderData } from 'src/types/types';
import styled, { keyframes } from 'styled-components';

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
  font-size: 22px;
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
  margin: 30px 0px 20px;
  white-space: nowrap;
  font-size: 40px;
`;

const StrackeHolderType = styled.div`
  margin-top: 29px;
`;
export const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;
export const RightSection = styled.div`
  flex: 0 0 100%;
  border-radius: 3px;
  margin-left: 60px;
  margin-top: 207px;
  animation: ${appearFromRight} 1s ease;
  animation-delay: 1.5;
  font-size: 22px;
  @media (min-width: 768px) {
    flex: 0 0 45%;
  }
  @media (max-width: 768px) {
    margin-top: 60px;
    margin-left: 0;
    padding-left: 10px;
  }
`;

export const RightSideFormContainer = styled.div``;

export const InputContainer = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const StyledTextArea = styled.textarea`
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

export const LogoButton = styled.div`
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

export const LogoUploads = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UploadedLogo = styled.img`
  width: 50px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
  }
`;

export const Button = styled.button`
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

export const CancelButton = styled(Button)`
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

export const SubmitButton = styled(Button)`
  background-color: #ff6347;
  color: #ffffff;
  width: 45%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const StyledLabel2 = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: 400;
  color: black;
  font-size: 22px;
`;

export const StyledInput2 = styled.input`
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

export const TwoColumns = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledInputFull = styled.input`
  background-color: white;
  flex: 1;
`;

export const StyledInputFullRight = styled.input`
  background-color: #f5f5f5;
  flex: 1;
  width: 100%;
  padding: 0px 10px;
`;

export const Icon = styled.i`
  position: absolute;
  left: 10px;
  top: 50%;
  color: #ea5b0b !important;
  transform: translateY(-50%);
  font-size: 21px;
`;

export const IconButton = styled.i`
  color: #ea5b0b !important;
  transform: translateY(-50%);
  font-size: 31px;
  position: relative;
  top: 15px;
`;

export const InputIconContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 8px;
`;

export const StyledInputWithIcon = styled(StyledInputFull)`
  padding-left: 40px;
`;

const StakeHolderForm = () => {
  const router = useRouter();
  const { id } = router.query;

  const [isLoading, setIsLoading] = useState(true);

  const [formData, setFormData] = useState<StakeholderData | any>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState: any) => {
      if (!prevState) return null;

      return { ...prevState, [name]: value };
    });
  };

  useEffect(() => {
    const fetchStakeholderData = async () => {
      if (!id) return;

      try {
        const response = await fetch(`https://galp-api.vercel.app/stakeholders/${id}`);
        const data = await response.json();

        setFormData({
          stakeholder: data.stakeholder || '',
          business: data.business || '',
          description: data.description || '',
          location: data.location || '',
          ceo: data.ceo || '',
          contact: data.contact || '',
          cashflow: data.cashflow || '',
          logo: data.logo || '',
          email: data.email || '',
          cellphone: data.cellphone || '',
          contracts: data.contracts || [],
          stakeholderType: data.stakeholderType || '',
          __v: data.__v || 0,
          businesstype: data.businesstype || '',
          role: data.role || '',
          editedby: data.editedby || ''
        });
      } catch (error) {
        console.error('Erro ao buscar dados do stakeholder:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStakeholderData();
  }, [id]);
  if (isLoading) {
    return <div>Carregando...</div>;
  }
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const apiUrl = `https://galp-api.vercel.app/stakeholders/${id}`;

    try {
      const response = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Erro ao atualizar o stakeholder');
      } else {
        router.push('/backoffice');
      }
    } catch (error) {
      console.error('Houve um problema com a requisição fetch:', error);
    }
  };

  const backPage = () => {
    router.push('/backoffice');
  };

  const handleRadioChange = (e: any) => {
    setFormData({
      ...formData,
      stakeholderType: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <LeftSection>
          <ContainerHeader>
            <WelcomeStack>
              Edit <em>{formData.business}</em>
            </WelcomeStack>
          </ContainerHeader>
          <StrackeHolderType>Stakeholder Type</StrackeHolderType>
          <Flex>
            <LabelLeft>
              <input
                type="radio"
                name="stakeholderType"
                id="company"
                value="company"
                checked={formData.stakeholderType === 'company'}
                onChange={handleRadioChange}
              />
              <label htmlFor="company"> &nbsp;Company</label>
            </LabelLeft>
            <LabelRight>
              <input
                type="radio"
                name="stakeholderType"
                id="people"
                value="people"
                checked={formData.stakeholderType === 'people'}
                onChange={handleRadioChange}
              />
              <label htmlFor="people"> &nbsp;People</label>
            </LabelRight>
          </Flex>
          <StyledLabel htmlFor="stakeholder-name">Stakeholder</StyledLabel>
          <StyledInput
            id="stakeholder-name"
            type="text"
            name="stakeholder"
            value={formData.stakeholder}
            onChange={handleInputChange}
            placeholder="Enter stakeholder's name"
          />

          <StyledLabel htmlFor="business-name">Business</StyledLabel>
          <StyledInput
            id="business-name"
            type="text"
            name="business"
            value={formData.business}
            onChange={handleInputChange}
            placeholder="Enter business name"
          />

          {/* Input para a localização */}
          <StyledLabel htmlFor="location">Location</StyledLabel>
          <StyledInput
            id="location"
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            placeholder="Enter location"
          />

          <StyledLabel htmlFor="ceo">E-mail</StyledLabel>
          <StyledInput
            id="ceo"
            type="text"
            name="ceo"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter CEO's name"
          />

          <StyledLabel htmlFor="contact">Role</StyledLabel>
          <StyledInput
            id="contact"
            type="text"
            name="contact"
            value={formData.role}
            onChange={handleInputChange}
            placeholder="Enter Role"
          />
        </LeftSection>

        <RightSection>
          <RightSideFormContainer>
            <TwoColumns>
              <InputContainer>
                <StyledLabel2 htmlFor="contract-upload">Contract </StyledLabel2>
                <InputIconContainer>
                  <Icon className="fa fa-cloud-upload" aria-hidden="true"></Icon>
                  <StyledInputWithIcon
                    id="contract-upload"
                    name="contractUpload"
                    type="text"
                    placeholder="Upload Contract"
                  />
                </InputIconContainer>
              </InputContainer>

              <InputContainer>
                <StyledLabel2>&nbsp;</StyledLabel2>

                <StyledInputFullRight name="contractName" type="text" placeholder="contract.pdf" />
              </InputContainer>
            </TwoColumns>

            {formData.contracts.map((contract: any, index: any) => (
              <InputContainer key={index}>
                <StyledLabel2 htmlFor={`contract-date-${index}`}>Contract Date</StyledLabel2>
                <StyledInput2
                  id={`contract-date-${index}`}
                  name="contractDate"
                  type="date"
                  value={contract.createdAt}
                />
              </InputContainer>
            ))}

            <InputContainer>
              <StyledLabel2 htmlFor="description">Description</StyledLabel2>
              <StyledTextArea
                id="description"
                name="description"
                placeholder="Describe the details..."
                value={formData.description}
              ></StyledTextArea>
            </InputContainer>

            <InputContainer as={LogoUploads}>
              <StyledLabel2 as="div">
                <LogoButton>
                  <IconButton className="fa fa-cloud-upload" aria-hidden="true"></IconButton>
                  &nbsp; Upload Logo
                </LogoButton>
                <HiddenInput id="logo-upload" name="logoUpload" type="file" />
              </StyledLabel2>
              <UploadedLogo src={formData.logo} alt="Uploaded Logo" />
            </InputContainer>

            <ButtonsContainer>
              <CancelButton type="button" onClick={backPage}>
                Cancel
              </CancelButton>
              <SubmitButton type="submit">Submit</SubmitButton>
            </ButtonsContainer>
          </RightSideFormContainer>
        </RightSection>
      </Container>
    </form>
  );
};

export default StakeHolderForm;
