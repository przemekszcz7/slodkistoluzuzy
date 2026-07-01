export interface GalleryItem {
  id: number;
  url: string;
  title: string;
  category: "torty" | "slodki-stol" | "ciasta" | "weselne";
}

export interface OfferCard {
  id: number;
  title: string;
  description: string;
  details: string[];
  iconName: string;
  imageIndex: number; // reference to a matching image URL from gallery for high fidelity
}

export interface Testimonial {
  id: number;
  author: string;
  rating: number;
  text: string;
  event: string;
}

export interface OrderStep {
  id: number;
  title: string;
  subtitle: string;
  description: string;
}
