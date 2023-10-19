import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  width: 100%;
  border-radius: 0.375rem;
  background-color: blue;
  padding: 1rem 1.5rem;
  font-weight: 600;
  color: white;
  &:hover {
    background-color: darkblue;
  }
`;

export type StyledButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const StyledButton: React.FC<StyledButtonProps> = ({ children = 'Login', ...props }) => {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
};

export default StyledButton;
