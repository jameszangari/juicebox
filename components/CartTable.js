import { useState, useEffect } from "react";
import { useUpdateCartQuantityContext } from "@/context/Store";
import Link from "next/link";
import Price from "@/components/Price";
import { getCartSubTotal } from "@/utils/helpers";

function CartTable({ cart }) {
  const updateCartQuantity = useUpdateCartQuantityContext();
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  useEffect(() => {
    setCartItems(cart);
    setSubtotal(getCartSubTotal(cart));
  }, [cart]);

  function updateItem(id, quantity) {
    updateCartQuantity(id, quantity);
  }

  return (
    <>
      {cart >= 0 && (
        <p className="text-xl font-primary text-center mt-8 mb-16">
          Your box is empty.
        </p>
      )}
      {cartItems != 0 && (
        <div className="min-h-80 my-4 sm:my-8 mx-auto w-full">
          <table className="max-w-6xl mx-auto w-3/4">
            <thead>
              <tr className="uppercase text-xs sm:text-sm border-b border-jbgray">
                <th className="font-primary font-normal px-6 py-4">Product</th>
                <th className="font-primary font-normal px-6 py-4">Quantity</th>
                <th className="font-primary font-normal px-6 py-4 hidden sm:table-cell">
                  Price
                </th>
                <th className="font-primary font-normal px-6 py-4">Remove</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-jblightgray">
              {cartItems.map((item) => (
                <tr
                  key={item.variantId}
                  className="text-sm sm:text-base text-gray-600 text-center"
                >
                  <td className="font-primary font-medium px-4 sm:px-6 py-4 flex items-center">
                    <img
                      src={item.productImage.originalSrc}
                      alt={item.productImage.altText}
                      height={64}
                      width={64}
                      className={`sm:inline-flex`}
                    />
                    <Link passHref href={`/products/${item.productHandle}`}>
                      <a className="pt-1 hover:text-jbblue2">
                        {item.productTitle}, {item.variantTitle}
                      </a>
                    </Link>
                  </td>
                  <td className="font-primary font-medium px-4 sm:px-6 py-4">
                    <input
                      type="number"
                      inputMode="numeric"
                      id="variant-quantity"
                      name="variant-quantity"
                      min="1"
                      step="1"
                      value={item.variantQuantity}
                      onChange={(e) =>
                        updateItem(item.variantId, e.target.value)
                      }
                      className="text-gray-900 form-input border border-gray-300 w-16 rounded-sm focus:border-jbgray focus:ring-jbgray"
                    />
                  </td>
                  <td className="font-primary text-base font-light px-4 sm:px-6 py-4 hidden sm:table-cell">
                    <Price
                      currency="$"
                      num={item.variantPrice}
                      numSize="text-lg"
                    />
                  </td>
                  <td className="font-primary font-medium px-4 sm:px-6 py-4">
                    <a
                      aria-label="delete-item"
                      className="cursor-pointer hover:opacity-80 transition-all"
                      onClick={() => updateItem(item.variantId, 0)}
                    >
                      <img
                        src="/images/recycle.ico"
                        alt="remove"
                        className="block m-auto"
                      />
                    </a>
                  </td>
                </tr>
              ))}
              {subtotal === 0 ? null : (
                <tr className="text-center">
                  <td></td>
                  <td className="font-primary text-base text-gray-600 font-semibold uppercase px-4 sm:px-6 py-4">
                    Subtotal
                  </td>
                  <td className="font-primary text-lg text-jbblue font-medium px-4 sm:px-6 py-4">
                    <Price currency="$" num={subtotal} numSize="text-xl" />
                  </td>
                  <td></td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default CartTable;
