import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Metadata from "../Metadata";

export default function Layout({ children, metadata }: any) {
  return (
    <div>
      <Metadata data={metadata} />
      <Header />
      {children}
      <Footer />
    </div>
  );
}
