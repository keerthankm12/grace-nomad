import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onTripSelect: (tripId: string) => void;
}

export const Header = ({ currentPage, onNavigate, onTripSelect }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false);

  const internationalTrips = [
    { id: 'ultimate-aussie-kiwi', label: 'Australia & NZ Tour' },
    { id: 'bhutan-happiness', label: 'Bhutan Package' },
    { id: 'greece-charm', label: 'Greece Package' },
  ];

  const domesticTrips = [
    { id: 'mumbai-dreams', label: 'Mumbai Package' },
    { id: 'kerala-backwaters', label: 'Kerala Package' },
    { id: 'rajasthan-royal', label: 'Rajasthan Package' },
  ];

  const handleTripClick = (tripId: string) => {
    onTripSelect(tripId);
    setIsDestinationsOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => onNavigate('home')} className="flex flex-col">
            <span className="text-2xl font-bold text-blue-600">GRACE DESTINY</span>
            <span className="text-xs text-gray-500">Explore the World</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <div 
              className="relative group"
              onMouseEnter={() => setIsDestinationsOpen(true)}
              onMouseLeave={() => setIsDestinationsOpen(false)}
            >
              <button 
                onClick={() => onNavigate('destinations')}
                className={`font-medium hover:text-[#EF4444] transition-colors ${
                  currentPage === 'destinations' ? 'text-[#EF4444] border-b-2 border-[#EF4444]' : 'text-gray-700'
                }`}
              >
                DESTINATIONS
              </button>
              
              {/* Mega Menu */}
              {isDestinationsOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[500px] bg-white shadow-2xl rounded-lg p-6 grid grid-cols-2 gap-6 z-50">
                  <div>
                    <h3 className="text-[#EF4444] font-bold mb-3">International Trips</h3>
                    <ul className="space-y-2">
                      {internationalTrips.map(trip => (
                        <li key={trip.id}>
                          <button
                            onClick={() => handleTripClick(trip.id)}
                            className="text-gray-700 hover:text-[#EF4444] transition-colors text-sm"
                          >
                            {trip.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-[#2563EB] font-bold mb-3">Domestic Trips (India)</h3>
                    <ul className="space-y-2">
                      {domesticTrips.map(trip => (
                        <li key={trip.id}>
                          <button
                            onClick={() => handleTripClick(trip.id)}
                            className="text-gray-700 hover:text-[#2563EB] transition-colors text-sm"
                          >
                            {trip.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <button 
              onClick={() => onNavigate('hotel')}
              className={`font-medium hover:text-[#EF4444] transition-colors ${
                currentPage === 'hotel' ? 'text-[#EF4444] border-b-2 border-[#EF4444]' : 'text-gray-700'
              }`}
            >
              HOTEL
            </button>

            <button 
              onClick={() => onNavigate('flights')}
              className={`font-medium hover:text-[#EF4444] transition-colors ${
                currentPage === 'flights' ? 'text-[#EF4444] border-b-2 border-[#EF4444]' : 'text-gray-700'
              }`}
            >
              FLIGHTS
            </button>

            <button 
              onClick={() => onNavigate('cruise')}
              className={`font-medium hover:text-[#EF4444] transition-colors flex items-center gap-1 ${
                currentPage === 'cruise' ? 'text-[#EF4444] border-b-2 border-[#EF4444]' : 'text-gray-700'
              }`}
            >
              CRUISE <span className="text-yellow-500">★</span>
            </button>

            <button 
              onClick={() => onNavigate('visa')}
              className={`font-medium hover:text-[#EF4444] transition-colors ${
                currentPage === 'visa' ? 'text-[#EF4444] border-b-2 border-[#EF4444]' : 'text-gray-700'
              }`}
            >
              VISA & TRAVEL INSURANCE
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <button 
              onClick={() => { onNavigate('destinations'); setIsMobileMenuOpen(false); }}
              className="block w-full text-left py-2 text-gray-700 hover:text-[#EF4444]"
            >
              DESTINATIONS
            </button>
            <button 
              onClick={() => { onNavigate('hotel'); setIsMobileMenuOpen(false); }}
              className="block w-full text-left py-2 text-gray-700 hover:text-[#EF4444]"
            >
              HOTEL
            </button>
            <button 
              onClick={() => { onNavigate('flights'); setIsMobileMenuOpen(false); }}
              className="block w-full text-left py-2 text-gray-700 hover:text-[#EF4444]"
            >
              FLIGHTS
            </button>
            <button 
              onClick={() => { onNavigate('cruise'); setIsMobileMenuOpen(false); }}
              className="block w-full text-left py-2 text-gray-700 hover:text-[#EF4444]"
            >
              CRUISE ★
            </button>
            <button 
              onClick={() => { onNavigate('visa'); setIsMobileMenuOpen(false); }}
              className="block w-full text-left py-2 text-gray-700 hover:text-[#EF4444]"
            >
              VISA & TRAVEL INSURANCE
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
