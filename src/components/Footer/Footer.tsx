import React from 'react';

import { Content, CopyRight, FooterContainer, HorizontalLine } from './FooterStyled';

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
