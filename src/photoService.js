import axios from "axios";

const ACCESS_KEY = "ewWZR7S1Reic5PIxpAQLh-E01eOWCH_oyy0ETIVY6uQ";

axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.headers = {
  Authorization: `Client-ID ${ACCESS_KEY}`,
  "Accept-Version": "v1",
};
axios.defaults.params = {
  per_page: 8,
  orientation: "landscape",
};

const fetchPhotos = async (query, page) => {
  const response = await axios.get("/search/photos", {
    params: {
      query,
      page,
    },
  });

  return response.data;
};

export default fetchPhotos;
