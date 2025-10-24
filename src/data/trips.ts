import australiaNzImg from '@/assets/australia-nz-tour.jpg';
import australiaImg from '@/assets/australia-style.jpg';
import bhutanImg from '@/assets/bhutan.jpg';
import greeceImg from '@/assets/greece.jpg';
import nepalImg from '@/assets/nepal.jpg';
import thailandImg from '@/assets/thailand.jpg';
import mumbaiImg from '@/assets/mumbai.jpg';
import keralaImg from '@/assets/kerala.jpg';
import rajasthanImg from '@/assets/rajasthan-tour.jpg';

export interface Trip {
  id: string;
  name: string;
  image: string;
  category: 'international' | 'domestic';
  days: number;
  nights: number;
  price: number;
  originalPrice: number;
  weather: string;
  lat: number;
  lng: number;
  summary: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary?: { day: number; title: string; description: string }[];
}

export const TRIPS: Trip[] = [
  {
    id: 'ultimate-aussie-kiwi',
    name: 'Ultimate Aussie Kiwi Tour',
    image: australiaNzImg,
    category: 'international',
    days: 19,
    nights: 18,
    price: 595000,
    originalPrice: 649090,
    weather: '24°C',
    lat: -33.8688,
    lng: 151.2093,
    summary: 'Discover the ultimate Australia and New Zealand tour package, a 19-day journey combining vibrant cities, natural wonders, and once-in-a-lifetime experiences into one unforgettable holiday. This meticulously planned trip covers Sydney\'s icons, the Great Barrier Reef, and New Zealand\'s stunning fjords and adventure capital, Queenstown.',
    highlights: ['Great Barrier Reef Dive', 'Sydney Opera House', 'Queenstown Adventure', 'Hobbiton Movie Set'],
    inclusions: ['Round-trip Flights', '18 Nights Premium Accommodation', 'All Inter-city Transfers', 'Daily Breakfast & Dinner', 'Visa Processing Assistance'],
    exclusions: ['Lunch', 'Optional Activities/Tours', 'Personal Expenses', 'Travel Insurance'],
    itinerary: [
      { day: 1, title: 'Arrival in Sydney', description: 'Welcome to Sydney! Check into your hotel and enjoy a welcome dinner.' },
      { day: 2, title: 'Sydney City Tour', description: 'Visit the Opera House, Harbour Bridge, and Bondi Beach.' },
      { day: 3, title: 'Blue Mountains', description: 'Day trip to the stunning Blue Mountains National Park.' },
      { day: 4, title: 'Great Barrier Reef', description: 'Fly to Cairns and explore the reef with snorkeling and diving.' },
      { day: 5, title: 'Daintree Rainforest', description: 'Discover the ancient rainforest and wildlife.' },
      { day: 6, title: 'Flight to Auckland', description: 'Arrive in New Zealand and explore the city.' },
      { day: 7, title: 'Rotorua Geothermal Wonders', description: 'Experience geysers and Maori culture.' },
      { day: 8, title: 'Hobbiton Movie Set', description: 'Visit the famous Lord of the Rings filming location.' },
      { day: 9, title: 'Wellington', description: 'Explore New Zealand\'s capital city.' },
      { day: 10, title: 'Queenstown Arrival', description: 'Arrive in the adventure capital.' },
      { day: 11-18, title: 'Queenstown Adventures', description: 'Bungee jumping, skiing, Milford Sound cruise, and more.' },
      { day: 19, title: 'Departure', description: 'Fly back home with unforgettable memories.' },
    ]
  },
  {
    id: 'australia-style',
    name: 'Australia in Style',
    image: australiaImg,
    category: 'international',
    days: 10,
    nights: 9,
    price: 180000,
    originalPrice: 196364,
    weather: '24°C',
    lat: -33.8688,
    lng: 151.2093,
    summary: 'Embark on a 10-day Australia tour combining city highlights, natural wonders, and luxury experiences across Sydney, Cairns, and Melbourne. Perfect for first-time visitors seeking iconic Australian landmarks.',
    highlights: ['Sydney Harbour Cruise', 'Great Barrier Reef', 'Gold Coast Theme Parks', 'Great Ocean Road'],
    inclusions: ['Round-trip Flights', '9 Nights Accommodation', 'Daily Breakfast', 'Selected Tours', 'Airport Transfers'],
    exclusions: ['Lunch & Dinner', 'Optional Activities', 'Personal Expenses', 'Travel Insurance'],
  },
  {
    id: 'bhutan-happiness',
    name: 'Bhutan - Land of Happiness',
    image: bhutanImg,
    category: 'international',
    days: 5,
    nights: 4,
    price: 40000,
    originalPrice: 43636,
    weather: '13°C',
    lat: 27.4712,
    lng: 89.6419,
    summary: 'Explore the serene beauty and highly cultured life of the Land of Thunder Dragon. This 5-day tour covers the spiritual heart of Bhutan, including the iconic Tiger\'s Nest Monastery and the majestic Punakha Dzong.',
    highlights: ['Tiger\'s Nest Monastery Hike', 'Punakha Dzong', 'Dochula Pass Views', 'Tashichho Dzong'],
    inclusions: ['Round-trip Flights', '4 Nights Accommodation', 'All Meals', 'Guided Tours', 'Bhutan Visa'],
    exclusions: ['Optional Activities', 'Personal Expenses', 'Tips'],
  },
  {
    id: 'greece-charm',
    name: 'Charm of Greece',
    image: greeceImg,
    category: 'international',
    days: 5,
    nights: 4,
    price: 86000,
    originalPrice: 93818,
    weather: '19°C',
    lat: 37.9838,
    lng: 23.7275,
    summary: 'This 5-day Greek adventure gives you a taste of the country\'s highlights, from the ancient landmarks of Athens to the stunning blue-and-white landscapes of Mykonos and Santorini islands. Experience history, sun, and iconic sunsets.',
    highlights: ['Acropolis & Parthenon', 'Santorini Sunset', 'Mykonos Windmills', 'Inter-island Ferries'],
    inclusions: ['Round-trip Flights', '4 Nights Accommodation', 'Daily Breakfast', 'Ferry Transfers', 'Guided Athens Tour'],
    exclusions: ['Lunch & Dinner', 'Optional Tours', 'Personal Expenses'],
  },
  {
    id: 'nepal-serenity',
    name: 'Nepal Serenity',
    image: nepalImg,
    category: 'international',
    days: 4,
    nights: 3,
    price: 15000,
    originalPrice: 16364,
    weather: '18°C',
    lat: 27.7172,
    lng: 85.3240,
    summary: 'A blissful 4-day journey into the natural beauty and rich culture of Nepal. Visit the ancient landmarks of Kathmandu and enjoy the breathtaking Himalayan sunrises from Pokhara.',
    highlights: ['Kathmandu Pashupatinath Temple', 'Pokhara Sunrise View', 'Swayambhunath Stupa (Monkey Temple)', 'Phewa Lake'],
    inclusions: ['Round-trip Flights', '3 Nights Accommodation', 'Daily Breakfast', 'Guided Tours', 'Airport Transfers'],
    exclusions: ['Lunch & Dinner', 'Optional Activities', 'Nepal Visa Fee'],
  },
  {
    id: 'thailand-flash',
    name: 'Thailand Flash Deal',
    image: thailandImg,
    category: 'international',
    days: 5,
    nights: 4,
    price: 45000,
    originalPrice: 52000,
    weather: '30°C',
    lat: 13.7563,
    lng: 100.5018,
    summary: 'A fast-paced 5-day package covering the best of Thailand! Experience the bustling streets of Bangkok and the beautiful beaches and nightlife of Phuket.',
    highlights: ['Bangkok Temples (Wat Arun)', 'Floating Market Tour', 'Phuket Beaches & Nightlife', 'Phi Phi Islands Day Trip'],
    inclusions: ['Round-trip Flights', '4 Nights Accommodation', 'Daily Breakfast', 'Selected Tours', 'Airport Transfers'],
    exclusions: ['Lunch & Dinner', 'Optional Activities', 'Personal Expenses'],
  },
  {
    id: 'mumbai-dreams',
    name: 'Mumbai Dreams Package',
    image: mumbaiImg,
    category: 'domestic',
    days: 4,
    nights: 3,
    price: 25000,
    originalPrice: 28000,
    weather: '32°C',
    lat: 19.0760,
    lng: 72.8777,
    summary: 'Experience the vibrant energy of Mumbai, the City of Lights and Bollywood. This short trip covers major cultural and historic landmarks of India\'s financial hub, from grand colonial structures to the bustling street life.',
    highlights: ['Gateway of India', 'Marine Drive', 'Bollywood Studio Visit', 'Dabbawala System'],
    inclusions: ['Round-trip Flights', '3 Nights Accommodation', 'Daily Breakfast', 'City Tours', 'Airport Transfers'],
    exclusions: ['Lunch & Dinner', 'Optional Activities', 'Personal Expenses'],
  },
  {
    id: 'kerala-backwaters',
    name: 'Kerala Backwaters Retreat',
    image: keralaImg,
    category: 'domestic',
    days: 7,
    nights: 6,
    price: 40000,
    originalPrice: 45000,
    weather: '28°C',
    lat: 9.9312,
    lng: 76.2673,
    summary: 'Explore \'God\'s Own Country\' with this relaxing tour. Glide through the tranquil backwaters, experience Ayurvedic treatments, and enjoy the lush greenery of Kerala, covering Kochi, Munnar, and Alleppey.',
    highlights: ['Backwater Houseboat Stay', 'Munnar Tea Gardens', 'Kochi Fort & Heritage', 'Ayurveda Massage (Optional)'],
    inclusions: ['Round-trip Flights', '6 Nights Accommodation', 'Daily Breakfast & Dinner', 'Houseboat Stay', 'All Transfers'],
    exclusions: ['Lunch', 'Optional Ayurveda Treatments', 'Personal Expenses'],
  },
  {
    id: 'rajasthan-royal',
    name: 'Royal Rajasthan Tour',
    image: rajasthanImg,
    category: 'domestic',
    days: 6,
    nights: 5,
    price: 55000,
    originalPrice: 60000,
    weather: '34°C',
    lat: 26.9124,
    lng: 75.7873,
    summary: 'Step into a world of royalty with this tour of Rajasthan. Discover majestic palaces, ancient forts, and vibrant bazaars in the desert state, covering the Pink, Blue, and Lake cities: Jaipur, Jodhpur, and Udaipur.',
    highlights: ['Amer Fort Elephant Ride', 'Jaipur Pink City', 'Udaipur Lake Palace View', 'Mehrangarh Fort'],
    inclusions: ['All Transfers by AC Vehicle', '5 Nights Heritage Hotels', 'Daily Breakfast', 'Monument Entry Fees', 'Guided Tours'],
    exclusions: ['Lunch & Dinner', 'Optional Activities', 'Personal Expenses'],
  },
];
