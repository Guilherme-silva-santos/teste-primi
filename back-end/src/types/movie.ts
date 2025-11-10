export interface LocationInput {
  id?: string;
  name: string;
  address?: string;
  lat: number;
  lng: number;
  notes?: string;
}

export interface MovieInput {
  title: string;
  description?: string;
  releaseYear: number;
  rating?: number;
  imageUrl?: string;
  locations?: LocationInput[];
  platforms?: {
    platformId: string;
    url?: string;
  }[];
}

export interface MovieFilters {
  title?: string;
  genre?: string;
  year?: number;
  page?: number;
  limit?: number;
}
