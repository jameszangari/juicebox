import Typewriter from "typewriter-effect";
import Link from "next/dist/client/link";

function IndexPage({ products }) {
  return (
    <div className="typewriter">
      <div className="typewriter__left">
        <h1 className="md:text-4xl text-3xl">Age is just a number</h1>
        {/* <h3 className=''></h3> */}
        <Typewriter
          options={{
            strings: ["You're never too old for a juicebox."],
            delay: 100,
            autoStart: true,
            loop: true,
            wrapperClassName: "typewriter__leftType md:text-3xl text-2xl",
            cursorClassName: "typewriter__leftType md:text-3xl text-2xl",
          }}
        />
      </div>
      <div className="typewriter__right">
        <Link href="/shop">
          <svg
            width="94"
            height="34"
            viewBox="0 0 94 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M93.92 16.4641C93.9014 16.3221 93.8609 16.1838 93.8 16.0541C93.807 16.0313 93.807 16.0069 93.8 15.9841C93.8018 15.9575 93.8018 15.9307 93.8 15.9041C93.7648 15.8136 93.7212 15.7266 93.67 15.6441C93.6091 15.5436 93.5423 15.4468 93.47 15.3541C93.39 15.2541 93.3 15.1841 93.21 15.0841L78.72 0.644094C78.2417 0.213746 77.6164 -0.0164931 76.9732 0.000920388C76.3301 0.0183339 75.7181 0.28207 75.2638 0.737668C74.8095 1.19327 74.5475 1.80593 74.5319 2.44915C74.5163 3.09236 74.7483 3.71701 75.18 4.19409L85.43 14.4441H2.5C1.83696 14.4441 1.20107 14.7075 0.732233 15.1763C0.263392 15.6452 0 16.2811 0 16.9441C0 17.6071 0.263392 18.243 0.732233 18.7119C1.20107 19.1807 1.83696 19.4441 2.5 19.4441H85.43L75.18 29.6941C74.7106 30.1635 74.4468 30.8002 74.4468 31.4641C74.4468 32.128 74.7106 32.7647 75.18 33.2341C75.6494 33.7035 76.2861 33.9673 76.95 33.9673C77.6139 33.9673 78.2506 33.7035 78.72 33.2341L93.24 18.7141L93.4 18.5241C93.4746 18.4367 93.5415 18.343 93.6 18.2441L93.73 17.9941C93.7587 17.9444 93.779 17.8904 93.79 17.8341C93.8495 17.7074 93.8899 17.5726 93.91 17.4341C93.9848 17.1155 93.9882 16.7842 93.92 16.4641V16.4641Z"
              fill="black"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default IndexPage;
