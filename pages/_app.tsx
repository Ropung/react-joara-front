import "@/styles/globals.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import GNB from "@/components/common/navi/GNB";
import { useRouter } from "next/router";
import Path from "@/constants/path/routes";

export default function App({ Component, pageProps }: AppProps) {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        refetchOnWindowFocus: false,
      },
    },
  });
  const router = useRouter();
  const { EPISODE } = Path;

  return (
    <QueryClientProvider client={client}>
      <ReactQueryDevtools initialIsOpen={false} />
      {router.pathname != EPISODE && <GNB />}
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
