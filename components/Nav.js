import { useState, useEffect } from "react";
import Link from "next/link";
import { useCartContext } from "@/context/Store";
import Logo from "@/components/Logo";
import Bag from "@/components/Bag";

function Nav() {
  const cart = useCartContext()[0];
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    let numItems = 0;
    cart.forEach((item) => {
      numItems += item.variantQuantity;
    });
    setCartItems(numItems);
  }, [cart]);

  const [toggleMenu, setToggleMenu] = useState(null);

  const disableScroll = () => {
    document.querySelectorAll("html").forEach((node) => {
      node.classList.add("is-open");
    });
  };

  const enableScroll = () => {
    document.querySelectorAll("html").forEach((node) => {
      node.classList.remove("is-open");
    });
  };

  function toggleMenuState(e) {
    setToggleMenu((toggle) => {
      const newState = !toggle;

      if (newState) {
        disableScroll();
      } else {
        enableScroll();
      }

      return newState;
    });
  }
  return (
    <>
      <nav className="sticky top-0 z-20 xp-bg">
        <div className="flex items-center justify-between w-full mx-auto px-6 py-2">
          {/* desktop menu */}
          <div className="md:flex hidden justify-start w-4/12">
            <Link href="/" passHref>
              <button className="text-sm uppercase main-button">Home</button>
            </Link>
            <Link href="/shop" passHref>
              <button className="text-sm uppercase main-button">Shop</button>
            </Link>
            <Link href="/about" passHref>
              <button className="text-sm uppercase main-button">About</button>
            </Link>
          </div>
          {/* mobile menu */}
          <div className="md:hidden w-4/12">
            <span
              className={
                toggleMenu
                  ? "cursor-pointer z-50 hamburger--squeeze is-active"
                  : "cursor-pointer z-50 hamburger--squeeze"
              }
              type="button"
              onClick={toggleMenuState}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </span>
          </div>
          {/* Logo */}
          <div className="flex justify-center w-4/12">
            <Link href="/" passHref>
              <a className="cursor-pointer">
                <h1>
                  <Logo />
                </h1>
              </a>
            </Link>
          </div>
          {/* Cart */}
          <div className="flex justify-end w-4/12 items-center">
            <p className="md:block hidden pr-4 font-primary">100% ORIGINAL</p>
            <Link href="/cart" passHref>
              <a className=" relative" aria-label="cart">
                <Bag />
                {cartItems === 0 ? null : (
                  <span className="absolute top-0 right-0 text-xs bg-jbblue text-black font-semibold rounded-full h-6 w-6 transform translate-x-4 -translate-y-2 leading-6 text-center">
                    {cartItems}
                  </span>
                )}
              </a>
            </Link>
          </div>
        </div>
      </nav>
      {toggleMenu && (
        <div className="flex flex-row justify-start items-center z-10 w-full bg-jbgray">
          {/* <div className="absolute flex flex-row justify-center items-center z-10 w-full h-full bg-jbgray mt-[-58px]"> */}
          <Link href="/" passHref>
            <button
              onClick={toggleMenuState}
              className="text-sm uppercase main-button"
            >
              Home
            </button>
          </Link>
          <Link href="/shop" passHref>
            <button
              onClick={toggleMenuState}
              className="text-sm uppercase main-button"
            >
              Shop
            </button>
          </Link>
          <Link href="/about" passHref>
            <button
              onClick={toggleMenuState}
              className="text-sm uppercase main-button"
            >
              About
            </button>
          </Link>
        </div>
      )}
    </>
  );
}

export default Nav;
