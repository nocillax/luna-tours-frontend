// Mock data for the tour agency website

export type Tour = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  duration: string;
  price: number;
  groupSize: string;
  languages: string[];
  tourType: string;
  category: string;
  coverImage: string;
  gallery: string[];
  includedServices: string[];
  excludedServices: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
    image?: string;
  }[];
  locations: string[];
  featured: boolean;
  reviews: {
    id: string;
    name: string;
    rating: number;
    comment: string;
    date: string;
  }[];
};

export type CarouselImage = {
  id: number;
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
};

// Hero carousel images
export const carouselImages: CarouselImage[] = [
  {
    id: 1,
    src: "/images/hero/tokyo-gate.jpg",
    alt: "Visit Tokyo",
    title: "VISIT TOKYO",
    subtitle:
      "Experience the blend of tradition and modern innovation in Japan's vibrant capital.",
    buttonText: "Explore Tokyo",
    buttonLink: "/tours/tokyo-explorer",
  },
  {
    id: 2,
    src: "/images/hero/kyoto-temple.jpg",
    alt: "Discover Kyoto",
    title: "DISCOVER KYOTO",
    subtitle:
      "Immerse yourself in the cultural heart of Japan with ancient temples and serene gardens.",
    buttonText: "Explore Kyoto",
    buttonLink: "/tours/kyoto-cultural-journey",
  },
  {
    id: 3,
    src: "/images/hero/mount-fuji.jpg",
    alt: "Mount Fuji",
    title: "MOUNT FUJI",
    subtitle:
      "Witness the majestic beauty of Japan's most iconic natural landmark.",
    buttonText: "Explore Mount Fuji",
    buttonLink: "/tours/mount-fuji-adventure",
  },
];

// Tour categories
export const tourCategories = [
  "Cultural Tours",
  "Adventure Tours",
  "City Exploration",
  "Natural Wonders",
  "Historical Sites",
  "Food & Cuisine",
];

