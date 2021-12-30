import { useState } from "react";
import Link from "next/link";
import Price from "@/components/Price";
import { useCartContext, useAddToCartContext } from "@/context/Store";

function ProductCard({ product }) {
  const handle = product.node.handle;
  const sale = product.node.availableForSale;
  const title = product.node.title;
  // const description = product.node.description;
  const price = product.node.variants.edges[0].node.price;
  const imageNode = product.node.images.edges[0].node;
  const variants = product.node.variants;

  const [quantity, setQuantity] = useState(1);
  const [variantId, setVariantId] = useState(variants.edges[0].node.id);
  const [variant, setVariant] = useState(variants.edges[0]);
  const isLoading = useCartContext()[2];
  const addToCart = useAddToCartContext();

  const atcBtnStyle = isLoading
    ? `pt-3 pb-2 bg-palette-primary text-white w-full mt-2 rounded-sm font-primary font-semibold text-xl flex 
                      justify-center items-baseline  hover:bg-palette-dark opacity-25 cursor-none`
    : `pt-3 pb-2 bg-palette-primary text-white w-full mt-2 rounded-sm font-primary font-semibold text-xl flex 
                      justify-center items-baseline  hover:bg-palette-dark`;

  function handleSizeChange(e) {
    setVariantId(e);
    // send back size change
    const selectedVariant = variants.filter((v) => v.node.id === e).pop();
    setVariantPrice(selectedVariant.node.price);

    // update variant
    setVariant(selectedVariant);
  }

  async function handleAddToCart() {
    const varId = variant.node.id;
    // update store context
    if (quantity !== "") {
      addToCart({
        productTitle: title,
        productHandle: handle,
        productImage: imageNode,
        variantId: varId,
        variantPrice: variant.node.price,
        variantTitle: variant.node.title,
        variantQuantity: quantity,
      });
    }
  }

  function updateQuantity(e) {
    if (e === "") {
      setQuantity("");
    } else {
      setQuantity(Math.floor(e));
    }
  }
  return (
    <Link href={`/products/${handle}`} passHref>
      <a className="w-3/4 mx-auto xp-card">
        <div className="relative">
          <div className="font-primary text-black text-2xl py-4 px-4">
            {title}
          </div>
          <div className="relative">
            <img
              src={imageNode.originalSrc}
              alt={imageNode.altText}
              className="img-card bg-white"
            />
          </div>
          {!sale && (
            <div className="bg-jbpink text-white p-4 font-bold">
              <p>Coming Soon</p>
            </div>
          )}
          {sale && (
            <div className="bg-white p-4 text-jbblue2">
              <Price currency="$" num={price} numSize="text-lg" />
              <button
                // className={atcBtnStyle}
                className="px-4 py-2 mt-4 w-full text-black"
                aria-label="cart-button"
                onClick={handleAddToCart}
              >
                Add to Box
                {/* <FontAwesomeIcon icon={faShoppingCart} className="w-5 ml-2" /> */}
              </button>
            </div>
          )}
        </div>
      </a>
    </Link>
  );
}

export default ProductCard;
