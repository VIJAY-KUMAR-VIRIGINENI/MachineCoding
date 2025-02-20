import { FC, useState, useEffect } from "react";
import "./style.css";
import Image from "./Image";

const Carousel: FC = () => {
  const images: { src: string; alt: string }[] = [
    {
      src: "https://picsum.photos/id/600/600/400",
      alt: "Forest",
    },
    {
      src: "https://picsum.photos/id/100/600/400",
      alt: "Beach",
    },
    {
      src: "https://picsum.photos/id/200/600/400",
      alt: "Yak",
    },
    {
      src: "https://picsum.photos/id/300/600/400",
      alt: "Hay",
    },
    {
      src: "https://picsum.photos/id/400/600/400",
      alt: "Plants",
    },
    {
      src: "https://picsum.photos/id/500/600/400",
      alt: "Building",
    },
  ];
  const [currIndex, setIndex] = useState(0);
  const handleIncrement = () => {
    if (currIndex === images.length - 1) setIndex(0);
    else setIndex(currIndex + 1);
  };
  const handleDecrement = () => {
    if (currIndex === 0) {
      setIndex(images.length - 1);
    } else setIndex(currIndex - 1);
  };
  useEffect(() => {
    const interval = setInterval(handleIncrement, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="container">
        <button className="carousel-btn" onClick={handleIncrement}>
          +
        </button>
        <Image images={images} index={currIndex} />
        <button className="carousel-btn" onClick={handleDecrement}>
          -
        </button>
      </div>
    </>
  );
};

export default Carousel;
