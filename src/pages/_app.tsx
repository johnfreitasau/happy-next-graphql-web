import React from 'react';
import { AppProps } from 'next/app';

import GlobalStyle from '../styles/Global';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/Theme';
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import { extendTheme } from "@chakra-ui/react"
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';


const MyApp: React.FC<AppProps> = ({Component, pageProps}) => {
  return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
  )
}
export default MyApp;
