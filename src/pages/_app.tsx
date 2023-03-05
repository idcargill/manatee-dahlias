import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';

import '../../styles/global.css';

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => (
  <>
    <SessionProvider session={session}>
      <Component {...pageProps} />;
    </SessionProvider>
  </>
);

export default MyApp;
