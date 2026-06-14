import { MenuItem, Review, GalleryItem } from './types';

// Let's import the concrete paths we generated
export const RESTAURANT_IMAGES = {
  hero: '/src/assets/images/shivoy_hero_1781416690529.jpg',
  rajasthaniThali: '/src/assets/images/rajasthani_thali_1781416705028.jpg',
  gardenDining: '/src/assets/images/garden_dining_1781416719274.jpg',
  paneerTikka: '/src/assets/images/paneer_tikka_1781416733992.jpg',
};

export const RESTAURANT_INFO = {
  name: "Shivoy Fun 'n' Food Restaurant",
  tagline: "Pure Vegetarian Garden Dining & Indian Delicacies in Kota",
  category: "Pure Vegetarian Family Restaurant",
  rating: 4.0,
  reviewCount: 418,
  priceRange: "₹200–400 per person",
  timings: {
    open: "11:00 AM",
    close: "11:00 PM",
    openHour: 11,
    closeHour: 23,
  },
  phone: "+91 94141 86117",
  phoneRaw: "+919414186117",
  address: "80 Feet Link Road, Near Steel Bridge, Borkhera, Gordhanpura, Kota, Rajasthan 324001",
  whatsapp: "https://wa.me/919414186117",
  gmapsEmbed: "https://maps.google.com/maps?q=Shivoy%20Fun%20'n'%20Food%20Restaurant,%2080%20Feet%20Link%20Road,%20Near%20Steel%20Bridge,%20Borkhera,%20Gordhanpura,%20Kota,%20Rajasthan%20324001&t=&z=15&ie=UTF8&iwloc=&output=embed"
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "m1",
    name: "Royal Rajasthani Thali",
    description: "A grand culinary journey containing Dal, Bati, Churma, Gatte ki Sabji, Ker Sangri, Lehsun Chutney, Butter Roti, Rice, Buttermilk, and Sweet.",
    price: 349,
    category: "thali",
    isPopular: true,
    isChefSpecial: true,
    spiciness: 2,
    image: RESTAURANT_IMAGES.rajasthaniThali,
  },
  {
    id: "m2",
    name: "Shivoy Deluxe Thali",
    description: "A rich family platter serving Paneer Butter Masala, seasonal Mixed Veg, Dal Tadka, Jeera Rice, 3 Butter Roti or 2 Butter Naan, Papad, Salad, Sweet, and Raita.",
    price: 279,
    category: "thali",
    isPopular: true,
    spiciness: 1,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=600&auto=format&fit=crop", // Delicious Indian lunch setting
  },
  {
    id: "m3",
    name: "Signature Paneer Tikka",
    description: "Creamy cubes of cottage cheese marinated in spiced yogurt, skewered with crispy bell peppers, grilled to perfection in clay tandoor oven.",
    price: 249,
    category: "starter",
    isChefSpecial: true,
    spiciness: 2,
    image: RESTAURANT_IMAGES.paneerTikka,
  },
  {
    id: "m4",
    name: "Shivoy Super Supreme Pizza",
    description: "Freshly hand-stretched crust baked with rich house marinara sauce, loaded with fresh capsicum, red onions, golden sweet corn, paneer cubes, and premium mozzarella cheese.",
    price: 299,
    category: "fastfood",
    spiciness: 1,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop", // Premium pizza placement
  },
  {
    id: "m5",
    name: "Double Cheese Garden Burger",
    description: "Crispy hand-formed vegetable patty tucked between toasted sesame buns, double cheddar slices, sliced tomato, lettuce, and our secret tandoori dressing. Served with gold chips.",
    price: 129,
    category: "fastfood",
    spiciness: 1,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop", // Gourmet burger
  },
  {
    id: "m6",
    name: "Veg Manchurian Dry / Gravy",
    description: "Golden fried vegetable dumplings simmered in a luscious dark soy-garlic sauce with hints of green chilies, coriander, and scallions.",
    price: 189,
    category: "chinese",
    spiciness: 2,
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=600&auto=format&fit=crop", // Asian fusion / stir fry
  },
  {
    id: "m7",
    name: "Schezwan Hakka Noodles",
    description: "Stir-fried thin springy noodles tossed with crisp julienne vegetables and fiery home-brewed Schezwan sauce.",
    price: 179,
    category: "chinese",
    isPopular: true,
    spiciness: 3,
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=600&auto=format&fit=crop", // Noodles
  },
  {
    id: "m8",
    name: "Kesar Pista Badam Shake",
    description: "Traditional chilled beverage brimming with royal saffron strands, roasted pistachios, premium almonds, and sweet cardamom infused with full-cream milk.",
    price: 149,
    category: "beverage",
    isChefSpecial: true,
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600&auto=format&fit=crop", // Traditional shake / smoothie
  },
  {
    id: "m9",
    name: "Oreo Mudslide Shake",
    description: "Delectable thick chocolate milkshake blended with crushed Oreo cookies, dynamic scoop of vanilla ice cream, and beautiful rich chocolate syrup.",
    price: 139,
    category: "beverage",
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=600&auto=format&fit=crop", // Chocolate shake
  },
  {
    id: "m10",
    name: "Royal Rajbhog Ice Cream",
    description: "Premium rich ice cream infused with rich dry fruits, saffron flavor, almonds, pistachios, and delicious cashew nuggets.",
    price: 99,
    category: "dessert",
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?q=80&w=600&auto=format&fit=crop", // Premium ice cream scoop
  },
  {
    id: "m11",
    name: "Sizzling Brownie with Ice Cream",
    description: "Fudge chocolate brownie served sizzling hot on a cast-iron platter, crowned with double vanilla scoops and drizzled with hot dark chocolate fudge sauce.",
    price: 199,
    category: "dessert",
    isPopular: true,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=600&auto=format&fit=crop", // Sizzling brownie
  },
];

