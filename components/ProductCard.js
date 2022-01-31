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
      <Link href={`/products/${handle}`} passHref>
        <div className="relative xp-window min-h-full mb-2">
          <h1 className="font-primary text-black text-2xl p-2">{title}</h1>
          <div className="xp-window-inner box-border min-h-full">
            <div className="relative xp-image block min-h-full">
              <img
                src={imageNode.originalSrc}
                alt={imageNode.altText}
                className="img-card bg-white box-border"
              />
              {!sale && (
                <div className="bg-white p-4 flex items-center justify-between">
                  <p className="text-lg text-red-500 w-2/6">Out of Stock</p>
                  <button
                    className="w-4/6 px-6 py-2 text-black cursor-not-allowed"
                    aria-label="cart-button"
                    disabled
                  >
                    Add to Box
                  </button>
                </div>
              )}
            </div>
            {sale && (
              <div className="bg-white p-4 text-jbblue flex items-center justify-between w-full">
                <div className="w-2/6">
                  <Price
                    currency="$"
                    num={price}
                    numSize="text-lg text-jbblue"
                  />
                </div>
                <Link href={`/products/${handle}`} passHref>
                  <button
                    className="w-4/6 px-6 py-2 text-black"
                    aria-label="cart-button"
                  >
                    Add to Box
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
