import React from 'react';

import {
  Container,
  ImageContainer,
  FormContainer,
  InputLabel,
  Input,
  LinkText,
  SubmitButton,
  OrangeElement,
  TextEnter
} from './LoginStyled';

const LoginPage: React.FC = () => {
  return (
    <Container>
      <ImageContainer>
        <img src="/images/Galp.png" alt="Placeholder Image" width={500} height={500} />
        <span>galp</span>
      </ImageContainer>
      <FormContainer>
        <div>
          <OrangeElement> </OrangeElement>
          <TextEnter className="mb-4 mt-1 text-2xl font-semibold">Entrar</TextEnter>
        </div>
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
          <div className="mb-4">
            <InputLabel htmlFor="password"></InputLabel>
            <Input
              type="password"
              id="password"
              placeholder="Senha"
              name="password"
              className="password-input"
              autoComplete="off"
            />
          </div>

          <SubmitButton type="submit" className="mt-5">
            Entrar
          </SubmitButton>
        </form>
        <div className="mt-6 text-center">
          <LinkText href="#">Login with microsoft azure </LinkText>
        </div>
      </FormContainer>
    </Container>
  );
};

export default LoginPage;
