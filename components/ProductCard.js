import Image from "next/image";
import Link from "next/link";
import Price from "@/components/Price";

function ProductCard({ product }) {
  const handle = product.node.handle;
  const title = product.node.title;
  const description = product.node.description;
  const price = product.node.variants.edges[0].node.price;

  const imageNode = product.node.images.edges[0].node;

  return (
    <Link href={`/products/${handle}`} passHref>
      <a className="w-72 mx-auto xp-card">
        <div className="relative">
          <div className="font-primary text-black text-2xl py-4 px-4">
            {title}
          </div>
          {/* <div className="text-lg text-gray-600 p-4 font-primary font-light">
            {description}
          </div> */}
          <div className="h-72 relative">
            <Image
              src={imageNode.originalSrc}
              alt={imageNode.altText}
              layout="fill"
              className="img-card bg-white"
            />
          </div>
          {/* <div
            className="text-palette-dark font-primary font-medium text-base absolute bottom-0 right-0 mb-4 pl-8 pr-4 pb-1 pt-2 bg-palette-lighter 
            rounded-tl-sm triangle"
          > */}
          <div className="bg-white p-4 text-jbblue2">
            <Price currency="$" num={price} numSize="text-lg" />
          </div>
        </div>
      </a>
    </Link>
  );
}

export default ProductCard;
