/* eslint-disable react/jsx-props-no-spreading */
// @flow
import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import { NextSeo } from 'next-seo';

import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import './global-styles.css';

type Props = {
  Component: *,
  pageProps: *,
}
export default function MyApp(props: Props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const title = 'VivekNeel | Portfolio';
  const description = 'VivekNeel is a Lead Frontend Engineer @Memorang. He has total 5 years of experience working with react/react-native';
  return (
    <>
      <NextSeo
        title={title}
        description={description}
      />
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
