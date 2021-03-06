import { useState } from "react";
import ProductInfo from "@/components/ProductInfo";
import ProductForm from "@/components/ProductForm";

function ProductDetails({ productData }) {
  const [variantPrice, setVariantPrice] = useState(
    productData.variants.edges[0].node.price
  );
  return (
    <div className="flex flex-col justify-between h-full w-full md:w-1/2 max-w-md mx-auto space-y-4 min-h-128">
      <ProductInfo
        title={productData.title}
        description={productData.description}
        price={variantPrice}
        sale={productData.availableForSale}
      />
      <ProductForm
        title={productData.title}
        handle={productData.handle}
        variants={productData.variants.edges}
        mainImg={productData.images.edges[0].node}
        setVariantPrice={setVariantPrice}
        sale={productData.availableForSale}
      />
    </div>
  );
}

export default ProductDetails;
