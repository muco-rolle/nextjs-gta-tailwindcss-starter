import { useEffect } from "react";
import { AppProps } from "next/app";
import { Router } from "next/router";

import { GTMPageView } from "utils";

import "../styles/global.css";
import "tailwindcss/tailwind.css";

function App({ Component, pageProps }: AppProps) {
  // Initiate GTM
  useEffect(() => {
    const handleRouteChange = (url: string) => GTMPageView(url);
    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);
  return <Component {...pageProps} />;
}

export default App;
