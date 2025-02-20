import { FC } from "react";

interface ImageProps {
  images: { src: string; alt: string }[];
  index: number;
}

const Image: FC<ImageProps> = ({ images, index }) => {
  return (
    <div className="carousel">
      {<img src={images[index].src} alt={images[index].src} />}
    </div>
  );
};

export default Image;
