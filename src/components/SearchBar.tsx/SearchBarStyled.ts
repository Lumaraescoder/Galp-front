import styled from 'styled-components';
export const Form = styled.form`
  margin: 80px 0px;
  width: 70%;
  float: center;
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;
export const Label = styled.label`
  &.sr-only {
  }
`;
export const IconContainer = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 15px;
`;
export const SearchInput = styled.input`
  display: block;
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  color: black !important;
  background-color: #eaeaea;
  border-radius: 32px;
  border: none;
  padding-left: 3rem;

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
    outline: none;
  }
  &:hover .search-icon {
    transform: scale(1.2);
  }

  &:hover .search-input {
    transform: translateY(0);
    opacity: 1;
  }
  @media (max-width: 768px) {
    font-size: 0.875rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
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
