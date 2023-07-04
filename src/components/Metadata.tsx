import Head from "next/head";
import React from "react";

interface Metadata {
  data: {
    title: string;
    description?: string;
    image?: string;
  };
}

export default function Metadata({ data }: Metadata) {
  const { title = "Welcome", description = "", image = null } = data || {};
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}
