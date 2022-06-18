import {useEffect, useState} from 'react';

import Head from 'next/head';
import { AppShell, Container, MantineProvider } from '@mantine/core';
import {useViewportSize} from '@mantine/hooks';

import AppHeader from './components/AppHeader';
import AppNavbar from './components/AppNavbar';

export default function App(props) {
  const { Component, pageProps } = props;
  const { width } = useViewportSize();
  const [hiddenMenu, setHiddenMenu] = useState(false)

  useEffect(() => {
    width <= 768 ? setHiddenMenu(true) : setHiddenMenu(false);
  }, [width]);

  return (
    <>
      <Head>
        <title>AGRIBASE - Uma plataforma de suporte ao produtor rural</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'light',
        }}
      >
        <AppShell
          navbarOffsetBreakpoint="sm"
          fixed
          padding="md"
          navbar={<AppNavbar hidden={hiddenMenu} />}
          header={<AppHeader hiddenMenu={hiddenMenu} setHiddenMenu={setHiddenMenu} />}
        >
          <Container>
            <Component {...pageProps} />
          </Container>
        </AppShell>
      </MantineProvider>
    </>
  );
}
