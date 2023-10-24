import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 60px;
  justify-content: space-between;
  background-color: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;
  width: 100%;

  &:hover {
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 992px) {
    flex-direction: column;
    width: auto;
  }

  @media screen and (max-width: 600px) {
    padding: 20px; // Increased padding for mobile view
  }
`;
