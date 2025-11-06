export interface Location {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  notes: string;
}

export interface MovieById {
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
