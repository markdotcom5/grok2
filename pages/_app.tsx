import React from 'react';
import type { AppProps } from 'next/app';

// The App component is the root of your Next.js application.
// Disabling prop-types rule since it's not needed in TypeScript.
/* eslint-disable react/prop-types */

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
