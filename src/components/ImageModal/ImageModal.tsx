import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onRequestClose, imageUrl }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <img src={imageUrl} alt="Large image" className={css.image} />

      <button onClick={onRequestClose} className={css.closeButton}>
        Close
      </button>
    </Modal>
  );
};

export default ImageModal;
