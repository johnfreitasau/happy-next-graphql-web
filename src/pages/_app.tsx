import React from 'react';
import { AppProps } from 'next/app';
import { createClient, Provider } from 'urql';

import GlobalStyle from '../styles/Global';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/Theme';

const client = createClient({
  url: 'http://localhost:4000/graphql'
  ,
  fetchOptions: {
    credentials: 'include'
  }
});

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
