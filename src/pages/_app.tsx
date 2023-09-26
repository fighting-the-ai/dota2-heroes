import { HeroInfoContextProvider } from "@/context/HeroContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <HeroInfoContextProvider>
        <Component {...pageProps} />
      </HeroInfoContextProvider>
  );
}
