import type { AppProps } from 'next/app';
import '../styles/globals.css';
import 'font-awesome/css/font-awesome.min.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
