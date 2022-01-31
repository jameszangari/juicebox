import Price from "@/components/Price";

function ProductInfo({ title, description, price, sale }) {
  return (
    <div className="font-primary">
      <h1 className="leading-relaxed font-extrabold text-3xl">{title}</h1>
      {!sale && (
        <div className="text-xl font-medium py-4 px-1">
          <p className="text-2xl text-red-500">Out of Stock</p>
        </div>
      )}
      {sale && (
        <div className="text-xl font-medium py-4 px-1">
          <Price currency="$" num={price} numSize="text-2xl text-jbblue" />
        </div>
      )}
      <p className="font-medium text-lg">{description}</p>
    </div>
  );
}

export default ProductInfo;
