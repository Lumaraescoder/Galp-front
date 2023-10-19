import React from 'react';

import { Content, CopyRight, FooterContainer } from './FooterStyled';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Content>
        <CopyRight className="block text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © 2023 Built by askblue
          <a href="https://flowbite.com/" className="hover:underline"></a>
        </CopyRight>
      </Content>
    </FooterContainer>
  );
};

export default Footer;
