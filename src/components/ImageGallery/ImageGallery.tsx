import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ photos, onImageClick }) => {
  return (
    <ul className={css.list}>
      {photos.map((photo) => (
        <li key={photo.id}>
          <ImageCard
            onImageClick={onImageClick}
            urls={photo.urls}
            alt_description={photo.alt_description}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
