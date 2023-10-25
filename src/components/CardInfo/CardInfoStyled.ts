import styled from 'styled-components';

export const Container = styled.div`
  margin-top: -100px;
`;
export const CardContainer = styled.div`
  display: block;
  border-radius: 0.75rem;
  background-color: #f7f7f7;
  padding: 1.5rem;
  box-shadow: 0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04);
  width: 63% !important;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3rem;
  margin-top: 40px;
  transition: opacity 0.5s ease-in-out;
  min-width: 240px;

  @media (max-width: 768px) {
    max-width: 800px;
  }

  &.dark {
    background-color: #2a2e37;
    color: #d1d5db;
  }
`;
export const CardTitle = styled.h5`
  margin-bottom: 0.5rem;
  font-size: 20px !important;
  font-weight: 500;
  line-height: 1.25;
  color: #1f2937;

  @media (max-width: 768px) {
    font-size: 15px;
  }

  &.dark {
    color: #f9fafb;
  }
`;
export const WrapperSpacing = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  i {
    font-size: 44px;
    color: #ea5b0b;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }

  @media (max-width: 400px) {
    flex-direction: column;
    align-items: flex-start;

    i {
      margin-top: 20px;
    }
  }
`;

export const CardText = styled.p`
  margin-bottom: 1rem;
  font-size: 16px;
  color: #4b5563;

  &.dark {
    color: #d1d5db;
  }
  @media (max-width: 768px) {
    font-size: 14px;

    &.dark {
      color: #d1d5db;
    }
  }
`;

export const CardButton = styled.button`
  background-color: #ea5b0b;

  color: #ffffff;
  border-radius: 0.375rem;
  padding: 0.625rem 1.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 1.25;
  box-shadow: 0 4px 9px -4px #3b71ca;
  transition: all 0.15s ease-in-out;

  &:hover {
    background-color: #2563eb;
    box-shadow: 0 8px 9px -4px rgba(59, 113, 202, 0.3), 0 4px 18px 0 rgba(59, 113, 202, 0.2);
  }
  &:focus {
    background-color: #2563eb;
    box-shadow: 0 8px 9px -4px rgba(59, 113, 202, 0.3), 0 4px 18px 0 rgba(59, 113, 202, 0.2);
    outline: none;
  }
  &:active {
    background-color: #1d4ed8;
    box-shadow: 0 8px 9px -4px rgba(59, 113, 202, 0.3), 0 4px 18px 0 rgba(59, 113, 202, 0.2);
  }
  &.dark {
  }
`;
