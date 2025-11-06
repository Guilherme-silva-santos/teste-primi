export interface UpdateLocationRequest {
  name?: string;
  address?: string;
  lat?: number;
  lng?: number;
  notes?: string;
}

export interface UpdateMovieRequest {
  title?: string;
  description?: string;
  releaseYear?: number;
  rating?: number;
  imageUrl?: string;
  locations?: UpdateLocationRequest[];
}
