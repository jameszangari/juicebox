import { useState, useRef } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function ProductImage({ images }) {
  // const [mainImg, setMainImg] = useState(images[0].node);
  // const ref = useRef();

  // function scroll(scrollOffset) {
  //   ref.current.scrollLeft += scrollOffset;
  // }

  return (
    <div className="w-full md:w-1/2 max-w-md">
      <Carousel
        autoPlay={false}
        dynamicHeight={false}
        infiniteLoop={true}
        stopOnHover={false}
        showArrows={true}
        showIndicators={true}
        showStatus={false}
        showThumbs={true}
        transitionTime={500}
        // className="relative h-96"
      >
        {images.map((image) => (
          <img
            src={image.node.originalSrc}
            alt={image.node.altText}
            className="object-cover"
            // className="h-96 object-cover"
          />
        ))}
      </Carousel>
    </div>
    // <div className="w-full md:w-1/2 max-w-md border bg-white">
    //   <div className="relative h-96">
    //     <Image
    //       src={mainImg.originalSrc}
    //       alt={mainImg.altText}
    //       layout="fill"
    //       className="transform duration-500 ease-in-out hover:scale-105"
    //     />
    //   </div>
    //   <div className="relative flex border-t">
    //     <button
    //       aria-label="left-scroll"
    //       className="h-32 absolute left-0 z-10 opacity-75"
    //       onClick={() => scroll(-300)}
    //     >
    //       <FontAwesomeIcon icon={faArrowLeft} className="w-3 mx-1" />
    //     </button>
    //     <div
    //       ref={ref}
    //       style={{ scrollBehavior: "smooth" }}
    //       className="flex space-x-1 w-full overflow-auto border-t"
    //     >
    //       {images.map((imgItem, index) => (
    //         <button
    //           key={index}
    //           className="relative w-40 h-32 flex-shrink-0 rounded-sm "
    //           onClick={() => setMainImg(imgItem.node)}
    //         >
    //           <Image
    //             src={imgItem.node.originalSrc}
    //             alt={imgItem.node.altText}
    //             layout="fill"
    //             className=""
    //           />
    //         </button>
    //       ))}
    //     </div>
    //     <button
    //       aria-label="right-scroll"
    //       className="h-32 absolute right-0 z-10 opacity-75"
    //       onClick={() => scroll(300)}
    //     >
    //       <FontAwesomeIcon icon={faArrowRight} className="w-3 mx-1" />
    //     </button>
    //   </div>
    // </div>
  );
}

export default ProductImage;
