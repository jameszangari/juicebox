import SEO from "@/components/SEO";
import ProductListings from "@/components/ProductListings";
import { getAllProductsInCollection } from "@/lib/shopify";

export default function Shop({ products }) {
  const pageTitle = `shop | ${process.env.siteTitle}`;

  return (
    <div className="mx-auto max-w-6xl">
      {/* <div className="mx-auto max-w-6xl"> */}
      <SEO title={pageTitle} />
      <ProductListings products={products} />
    </div>
  );
}

export async function getServerSideProps() {
  const products = await getAllProductsInCollection();

  return {
    props: {
      products,
    },
  };
}
