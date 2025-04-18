export interface Photo {
  id: string;
  alt_description: string | null;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  user: {
    name: string;
    portfolio_url: string | null;
  };
}

export interface FetchPhotosResponse {
  total: number;
  total_pages: number;
  results: Photo[];
}
