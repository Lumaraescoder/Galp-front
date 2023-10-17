import { useRouter } from 'next/router';
import React from 'react';

import {
  Container,
  ImageContainer,
  FormContainer,
  InputLabel,
  Input,
  SubmitButton,
  OrangeElement,
  TextEnter,
  Button,
  Or,
  MobileLogoContainer
} from './LoginStyled';

const LoginPage: React.FC = () => {
  const router = useRouter();
  const handleNavigation = (e) => {
    e.preventDefault(); // Isso é importante para prevenir a recarga da página ou o comportamento de envio do formulário
    router.push('/stackholders');
  };

  return (
    <Container>
      <ImageContainer>
        <img src="/images/Galp.png" alt="Placeholder Image" width={500} height={500} />
        <span>galp</span>
      </ImageContainer>

      <FormContainer>
        <MobileLogoContainer>
          <img src="/images/Galp.png" alt="Galp Logo" />
        </MobileLogoContainer>
        <div>
          <OrangeElement> </OrangeElement>
          <TextEnter className="mb-4 mt-1 text-2xl font-semibold">Registar</TextEnter>
        </div>
        <p className="mt-3"> Ainda não tem acesso?</p>
        <form action="#" method="POST">
          <div className="mb-4 mt-5">
            <InputLabel htmlFor="username"></InputLabel>
            <Input
              type="text"
              placeholder="Email"
              id="username"
              name="username"
              className="email-input"
              autoComplete="off"
            />
          </div>
          {/* <div className="mb-4">
            <InputLabel htmlFor="password"></InputLabel>
            <Input
              type="password"
              id="password"
              placeholder="Senha"
              name="password"
              className="password-input"
              autoComplete="off"
            />
          </div> */}

          <SubmitButton type="submit" className="mt-5" onClick={handleNavigation}>
            Registar
          </SubmitButton>
        </form>

        <Or className="my-4 mt-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">OU</p>
        </Or>

        <div className="mt-6 text-center">
          <Button onClick={handleNavigation}>
            <i className="fa fa-windows" aria-hidden="true"></i>
            &nbsp; Login with Microsoft
          </Button>
        </div>
      </FormContainer>
    </Container>
  );
};

export default LoginPage;