// Tour data
export const toursData: Tour[] = [
  {
    id: "1",
    slug: "tokyo-explorer",
    title: "Tokyo Explorer",
    shortDescription:
      "Discover the vibrant metropolis of Tokyo over 5 unforgettable days.",
    description:
      "Immerse yourself in the captivating blend of tradition and innovation that defines Tokyo. From ancient temples to futuristic skyscrapers, this 5-day tour takes you through the heart of Japan's dynamic capital. Experience the city's rich cultural heritage, indulge in delicious cuisine, and explore bustling neighborhoods that showcase the many faces of Tokyo.",
    duration: "5 days, 4 nights",
    price: 1200,
    groupSize: "2-15 people",
    languages: ["English", "Japanese"],
    tourType: "City Tour",
    category: "City Exploration",
    coverImage: "/images/tours/tokyo-skyline.jpg",
    gallery: [
      "/images/tours/tokyo-temple.jpg",
      "/images/tours/tokyo-street.jpg",
      "/images/tours/tokyo-tower.jpg",
      "/images/tours/tokyo-garden.jpg",
    ],
    includedServices: [
      "4 nights accommodation",
      "Daily breakfast",
      "Airport transfers",
      "English-speaking guide",
      "Entrance fees to attractions",
      "Welcome dinner",
    ],
    excludedServices: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Optional activities",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Welcome",
        description:
          "Arrive at Narita or Haneda Airport, transfer to your hotel, and enjoy a welcome dinner.",
        image: "/images/tours/tokyo-day1.jpg",
      },
      {
        day: 2,
        title: "Traditional Tokyo",
        description:
          "Visit Asakusa's Senso-ji Temple, the Tokyo National Museum, and the Imperial Palace Gardens.",
        image: "/images/tours/tokyo-day2.jpg",
      },
      {
        day: 3,
        title: "Modern Tokyo",
        description:
          "Explore Shibuya Crossing, Harajuku's trendy shops, and the panoramic views from Tokyo Skytree.",
        image: "/images/tours/tokyo-day3.jpg",
      },
      {
        day: 4,
        title: "Cultural Immersion",
        description:
          "Participate in a traditional tea ceremony, visit Meiji Shrine, and explore Akihabara.",
        image: "/images/tours/tokyo-day4.jpg",
      },
      {
        day: 5,
        title: "Departure",
        description:
          "Free time for shopping or optional activities before your airport transfer.",
        image: "/images/tours/tokyo-day5.jpg",
      },
    ],
    locations: ["Shibuya", "Asakusa", "Shinjuku", "Harajuku", "Akihabara"],
    featured: true,
    reviews: [
      {
        id: "101",
        name: "Sarah Johnson",
        rating: 5,
        comment:
          "Amazing experience! Our guide was knowledgeable and the itinerary was perfect.",
        date: "2025-05-15",
      },
      {
        id: "102",
        name: "Michael Chen",
        rating: 4,
        comment:
          "Great tour with a good mix of traditional and modern Tokyo experiences.",
        date: "2025-04-22",
      },
    ],
  },
  {
    id: "2",
    slug: "kyoto-cultural-journey",
    title: "Kyoto Cultural Journey",
    shortDescription:
      "Experience the ancient cultural heart of Japan in historic Kyoto.",
    description:
      "Step back in time and discover Japan's cultural soul in the ancient capital of Kyoto. This immersive 4-day tour takes you through centuries-old temples, tranquil gardens, and traditional neighborhoods. Witness the living traditions of geisha culture, participate in authentic cultural activities, and explore UNESCO World Heritage sites that showcase Japan's rich historical heritage.",
    duration: "4 days, 3 nights",
    price: 950,
    groupSize: "2-12 people",
    languages: ["English", "Japanese"],
    tourType: "Cultural Tour",
    category: "Cultural Tours",
    coverImage: "/images/tours/kyoto-main.jpg",
    gallery: [
      "/images/tours/kyoto-temple.jpg",
      "/images/tours/kyoto-garden.jpg",
      "/images/tours/kyoto-geisha.jpg",
      "/images/tours/kyoto-bamboo.jpg",
    ],
    includedServices: [
      "3 nights traditional ryokan accommodation",
      "Daily breakfast and one traditional dinner",
      "Train tickets from/to Tokyo",
      "English-speaking guide",
      "Cultural activities",
      "Entrance fees",
    ],
    excludedServices: [
      "Flights to/from Japan",
      "Travel insurance",
      "Personal expenses",
      "Most lunches and dinners",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Kyoto",
        description:
          "Arrive in Kyoto, check into your ryokan, and enjoy an evening orientation walk.",
        image: "/images/tours/kyoto-day1.jpg",
      },
      {
        day: 2,
        title: "Eastern Kyoto Temples",
        description:
          "Visit Kiyomizu-dera Temple, Sanjusangendo Hall, and explore Gion district.",
        image: "/images/tours/kyoto-day2.jpg",
      },
      {
        day: 3,
        title: "Golden Pavilion & Zen Gardens",
        description:
          "Explore Kinkaku-ji (Golden Pavilion), Ryoan-ji Zen garden, and Arashiyama Bamboo Grove.",
        image: "/images/tours/kyoto-day3.jpg",
      },
      {
        day: 4,
        title: "Fushimi Inari & Departure",
        description: "Morning visit to Fushimi Inari Shrine before departure.",
        image: "/images/tours/kyoto-day4.jpg",
      },
    ],
    locations: ["Gion", "Arashiyama", "Higashiyama", "Fushimi"],
    featured: true,
    reviews: [
      {
        id: "201",
        name: "David Wilson",
        rating: 5,
        comment:
          "The ryokan stay was incredible and the temples were breathtaking.",
        date: "2025-03-10",
      },
      {
        id: "202",
        name: "Emma Tanaka",
        rating: 5,
        comment:
          "Seeing Kyoto with a knowledgeable guide made all the difference.",
        date: "2025-02-28",
      },
    ],
  },
  {
    id: "3",
    slug: "mount-fuji-adventure",
    title: "Mount Fuji Adventure",
    shortDescription:
      "Experience the majesty of Japan's iconic mountain on this outdoor adventure.",
    description:
      "Witness the breathtaking beauty of Mount Fuji up close on this 3-day adventure tour. Explore the scenic Fuji Five Lakes region, hike through lush forests, and experience stunning views of Japan's most famous natural landmark. This tour combines outdoor activities with relaxing hot spring experiences for the perfect balance of adventure and rejuvenation.",
    duration: "3 days, 2 nights",
    price: 750,
    groupSize: "4-10 people",
    languages: ["English", "Japanese"],
    tourType: "Adventure Tour",
    category: "Natural Wonders",
    coverImage: "/images/tours/fuji-main.jpg",
    gallery: [
      "/images/tours/fuji-lake.jpg",
      "/images/tours/fuji-hiking.jpg",
      "/images/tours/fuji-view.jpg",
      "/images/tours/fuji-onsen.jpg",
    ],
    includedServices: [
      "2 nights accommodation",
      "All meals",
      "Transportation from/to Tokyo",
      "Guided hikes",
      "Hot spring entry",
      "Equipment rental",
    ],
    excludedServices: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Alcoholic beverages",
    ],
    itinerary: [
      {
        day: 1,
        title: "Tokyo to Fuji Five Lakes",
        description:
          "Travel from Tokyo to Lake Kawaguchi, visit Chureito Pagoda for iconic Mt. Fuji views.",
        image: "/images/tours/fuji-day1.jpg",
      },
      {
        day: 2,
        title: "Hiking Day",
        description:
          "Guided hike in the Aokigahara Forest and along the shores of Lake Saiko.",
        image: "/images/tours/fuji-day2.jpg",
      },
      {
        day: 3,
        title: "Hot Springs & Return",
        description:
          "Morning hot spring experience, visit to Oshino Hakkai springs, and return to Tokyo.",
        image: "/images/tours/fuji-day3.jpg",
      },
    ],
    locations: [
      "Lake Kawaguchi",
      "Aokigahara Forest",
      "Oshino Hakkai",
      "Lake Saiko",
    ],
    featured: true,
    reviews: [
      {
        id: "301",
        name: "Robert Brown",
        rating: 4,
        comment:
          "The views were incredible! The hiking was moderate but very rewarding.",
        date: "2025-06-05",
      },
      {
        id: "302",
        name: "Yuki Sato",
        rating: 5,
        comment:
          "Perfect balance of activity and relaxation. The onsen after hiking was heaven!",
        date: "2025-05-20",
      },
    ],
  },
];
