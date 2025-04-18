import axios from "axios";
import { FetchPhotosResponse } from "./types";

const ACCESS_KEY: string = "ewWZR7S1Reic5PIxpAQLh-E01eOWCH_oyy0ETIVY6uQ";

axios.defaults.baseURL = "https://api.unsplash.com";

axios.defaults.headers.common["Authorization"] = `Client-ID ${ACCESS_KEY}`;
axios.defaults.headers.common["Accept-Version"] = "v1";

axios.defaults.params = {
  per_page: 8,
  orientation: "landscape",
};

const fetchPhotos = async (
  query: string,
  page: number
): Promise<FetchPhotosResponse> => {
  const response = await axios.get<FetchPhotosResponse>("/search/photos", {
    params: {
      query,
      page,
    },
  });

  return response.data;
};

export default fetchPhotos;
