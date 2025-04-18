import React from "react";
import css from "./ImageCard.module.css";

interface ImageCardProps {
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string | null;
  onImageClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({
  urls,
  alt_description,
  onImageClick,
}) => {
  return (
    <div className={css.wrapper}>
      <img
        onClick={() => onImageClick()}
        className={css.image}
        src={urls.small}
        alt={alt_description ?? "No description"}
      />
      <p className={css.description}>{alt_description ?? "No description"}</p>
    </div>
  );
};

export default ImageCard;
