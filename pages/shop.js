import ProductListings from "@/components/ProductListings";
import { getAllProductsInCollection } from "@/lib/shopify";

function Shop({ products }) {
  return (
    <div className="mx-auto max-w-6xl">
      <ProductListings products={products} />
    </div>
  );
}

export async function getStaticProps() {
  const products = await getAllProductsInCollection();

  return {
    props: {
      products,
    },
  };
}

export default Shop;
