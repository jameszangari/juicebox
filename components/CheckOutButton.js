import Link from "next/link";

function CheckOutButton({ webUrl }) {
  return (
    <Link href={webUrl}>
      <button aria-label="checkout-products" className="px-4 py-2 w-full">
        Check Out
      </button>
    </Link>
  );
}

export default CheckOutButton;
