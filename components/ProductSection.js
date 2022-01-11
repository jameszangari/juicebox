import ProductImage from "@/components/ProductImage";
import ProductDetails from "@/components/ProductDetails";

function ProductSection({ productData }) {
  return (
    <div className="flex flex-col justify-center items-center lg:flex-row lg:items-start space-y-8 lg:space-y-0 lg:space-x-4 max-w-6xl mx-auto px-4">
      <ProductImage images={productData.images.edges} />
      <ProductDetails productData={productData} />
    </div>
  );
}

export default ProductSection;
