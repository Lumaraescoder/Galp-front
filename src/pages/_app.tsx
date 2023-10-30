import type { AppProps } from 'next/app';
import '../styles/globals.css';
import 'font-awesome/css/font-awesome.min.css';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import Footer from '@/components/Footer/Footer';
import Navigation from '@/components/Navigation/Navigation';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
`;

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isLoginPage = router.pathname === '/';

  return (
    <Container>
      {!isLoginPage && <Navigation />}
      <MainContent>
        <Component {...pageProps} />
      </MainContent>
      {!isLoginPage && <Footer />}
    </Container>
  );
}
