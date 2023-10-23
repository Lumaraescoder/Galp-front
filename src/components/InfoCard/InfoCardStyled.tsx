import styled from 'styled-components';

export const InfoContainer = styled.div`
  flex: 1;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin: 0;
`;

export const Subtitle = styled.p`
  margin: 5px 0;
  font-size: 18px;
  color: grey;
`;

export const LogoContainer = styled.div`
  width: 150px;
  height: 150px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
    padding: 20px;
  }
`;
