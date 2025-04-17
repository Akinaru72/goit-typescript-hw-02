import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import fetchPhotos from "../../photoService";

import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";

import css from "./App.module.css";

const App = () => {
  const [queryValue, setQueryValue] = useState("");
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (!queryValue.trim()) return;

    async function getPhotos() {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await fetchPhotos(queryValue, page);
        if (data.total === 0) return;
        setPhotos((prevPhotos) =>
          page === 1 ? data.results : [...prevPhotos, ...data.results]
        );
        setHasMore(page < data.total_pages);
      } catch (error) {
        setIsError(true);
        toast.error("Something went wrong! Try again.");
      } finally {
        setIsLoading(false);
      }
    }

    getPhotos();
  }, [queryValue, page]);

  const handleQuery = (newQuery) => {
    if (!newQuery.trim()) {
      toast.error("Please enter a valid search query");
      return;
    }
    setQueryValue(newQuery.trim());
    setPage(1);
    setPhotos([]);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);

    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div>
      <SearchBar onSubmit={handleQuery} />

      {photos.length > 0 && (
        <ImageGallery photos={photos} onImageClick={openModal} />
      )}

      {photos.length > 0 && !isLoading && hasMore && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}

      {isLoading && <Loader />}

      {isError && <ErrorMessage />}

      <ImageModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        imageUrl={selectedImage}
      />
    </div>
  );
};

export default App;
