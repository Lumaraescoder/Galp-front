import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: space-between;
  background-color: #f5f5f5;
`;
export const OrangeElement = styled.span`
  border-left: 5px solid #fa551d;
  height: 100px;
  width: 0;
  position: relative;
  left: -10px;
  margin-left: 10px;
`;

export const TextEnter = styled.span``;

export const ImageContainer = styled.div`
  display: none;
  height: 100vh;
  width: 50%;
  background-color: #ea5b0b;
  span {
    color: white;
    font-weight: 600;
    font-size: 69px;
  }
  flex-direction: row;
  justify-content: center;
  align-items: center;
  img {
    margin-right: 15px;
    width: 200px;
  }

  @media (min-width: 1024px) {
    display: flex;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  padding: 8px;
  @media (min-width: 768px) {
    padding: 208px;
  }
  @media (min-width: 1024px) {
    width: 50%;
    padding: 144px;
  }
`;

export const InputLabel = styled.label`
  display: block;
  color: #4a4a4a;
  background-color: grey;
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 0.25rem;
  border: 1px solid #d1d1d1;
  padding: 0.5rem 0.75rem;
  &:focus {
    border-color: #3b82f6;
    outline: none;
  }

  &.email-input {
    background: #e6e6e6
      url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23969696' width='18px' height='18px'><path d='M0 0h24v24H0z' fill='none'/><path d='M2 5v14h20V5l-10 7L2 5zm0 2.236l7.376 5.264L12 8l2.624 4.5L22 7.236V6H2v1.236z'/></svg>")
      no-repeat 5% center;
    padding-left: 2rem;
    padding: 10px 51px;
  }

  &.password-input {
    background: #e6e6e6
      url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23969696' width='18px' height='18px'><path d='M0 0h24v24H0z' fill='none'/><path d='M6 8V6a6 6 0 0 1 12 0v2h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h1zm3 0h6V6c0-2.21-1.79-4-4-4a4 4 0 0 0-2 7.744V8zm-2 2v8h10v-8H7z'/></svg>")
      no-repeat 5% center;
    padding-left: 2rem;
    padding: 10px 51px;
  }
`;

export const CheckboxLabel = styled.label`
  margin-left: 0.5rem;
  color: #4a4a4a;
`;

export const LinkText = styled.a`
  color: #3b82f6;
  &:hover {
    text-decoration: underline;
  }
`;
export const InputIconWrapper = styled.div`
  position: relative;
  width: 100%;

  &.email-icon::before {
    content: '✉';
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 16px;
  }

  &.password-icon::before {
    content: '🔒';
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 16px;
  }
`;
export const SubmitButton = styled.button`
  width: 100%;
  border-radius: 0.25rem;
  background-color: #fa551d;
  padding: 0.5rem 0.75rem;
  color: white;
  font-weight: 600;
  &:hover {
    background-color: #fa551d;
  }
`;
