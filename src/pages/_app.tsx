import { HeroInfoContextProvider } from "@/context/HeroContext";
import { HeroInfoContextProvider2 } from "@/context/HeroContext2";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HeroInfoContextProvider>
      <HeroInfoContextProvider2>
        <Component {...pageProps} />
      </HeroInfoContextProvider2>
    </HeroInfoContextProvider>
  );
}
