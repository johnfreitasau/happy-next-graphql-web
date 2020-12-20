import React from 'react';
import { AppProps } from 'next/app';
import { createClient, Provider } from 'urql';

import GlobalStyle from '../styles/global';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

const client = createClient({
  url: 'http://localhost:3333/graphql'
})

const MyApp: React.FC<AppProps> = ({Component, pageProps}) => {
  return (
  <Provider value={client}>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  </Provider>
  )
}
export default MyApp;
