import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import MapHeader from "@components/MapPage/MapHeader";
import Sidenav from "@components/MapPage/Sidenav";

export default function MapLayout({ children, pageMeta }) {
  const meta = {
    title: "Search result for nearest facilities",
    description: "Reporta health",
    type: "website",
    ...pageMeta,
  };
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="icon" href="/favicon.ico" />
        {/* open graph meta tag */}
        <meta
          property="og:url"
          content={`http://localhost:3000${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:site_name" content="KASU SMS" />

        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>

      <main className="">{children}</main>
    </>
  );
}
