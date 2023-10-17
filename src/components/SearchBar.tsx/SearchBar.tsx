import React from 'react';

import { Container, Form, IconContainer, Label, SearchInput } from './SearchBarStyled';

const SearchBar: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onSearch(newValue);
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
