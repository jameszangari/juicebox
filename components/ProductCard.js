import Link from "next/link";
import Price from "@/components/Price";

function ProductCard({ product }) {
  const handle = product.node.handle;
  const sale = product.node.availableForSale;
  const title = product.node.title;
  // const description = product.node.description;
  const price = product.node.variants.edges[0].node.price;
  const imageNode = product.node.images.edges[0].node;
  const variants = product.node.variants;

  return (
    <div className="w-5/6 mx-auto xp-card">
      <div className="relative xp-window">
        <div className="font-primary text-black text-2xl py-4 px-4">
          <Link href={`/products/${handle}`} passHref>
            {title}
          </Link>
        </div>

        <div className="xp-window-inner box-border">
          <div className="relative xp-image min-h-full">
            <img
              src={imageNode.originalSrc}
              alt={imageNode.altText}
              className="img-card bg-white box-border"
            />
            {!sale && (
              <div className="bg-white p-4 text-jbblue2">
                <p className="text-lg text-red-500">Out of Stock</p>
              </div>
            )}
          </div>
          {sale && (
            <div className="bg-white p-4 text-jbblue2">
              <Price currency="$" num={price} numSize="text-lg" />
              <Link href={`/products/${handle}`} passHref>
                <button
                  className="px-4 py-2 mt-4 w-full text-black"
                  aria-label="cart-button"
                >
                  Add to Box
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
