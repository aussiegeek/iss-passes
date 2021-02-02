import type { AppProps } from "next/app";
import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import React from "react";
import { IntlProvider } from "react-intl";
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <IntlProvider messages={{}} locale="en" defaultLocale="en">
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </IntlProvider>
  );
}

export default MyApp;
