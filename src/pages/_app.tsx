import type { AppProps } from 'next/app';

import '../styles/globals.css';
import 'font-awesome/css/font-awesome.min.css';
import { useRouter } from 'next/router';

import Footer from '@/components/Footer/Footer';
import Navigation from '@/components/Navigation/Navigation';

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const isLoginPage = router.pathname === '/';

  return (
    <div>
      {!isLoginPage && <Navigation />}
      <Component {...pageProps} />
      {!isLoginPage && <Footer />}
    </div>
  );
}
