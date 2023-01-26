import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "@components/Footer/Footer";
import Header from "@components/Header/Header";

const Layout = ({ children, pageMeta }) => {
  const meta = {
    title: "Reporta Helath",
    description: "Search and Report a facility",
    type: "website",
    ...pageMeta,
  };

  const router = useRouter();

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        {/* <link rel="icon" href="/favicon.ico" /> */}

        {/* open graph meta tag */}
        <meta
          property="og:url"
          content={`http://localhost:3000${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:site_name" content="Reporta Health" />

        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>

      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
