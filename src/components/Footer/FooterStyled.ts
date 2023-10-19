import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: #f5f5f5;
  color: black;
  margin-top: 90px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

export const Content = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: screen-xl;
  padding: 1rem;
  padding-top: 2rem;
  padding-bottom: 2rem;

  @media (min-width: 768px) {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  @media (min-width: 640px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0;
  }
`;

export const Logo = styled.img`
  margin-right: 0.75rem;
  height: 2rem;
`;

export const Title = styled.span`
  white-space: nowrap;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const Menu = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 500;
  color: inherit;
  margin-bottom: 1.5rem;

  @media (min-width: 640px) {
    margin-bottom: 0;
  }
`;

export const MenuItem = styled.li`
  margin-right: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;

export const HorizontalLine = styled.hr`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  border-top-width: 1px;
  border-gray-200: true;
  border-color: rgba(229, 231, 235, 1);
`;

export const CopyRight = styled.span`
  display: block;
  text-align: center;
  font-size: 0.875rem;
  color: inherit;

  @media (min-width: 640px) {
    text-align: center;
  }
`;
