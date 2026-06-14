export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'thali' | 'starter' | 'fastfood' | 'chinese' | 'beverage' | 'dessert' | 'extra';
  isPopular?: boolean;
  isChefSpecial?: boolean;
  spiciness?: 0 | 1 | 2 | 3; // 0 = not spicy, 3 = very spicy
  image: string;
  isGlutenFree?: boolean;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  comment: string;
  avatar?: string;
  source?: 'Google' | 'Direct';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'food' | 'ambiance' | 'garden';
  image: string;
  description: string;
}

export interface ReservationData {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  specialRequests?: string;
}
