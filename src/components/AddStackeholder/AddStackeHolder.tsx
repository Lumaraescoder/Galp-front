import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

import { UploadButton } from './AddStackeHolderStyled';

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
  max-width: 1400px;
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
  padding: 4px 8px !important;
  border: none;
  background-color: #f5f5f5;
  height: 44px !important;
  border-radius: 5px;
  color: grey;
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
const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
`;

const AddIcon = styled.i`
  position: absolute;
  top: 50%;
  color: #ea5b0b;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 31px;
`;
const StyledTagInputContainer = styled.div`
  position: relative;
`;
const TagButton = styled.button`
  display: flex;
  align-items: center;
  border-radius: 50px;
  background-color: #ea5b0b;
  padding: 4px 10px;
  margin: 12px 5px;
  font-size: 22px;
  height: 35px;
  cursor: pointer;
  color: white;
  border: none;
  outline: none;

  &:hover {
    background-color: #dc2626;
  }

  svg {
    margin-left: 5px;
  }
`;
type Contract = {
  name: string;
  createdAt: string;
};

type FormData = {
  keywords: string[];
  description: string;
  business: string;
  stakeholder: string;
  location: string;
  ceo: string;
  contact: string;
  cashflow: string;
  logo: string | File;
  email: string;
  cellphone: string;
  contracts: Contract[];
  stakeholderType: string;
  businesstype: string;
  role: string;
  contractDate: string;
  editedby: string;
};

const StakeHolderForm: React.FC = () => {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [tagInput, setTagInput] = useState<string>('');
  const [tags, setTags] = useState<string[]>([]);
  const [uploadedImage, setUploadedImage] = useState<string>('');
  const [formData, setFormData] = useState<FormData>({
    stakeholder: '',
    business: '',
    location: '',
    ceo: '',
    contact: '',
    cashflow: '',
    logo: '',
    email: '',
    cellphone: '',
    description: '',
    businesstype: '',
    contracts: [],
    contractDate: '',
    keywords: [],
    stakeholderType: 'company',
    role: '',
    editedby: ''
  });
  const [keywords, setKeywords] = useState<string[]>(formData?.keywords || []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file) {
        const newImageUrl = URL.createObjectURL(file);
        setUploadedImage(newImageUrl);
        setFormData((prevState) => ({
          ...prevState,
          logo: file
        }));
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleContractsUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      const file = files[0];
      const newContract: Contract = {
        name: file.name,
        createdAt: new Date().toISOString()
      };
      setFormData((prevState) => ({
        ...prevState,
        contracts: [...prevState.contracts, newContract]
      }));
    }
  };

  const handleTagInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagInput(e.target.value);
  };

  const deleteTag = (tagToDelete: string) => {
    const newTags = tags.filter((tag) => tag !== tagToDelete);
    setTags(newTags);

    const newKeywords = keywords.filter((keyword) => keyword !== tagToDelete);
    setKeywords(newKeywords);

    setFormData((prevFormData) => ({
      ...prevFormData,
      keywords: newKeywords
    }));
  };

  const addTag = () => {
    if (tagInput.trim() !== '') {
      const newTagsList = [...tags, tagInput.trim()];
      setTags(newTagsList);

      setKeywords((prevKeywords) => [...prevKeywords, tagInput.trim()]);

      setFormData((prevFormData) => ({
        ...prevFormData,
        keywords: [...prevFormData.keywords, tagInput.trim()]
      }));

      setTagInput('');
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const apiUrl = 'https://galp-api.vercel.app/stakeholders';

    try {
      const data = new FormData(e.currentTarget);
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: data
      });

      if (!response.ok) {
        throw new Error('Error creating Stakeholder');
      }
      router.push('/backoffice');
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const backPage = () => {
    router.push('/backoffice');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <LeftSection>
          <ContainerHeader>
            <WelcomeStack>
              Add <em>StakeHolder</em>
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
                onChange={handleInputChange}
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
                onChange={handleInputChange}
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

          <StyledLabel htmlFor="location">Location</StyledLabel>
          <StyledInput
            id="location"
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            placeholder="Enter location"
          />

          <StyledLabel htmlFor="email">E-mail</StyledLabel>
          <StyledInput
            id="ceo"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter CEO's email"
          />

          <StyledLabel htmlFor="contact">Number</StyledLabel>
          <StyledInput
            id="contact"
            type="text"
            name="cellphone"
            value={formData.cellphone}
            onChange={handleInputChange}
            placeholder="Enter Telephone Number"
          />
        </LeftSection>

        <RightSection>
          <RightSideFormContainer>
            <TwoColumns>
              <InputContainer>
                <StyledLabel2 htmlFor="contract-upload">Contract</StyledLabel2>
                <InputIconContainer>
                  <UploadButton htmlFor="contract-upload" className="upload-button">
                    <Icon className="fa fa-cloud-upload" aria-hidden="true"></Icon>
                    &nbsp;&nbsp;&nbsp;&nbsp;Upload Contract
                  </UploadButton>
                  <input
                    id="contract-upload"
                    name="contracts[0][url]"
                    type="file"
                    placeholder="Contract"
                    accept=".pdf, .doc, .docx"
                    onChange={handleContractsUpload}
                    style={{ display: 'none' }}
                  />
                </InputIconContainer>
              </InputContainer>

              <InputContainer>
                <StyledLabel2>Contract Name</StyledLabel2>
                <StyledInputFullRight
                  name="contractName"
                  type="text"
                  placeholder="contract.pdf"
                  value={
                    formData.contracts.length > 0
                      ? formData.contracts[formData.contracts.length - 1].name
                      : ''
                  }
                  readOnly
                />
              </InputContainer>
            </TwoColumns>

            <InputContainer>
              <StyledLabel2>Contract Date</StyledLabel2>
              <StyledInput2
                name="contractDate"
                type="date"
                value={formData.contractDate}
                onChange={handleInputChange}
              />
            </InputContainer>

            <InputContainer>
              <StyledLabel2 htmlFor="tags">Tags</StyledLabel2>
              <StyledTagInputContainer>
                <StyledInput
                  id="tags"
                  name="tags"
                  type="text"
                  placeholder="Add tags to filter list"
                  value={tagInput}
                  onChange={handleTagInputChange}
                />
                <AddIcon className="fa fa-plus-circle" aria-hidden="true" onClick={addTag} />
              </StyledTagInputContainer>
              <TagContainer>
                {tags.map((tag, index) => (
                  <TagButton
                    key={index}
                    onClick={() => deleteTag(tag)}
                    className="flex items-center rounded-full bg-red-500 px-3 py-1 text-xs font-medium text-white hover:bg-red-600"
                  >
                    {tag}
                    <svg
                      className="ml-2 h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 100-20 10 10 0 000 20zM8.293 5.293a1 1 0 011.414 0L12 7.586l2.293-2.293a1 1 0 011.414 1.414L13.414 9l2.293 2.293a1 1 0 01-1.414 1.414L12 10.414l-2.293 2.293a1 1 0 01-1.414-1.414L10.586 9 8.293 6.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </TagButton>
                ))}
              </TagContainer>
            </InputContainer>

            <InputContainer>
              <StyledLabel2 htmlFor="description">Description</StyledLabel2>
              <StyledTextArea
                id="description"
                name="description"
                placeholder="Describe the details..."
                value={formData.description}
                onChange={handleInputChange}
              ></StyledTextArea>
            </InputContainer>

            <InputContainer as={LogoUploads}>
              <StyledLabel2 as="div">
                <LogoButton onClick={() => fileInputRef.current?.click()}>
                  <IconButton className="fa fa-cloud-upload" aria-hidden="true"></IconButton>
                  &nbsp; Upload Logo
                </LogoButton>

                <HiddenInput
                  type="file"
                  ref={fileInputRef}
                  id="logo-upload"
                  name="logo"
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
                />
              </StyledLabel2>
              <UploadedLogo src={uploadedImage || 'images/Galp.png'} />
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
