import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #f5f5f5;
  color: black;

  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

const Content = styled.div`
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

const FlexContainer = styled.div`
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

const Logo = styled.img`
  margin-right: 0.75rem;
  height: 2rem;
`;

const Title = styled.span`
  white-space: nowrap;
  font-size: 1.5rem;
  font-weight: 600;
`;

const Menu = styled.ul`
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

const MenuItem = styled.li`
  margin-right: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;

const HorizontalLine = styled.hr`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  border-top-width: 1px;
  border-gray-200: true;
  border-color: rgba(229, 231, 235, 1);
`;

const CopyRight = styled.span`
  display: block;
  text-align: center;
  font-size: 0.875rem;
  color: inherit;

  @media (min-width: 640px) {
    text-align: center;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Content>
        {/* <FlexContainer>
          <a href="https://flowbite.com/" className="mb-4 flex items-center sm:mb-0">
            <Logo src="images/Galp.png" alt="Galp Logo" />
            <Title>Galp</Title>
          </a>
          <Menu>
            <MenuItem>
              <a href="#">Home</a>
            </MenuItem>
            <MenuItem>
              <a href="#">BackOffice</a>
            </MenuItem>
          </Menu>
        </FlexContainer> */}
        <HorizontalLine />
        <CopyRight className="block text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © 2023 Built by askblue
          <a href="https://flowbite.com/" className="hover:underline"></a>
        </CopyRight>
      </Content>
    </FooterContainer>
  );
};

export default Footer;
