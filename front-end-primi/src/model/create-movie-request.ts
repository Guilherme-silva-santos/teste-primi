export interface CreateLocationRequest {
  name: string;
  address?: string;
  lat: number;
  lng: number;
  notes?: string;
}

export interface CreateMovieRequest {
  title: string;
  description: string;
  releaseYear: number;
  rating: number;
  imageUrl: string;
  locations: CreateLocationRequest[];
}
