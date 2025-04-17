import css from "./ImageCard.module.css";

const ImageCard = ({ urls, alt_description, onImageClick }) => {
  return (
    <div className={css.wrapper}>
      <img
        onClick={() => onImageClick(urls.regular)}
        className={css.image}
        src={urls.small}
        alt={alt_description}
      />
      <p className={css.description}>{alt_description}</p>
    </div>
  );
};

export default ImageCard;
