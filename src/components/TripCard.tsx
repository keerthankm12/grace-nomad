import { MapPin, Cloud } from 'lucide-react';

interface TripCardProps {
  name: string;
  image: string;
  days: number;
  price: number;
  originalPrice: number;
  weather: string;
  onViewTrip: () => void;
}

export const TripCard = ({ name, image, days, price, originalPrice, weather, onViewTrip }: TripCardProps) => {
  const formatPrice = (amount: number) => `₹ ${amount.toLocaleString('en-IN')}`;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
          {days} Days
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-3">{name}</h3>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-gray-600">
            <Cloud size={18} />
            <span className="text-sm">{weather}</span>
          </div>
          <button className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm">
            <MapPin size={18} />
            <span>Map</span>
          </button>
        </div>

        <div className="mb-4">
          <div className="flex items-center gap-2">
            <span className="text-gray-400 line-through text-sm">{formatPrice(originalPrice)}</span>
            <span className="text-2xl font-bold text-[#EF4444]">{formatPrice(price)}</span>
          </div>
        </div>

        <button
          onClick={onViewTrip}
          className="w-full bg-[#EF4444] hover:bg-[#DC2626] text-white font-semibold py-3 rounded-lg transition-colors duration-300"
        >
          View Trip
        </button>
      </div>
    </div>
  );
};
