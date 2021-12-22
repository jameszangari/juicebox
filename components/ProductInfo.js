import Price from "@/components/Price";

function ProductInfo({ title, description, price }) {
  return (
    <div className=" font-primary">
      <h1 className="leading-relaxed font-extrabold text-3xl">{title}</h1>
      <div className="text-xl font-medium py-4 px-1 text-jbblue2">
        <Price currency="$" num={price} numSize="text-2xl" />
      </div>
      <p className="font-medium text-lg">{description}</p>
    </div>
  );
}

export default ProductInfo;
