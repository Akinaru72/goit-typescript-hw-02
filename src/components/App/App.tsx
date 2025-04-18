import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import fetchPhotos from "../../photoService";
import { Photo, FetchPhotosResponse } from "../../types";

import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";

import css from "./App.module.css";

const App = () => {
  const [queryValue, setQueryValue] = useState<string>("");
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [selectedDescription, setSelectedDescription] = useState<string | null>(
    null
  );

  useEffect(() => {
    if (!queryValue.trim()) return;

    async function getPhotos() {
      try {
        setIsLoading(true);
        setIsError(false);
        const data: FetchPhotosResponse = await fetchPhotos(queryValue, page);
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

  const handleQuery = (newQuery: string) => {
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

  const openModal = (imageUrl: string, description: string | null) => {
    setSelectedImage(imageUrl);
    setSelectedDescription(description);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    setSelectedDescription(null);
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
        description={selectedDescription}
      />
    </div>
  );
};

export default App;
