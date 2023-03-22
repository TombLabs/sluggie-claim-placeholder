import type { AppProps } from "next/app";
import type { FC } from "react";
import React, { useMemo } from "react";
require("../styles/globals.css");

const App: FC<AppProps> = ({ Component, pageProps }) => {
  // Can be set to 'devnet', 'testnet', or 'mainnet-beta'

  return <Component {...pageProps} />;
};

export default App;
