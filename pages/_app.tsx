import * as React from 'react'
import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from "../components/NavBar";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "binance";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      activeChain={activeChain}
    >
      <ChakraProvider>
      <NavBar/>
      <Component {...pageProps} />
      </ChakraProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
