import Link from "next/link";
import SEO from "@/components/SEO";
import PageTitle from "@/components/PageTitle";
import CartTable from "@/components/CartTable";
import CheckOutButton from "@/components/CheckOutButton";
import { useCartContext } from "@/context/Store";

function CartPage() {
  const pageTitle = `box | ${process.env.siteTitle}`;
  const [cart, checkoutUrl] = useCartContext();
  // console.log(cart);
  return (
    <div className="container mx-auto mb-20 min-h-screen">
      <SEO title={pageTitle} />
      <PageTitle text="What's in your Box?" />
      <CartTable cart={cart} />
      {cart >= 0 && (
        <Link href="/shop" passHref>
          <button className="px-10 py-2 m-auto block">Return to Shop</button>
        </Link>
      )}
      {cart != 0 && (
        <div className="max-w-sm mx-auto space-y-4 px-2">
          <CheckOutButton webUrl={checkoutUrl} />
        </div>
      )}
    </div>
  );
}

export default CartPage;
