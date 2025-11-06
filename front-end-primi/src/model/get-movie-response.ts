export interface Location {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  notes: string;
}

export interface Movie {
  id: string;
  title: string;
  description: string;
  releaseYear: number;
  rating: number;
  imageUrl: string;
  locations: Location[];
  createdAt: string;
  updatedAt: string;
}

export interface Pagination {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface GetMoviesResponse {
  data: Movie[];
  pagination: Pagination;
}

export interface GetMoviesFilters {
  title?: string;
  page?: number;
  limit?: number;
}