export const REVIEWS_DATA: Review[] = [
  {
    id: "r1",
    name: "Rahul Sharma",
    rating: 5,
    date: "2 weeks ago",
    comment: "The absolute best place in Kota for pure vegetarian Rajasthani food. Their Rajasthani Thali is super heavy, loaded with pure ghee baati and amazing churma. The open garden environment is so peaceful and relaxing for the family.",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop",
    source: "Google"
  },
  {
    id: "r2",
    name: "Priya Maheshwari",
    rating: 4,
    date: "1 month ago",
    comment: "Excellent experience dining at Shivoy with my parents. The garden is well-maintained and very neat. Paneer Tikka was smoky and super soft. Fast service even when the seating was completely full on Sunday night.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    source: "Google"
  },
  {
    id: "r3",
    name: "Ankit Gurjar",
    rating: 5,
    date: "3 days ago",
    comment: "Affordable price range compared to other open-air restaurants in Borkhera. The Chinese food and Deluxe thali are phenomenal. Highly recommended if you are looking for a neat and clean vegetarian family outlet.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    source: "Direct"
  },
  {
    id: "r4",
    name: "Sneha Jain",
    rating: 4,
    date: "3 weeks ago",
    comment: "Beautiful vibes near the Steel Bridge borkhera. It is our family's favorite weekend spot. The shakes are absolutely premium, kids love their loaded pizza and brownie sizzler!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    source: "Google"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Lush Open Garden Seating",
    category: "garden",
    image: RESTAURANT_IMAGES.gardenDining,
    description: "Dine under stars with cool breezes in our sprawling open-air family lawns."
  },
  {
    id: "g2",
    title: "Grand Rajasthani Feast",
    category: "food",
    image: RESTAURANT_IMAGES.rajasthaniThali,
    description: "Experience the true culinary heritage of Mewar with handcrafted Dal Baati Churma."
  },
  {
    id: "g3",
    title: "Hot Tandoor Paneer Tikka",
    category: "food",
    image: RESTAURANT_IMAGES.paneerTikka,
    description: "Sizzling, tandoor-roasted paneer skewers marinated in spicy curd & herbs."
  },
  {
    id: "g4",
    title: "Ambiance & String Lights",
    category: "ambiance",
    image: RESTAURANT_IMAGES.hero,
    description: "Magical fairy lights light up the garden creating an unforgettable dining atmosphere for families."
  },
  {
    id: "g5",
    title: "Loaded Italian Pizza",
    category: "food",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop",
    description: "Thick layers of bubbling cheese, crispy bell peppers, and golden dynamic sweetcorn."
  },
  {
    id: "g6",
    title: "Cozy Family Pavilions",
    category: "garden",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop",
    description: "Comfortable private seating zones designed specifically for larger families and parties."
  }
];

export const CHOOSE_US_REASONS = [
  {
    title: "100% Pure Vegetarian",
    description: "Strictly vegetarian cuisine cooked with love, absolute hygiene, and high-quality premium ingredients.",
    icon: "VegIcon"
  },
  {
    title: "Open Garden Dining",
    description: "Peaceful environment surrounded by nature, water fountains, and starry sky dining tables.",
    icon: "Tree"
  },
  {
    title: "Highly Affordable Prices",
    description: "Enjoy luxurious dining, generous portion sizes, and gourmet taste starting at just ₹200-400 per person.",
    icon: "Wallet"
  },
  {
    title: "Perfect Family Atmosphere",
    description: "Dedicated kids play area, comfortable table distancing, and peaceful garden pavillions for gathering.",
    icon: "Users"
  },
  {
    title: "Express Fast Service",
    description: "Warm, professional hospitality with high-speed tandoors ensuring quick service even during peak weekends.",
    icon: "Clock"
  }
];
