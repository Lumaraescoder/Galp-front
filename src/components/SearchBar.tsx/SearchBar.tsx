import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  margin: 80px 0px;
  width: 70%;
  float: center;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;
const Label = styled.label`
  &.sr-only {
  }
`;
const IconContainer = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 15px;
`;
const SearchInput = styled.input`
  display: block;
  width: 100%;
  padding: 1rem;
  font-size: 0.875rem;
  color: #1f2937;
  background-color: #eaeaea;
  border-radius: 32px;
  border: none;
  padding-left: 3rem;
  font-size: 22px;
  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
    outline: none;
  }

  @media (prefers-color-scheme: dark) {
    border-color: #374151;
    background-color: #f3f4f6;
    color: #f3f4f6;
    &::placeholder {
      color: #9ca3af;
    }

    &:focus {
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
    }
  }
`;

const SearchBar: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSearch(inputValue);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label className="sr-only mb-2  text-sm font-medium text-gray-900 dark:text-white">
          Search
        </Label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <IconContainer>
              <i className="fa fa-search" style={{ fontSize: '22px', color: '#808080' }}></i>
            </IconContainer>
          </div>

          <SearchInput
            type="search"
            id="default-search"
            placeholder="Procurar stackholders ou outra informação."
            required
            onChange={handleInputChange}
          />
        </div>
      </Form>
    </Container>
  );
};

export default SearchBar;
