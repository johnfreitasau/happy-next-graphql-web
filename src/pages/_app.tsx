import React from 'react';
import { AppProps } from 'next/app';
import { createClient, Provider } from 'urql';

import GlobalStyle from '../styles/Global';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/Theme';
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import { extendTheme } from "@chakra-ui/react"
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_URL as string,
  credentials: 'include',
  cache: new InMemoryCache()
});

const MyApp: React.FC<AppProps> = ({Component, pageProps}) => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </ApolloProvider>
  )
}
export default MyApp;
