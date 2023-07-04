import Layout from "@/components/Layout";
import Metadata from "@/components/Metadata";

import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";

import "@/styles/globals.css";

const inter = Roboto({ subsets: ["latin"], weight: ["300", "400"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Metadata data={{ title: "Welcome" }} />
      <Component {...pageProps} />
    </div>
  );
}
