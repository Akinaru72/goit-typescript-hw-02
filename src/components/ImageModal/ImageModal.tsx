import Modal from "react-modal";
import css from "./ImageModal.module.css";
Modal.setAppElement("#root");

interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  imageUrl: string | null;
  description: string | null;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onRequestClose,
  imageUrl,
  description,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      {imageUrl ? (
        <>
          <img
            src={imageUrl}
            alt={description ?? "Large image"}
            className={css.image}
          />
          <p className={css.description}>
            {description ?? "No description available"}
          </p>
        </>
      ) : (
        <p>No image available</p>
      )}

      <button onClick={onRequestClose} className={css.closeButton}>
        Close
      </button>
    </Modal>
  );
};

export default ImageModal;
