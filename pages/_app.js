import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import "@/styles/globals.css";
// import "98.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <SEO title={process.env.siteTitle} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
