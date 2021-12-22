import StoreHeading from "@/components/StoreHeading";
import Typewriter from "typewriter-effect";
import Link from "next/dist/client/link";

function IndexPage({ products }) {
  return (
    // <div className="mx-auto max-w-6xl">
    //   <StoreHeading />
    // </div>
    <div className="typewriter">
      <div className="typewriter__left">
        <h1 className="text-4xl">Age is just a number</h1>
        {/* <h3 className=''></h3> */}
        <Typewriter
          options={{
            strings: ["You're never too old for a juicebox."],
            autoStart: true,
            loop: true,
            wrapperClassName: "typewriter__leftType",
            cursorClassName: "typewriter__leftType",
          }}
        />
      </div>
      <div className="typewriter__right">
        <Link href="/shop">
          <svg
            width="99"
            height="42"
            viewBox="0 0 99 42"
            fill="none"
            xmlns="//www.w3.org/2000/svg"
            className="cursor-pointer"
          >
            <path
              d="M88.4 20.6H0"
              stroke="black"
              strokeWidth="10"
              strokeMiterlimit="10"
            />
            <path
              d="M97.9 20.6L75.8 1.10001V40L97.9 20.6Z"
              fill="black"
              stroke="black"
              strokeMiterlimit="10"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default IndexPage;
