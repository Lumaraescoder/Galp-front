import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

const FieldWrapper = styled.div`
  margin-bottom: 1rem;
`;

const StyledLabel = styled.label`
  display: block;
  color: gray;
`;

const StyledInput = styled.input`
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid gray;
  padding: 0.5rem 0.75rem;
  outline: none;
  &:focus {
    border-color: blue;
  }
`;

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  id: string;
  label: string;
}

const InputField: React.FC<InputFieldProps> = ({ type, id, label, ...props }) => (
  <FieldWrapper>
    <StyledLabel htmlFor={id}>{label}</StyledLabel>
    <StyledInput type={type} id={id} name={id} {...props} />
  </FieldWrapper>
);

export default InputField;
