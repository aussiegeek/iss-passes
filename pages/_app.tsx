import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import { QueryClient, QueryClientProvider } from "react-query";
import React from "react";
import { IntlProvider } from "react-intl";
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <IntlProvider messages={{}} locale="en" defaultLocale="en">
      <QueryClientProvider client={queryClient}>
        <div className="m-10">
          <Component {...pageProps} />
        </div>
      </QueryClientProvider>
    </IntlProvider>
  );
}

export default MyApp;
