import americaTourImg from '@/assets/america-tour.jpg';
import greeceIslandsImg from '@/assets/greece-islands.jpg';
import japanImg from '@/assets/japan.jpg';
import kashmirImg from '@/assets/kashmir.jpg';
import rajasthanImg from '@/assets/rajasthan.jpg';
import andamanImg from '@/assets/andaman.jpg';

export interface Package {
  id: string;
  name: string;
  image: string;
  days: number;
  price: number;
  type: 'international' | 'domestic';
  itinerary: string[];
  inclusions: string[];
}

export const PACKAGES: Package[] = [
  {
    id: 'america-tour',
    name: 'America Tour',
    image: americaTourImg,
    days: 10,
    price: 350000,
    type: 'international',
    itinerary: [
      'Day 1: Arrival in New York - Times Square exploration',
      'Day 2: Statue of Liberty and Ellis Island',
      'Day 3: Flight to Las Vegas - Night city tour',
      'Day 4: Grand Canyon day trip',
      'Day 5: Hoover Dam and Red Rock Canyon',
      'Day 6: Flight to Los Angeles - Hollywood tour',
      'Day 7: Universal Studios',
      'Day 8: Santa Monica and Venice Beach',
      'Day 9: Shopping and leisure',
      'Day 10: Departure',
    ],
    inclusions: [
      'Round-trip international flights',
      'All domestic flights',
      '9 nights accommodation in 4-star hotels',
      'Daily breakfast',
      'All tours and transfers as per itinerary',
      'English-speaking guide',
      'Travel insurance',
    ],
  },
  {
    id: 'greece-islands',
    name: 'Greece & Islands',
    image: greeceIslandsImg,
    days: 8,
    price: 280000,
    type: 'international',
    itinerary: [
      'Day 1: Arrival in Athens - Acropolis tour',
      'Day 2: Athens city exploration',
      'Day 3: Ferry to Santorini',
      'Day 4: Santorini - Oia sunset viewing',
      'Day 5: Santorini wine tour and beaches',
      'Day 6: Ferry to Mykonos',
      'Day 7: Mykonos beach exploration',
      'Day 8: Return to Athens and departure',
    ],
    inclusions: [
      'Round-trip international flights',
      'All ferry transfers',
      '7 nights accommodation',
      'Daily breakfast',
      'Airport and ferry transfers',
      'Guided tours in Athens',
      'Travel insurance',
    ],
  },
  {
    id: 'japan',
    name: 'Japan',
    image: japanImg,
    days: 9,
    price: 320000,
    type: 'international',
    itinerary: [
      'Day 1: Arrival in Tokyo - Shibuya and Harajuku',
      'Day 2: Tokyo - Senso-ji Temple and Akihabara',
      'Day 3: Day trip to Mount Fuji and Lake Kawaguchi',
      'Day 4: Bullet train to Kyoto',
      'Day 5: Kyoto - Fushimi Inari and Golden Pavilion',
      'Day 6: Nara day trip - Deer Park',
      'Day 7: Osaka - Dotonbori and Osaka Castle',
      'Day 8: Shopping and leisure',
      'Day 9: Departure from Osaka',
    ],
    inclusions: [
      'Round-trip international flights',
      'JR Pass for bullet trains',
      '8 nights accommodation',
      'Daily breakfast',
      'All transfers',
      'English-speaking guide',
      'Travel insurance',
    ],
  },
  {
    id: 'kashmir',
    name: 'Kashmir',
    image: kashmirImg,
    days: 6,
    price: 65000,
    type: 'domestic',
    itinerary: [
      'Day 1: Arrival in Srinagar - Shikara ride on Dal Lake',
      'Day 2: Srinagar local sightseeing - Mughal Gardens',
      'Day 3: Srinagar to Gulmarg - Gondola ride',
      'Day 4: Gulmarg to Pahalgam',
      'Day 5: Pahalgam - Betaab Valley exploration',
      'Day 6: Return to Srinagar and departure',
    ],
    inclusions: [
      'Round-trip flights from Delhi/Mumbai',
      '5 nights accommodation including houseboat',
      'Daily breakfast and dinner',
      'All transfers and sightseeing',
      'Gondola tickets',
      'Travel insurance',
    ],
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    image: rajasthanImg,
    days: 7,
    price: 75000,
    type: 'domestic',
    itinerary: [
      'Day 1: Arrival in Jaipur - City Palace',
      'Day 2: Jaipur - Amber Fort and Hawa Mahal',
      'Day 3: Jaipur to Jodhpur - Mehrangarh Fort',
      'Day 4: Jodhpur to Udaipur via Ranakpur',
      'Day 5: Udaipur - City Palace and Lake Pichola',
      'Day 6: Udaipur - Leisure and shopping',
      'Day 7: Departure',
    ],
    inclusions: [
      'All transfers by AC vehicle',
      '6 nights accommodation in heritage hotels',
      'Daily breakfast',
      'All monument entry fees',
      'Boat ride on Lake Pichola',
      'English-speaking guide',
    ],
  },
  {
    id: 'andaman',
    name: 'Andaman Islands',
    image: andamanImg,
    days: 6,
    price: 55000,
    type: 'domestic',
    itinerary: [
      'Day 1: Arrival in Port Blair - Cellular Jail Light & Sound Show',
      'Day 2: Port Blair to Havelock - Radhanagar Beach',
      'Day 3: Havelock - Elephant Beach water sports',
      'Day 4: Havelock to Neil Island - Natural Bridge',
      'Day 5: Neil Island beaches and return to Port Blair',
      'Day 6: Departure',
    ],
    inclusions: [
      'Round-trip flights',
      'All ferry transfers',
      '5 nights accommodation',
      'Daily breakfast',
      'Snorkeling equipment',
      'All transfers',
      'Travel insurance',
    ],
  },
];
