import { MenuItem, Review, GalleryItem } from './types';

// Import our local high-quality assets to let Vite resolve, hash, and bundle them for Netlify
import heroImage from './assets/images/shivoy_hero_1781416690529.jpg';
import rajasthaniThaliImage from './assets/images/rajasthani_thali_1781416705028.jpg';
import gardenDiningImage from './assets/images/garden_dining_1781416719274.jpg';
import paneerTikkaImage from './assets/images/paneer_tikka_1781416733992.jpg';

export const RESTAURANT_IMAGES = {
  hero: heroImage,
  rajasthaniThali: rajasthaniThaliImage,
  gardenDining: gardenDiningImage,
  paneerTikka: paneerTikkaImage,
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
  {
    id: "m12",
    name: "Cold Coffee with Ice Cream",
    description: "Rich, creamy, and chilled brewed coffee served with a generous scoop of premium vanilla ice cream on top.",
    price: 115,
    category: "beverage",
    image: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "m13",
    name: "Chocolate Shake with Ice Cream",
    description: "Chilled full-cream milk blended with thick cocoa and dark chocolate syrup, crowned with a scoop of premium chocolate ice cream.",
    price: 115,
    category: "beverage",
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "m14",
    name: "Rose Milk with Ice Cream",
    description: "Sweet, ambient rose-infused pink milk served ice-cold, finished with a delightful scoop of creamy vanilla ice cream.",
    price: 115,
    category: "beverage",
    image: "https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "m15",
    name: "Premium Cold Coffee",
    description: "Classic house-special chilled espresso whipped smoothly with thick sweet milk, served frosty.",
    price: 95,
    category: "beverage",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "m16",
    name: "Thick Chocolate Shake",
    description: "Indulgently rich, frothy milkshake blended with premium dark chocolate sauce and fresh milk.",
    price: 95,
    category: "beverage",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "m17",
    name: "Rose Milk Shake",
    description: "A refreshing traditional milk elixir beautifully infused with pure rose syrup and delicate sweet notes.",
    price: 95,
    category: "beverage",
    image: "https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "m18",
    name: "Classic Milk Shake",
    description: "Satisfyingly sweet and smooth thick shake blended to perfection, customized for a rich dairy texture.",
    price: 90,
    category: "beverage",
    image: "https://images.unsplash.com/photo-1553787499-6f9133860278?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "m19",
    name: "Hot Brewed Coffee",
    description: "Freshly brewed aromatic espresso beaten with hot frothy milk, delivering a satisfying Indian-style coffee experience.",
    price: 70,
    category: "beverage",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "m20",
    name: "Traditional Sweet Lassi",
    description: "Traditional thick, churned sweet yogurt drink flavored with premium cardamom and garnished with fresh malai.",
    price: 65,
    category: "beverage",
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "m21",
    name: "Chilled Namkeen Lassi",
    description: "Salted thick yogurt blend infused with roasted cumin seeds and fresh mint leaves for a digestion-friendly treat.",
    price: 65,
    category: "beverage",
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "m22",
    name: "Special Masala Tea",
    description: "Aromatic Indian Chai prepared with hand-ground ginger, fresh milk, green cardamoms, and select cloves.",
    price: 45,
    category: "beverage",
    image: "https://images.unsplash.com/photo-1563887530-62390fdb6bde?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "m23",
    name: "Special Masala Chaach",
    description: "Cool, refreshing spiced buttermilk churned with fresh coriander leaves, roasted cumin, and black salt.",
    price: 45,
    category: "beverage",
    image: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "m24",
    name: "Tangy Jaljeera Drink",
    description: "Fiery and sour traditional spice water infused with mint, dry mango powder, lemon juice, and crispy salty boondi.",
    price: 45,
    category: "beverage",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "m25",
    name: "Fresh Nimbu Pani",
    description: "Freshly squeezed lemon beverage with balanced salt and sugar, perfect to beat the Borkhera summer heat.",
    price: 45,
    category: "beverage",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "m26",
    name: "Chilled Cold Drink",
    description: "Selection of your favorite carbonated soft drinks, served ice-cold in pristine glassware.",
    price: 45,
    category: "beverage",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "m27",
    name: "Pure Packaged Drinking Water",
    description: "Safe, packaged, mineral-rich drinking water served chilled.",
    price: 25,
    category: "beverage",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "m28",
    name: "Cassata Ice Cream",
    description: "Visual layers of rich strawberry, pistachio, and vanilla ice cream on a thin, moist sponge cake layer, filled with chopped dry fruits.",
    price: 100,
    category: "dessert",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "m29",
    name: "Butter Scotch Ice Cream",
    description: "Delightful caramel-flavored smooth scoop rich with crunchy golden butterscotch praline pieces.",
    price: 100,
    category: "dessert",
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "m30",
    name: "Kesar Pista Ice Cream",
    description: "Exquisite traditional green scoop naturally colored with royal saffron and studded with crunchy roasted pistachios.",
    price: 100,
    category: "dessert",
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "m31",
    name: "American Nut Ice Cream",
    description: "Creamy vanilla-strawberry base packed with mixed fruit gel, roasted almonds, cashews, and rich jelly bits.",
    price: 110,
    category: "dessert",
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "m32",
    name: "Chocolate Ice Cream",
    description: "Decadent, silky smooth sweet scoop crafted with fine cocoa powder and premium dark chocolate flakes.",
    price: 90,
    category: "dessert",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "m33",
    name: "Strawberry Ice Cream",
    description: "Refreshing, sweet pink scoop bursting with natural strawberry fruit purée.",
    price: 90,
    category: "dessert",
    image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "m34",
    name: "Velvety Vanilla Ice Cream",
    description: "An all-time timeless favorite made of real pure vanilla extract, velvety and rich.",
    price: 90,
    category: "dessert",
    image: "https://images.unsplash.com/photo-1570197788417-0e54521c511a?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "m35",
    name: "Hot Gulab Jamun",
    description: "Two soft, warm golden dumplings prepared from condensed milk (khoya), soaked in hot saffron and cardamom sugar syrup.",
    price: 80,
    category: "dessert",
    isPopular: true,
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "m36",
    name: "Sponge Rasgulla",
    description: "Two soft, spongy cottage cheese discs squeezed lightly and soaked in highly light, sweet sugar syrup.",
    price: 80,
    category: "dessert",
    image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "m37",
    name: "Extra Paneer Portion",
    description: "Additional portion of fresh, vacuum-sealed cottage cheese cubes for your main course Indian gravies.",
    price: 110,
    category: "extra",
    image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "m38",
    name: "Extra Chola Cup",
    description: "An extra bowl of our spiced, slow-cooked chickpeas (Chana masala) cooked with rich northern Indian masalas.",
    price: 90,
    category: "extra",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "m39",
    name: "Extra Creamy Dahi",
    description: "A fresh bowl of chilling creamy curd, perfect to neutralize the hot spices of our Mewari specialties.",
    price: 90,
    category: "extra",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "m40",
    name: "Extra Amul Butter",
    description: "Salty premium Amul butter dollop for extra richness on your tandoori rotis, naans, or thali items.",
    price: 45,
    category: "extra",
    image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?q=80&w=600&auto=format&fit=crop",
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
