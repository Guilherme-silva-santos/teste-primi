export interface Platform {
  id: string;
  name: string;
  kind: string;
  iconUrl: string;
}

export interface MoviePlatform {
  id: string;
  movieId: string;
  platformId: string;
  url: string;
  platform: Platform;
}

export interface Location {
  id: string;
  movieId: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  notes: string;
  createdAt: string;
}

export interface MovieById {
  id: string;
  title: string;
  description: string;
  releaseYear: number;
  rating: number;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  platforms: MoviePlatform[];
  locations: Location[];
}
