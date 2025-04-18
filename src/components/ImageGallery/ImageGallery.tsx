import ImageCard from "../ImageCard/ImageCard";
import { Photo } from "../../types";
import css from "./ImageGallery.module.css";

interface ImageGalleryProps {
  photos: Photo[];
  onImageClick: (imageUrl: string, description: string | null) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  photos,
  onImageClick,
}) => {
  return (
    <ul className={css.list}>
      {photos.map((photo) => (
        <li key={photo.id}>
          <ImageCard
            onImageClick={() =>
              onImageClick(photo.urls.regular, photo.alt_description)
            }
            urls={photo.urls}
            alt_description={photo.alt_description}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
