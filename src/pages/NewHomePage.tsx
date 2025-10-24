import { useState, useEffect } from 'react';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { TRIPS, Trip } from '@/data/trips';
import { TripCard } from '@/components/TripCard';

interface NewHomePageProps {
  onTripSelect: (tripId: string) => void;
}

export const NewHomePage = ({ onTripSelect }: NewHomePageProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Trip[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [popularIndex, setPopularIndex] = useState(0);
  const [dealsIndex, setDealsIndex] = useState(0);
  const [mustVisitIndex, setMustVisitIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Featured trips for sections
  const mustVisitTrips = [
    TRIPS.find(t => t.id === 'australia-style'),
    TRIPS.find(t => t.id === 'greece-charm'),
    TRIPS.find(t => t.id === 'nepal-serenity'),
  ].filter(Boolean) as Trip[];

  const popularTrips = [
    TRIPS.find(t => t.id === 'ultimate-aussie-kiwi'),
    TRIPS.find(t => t.id === 'bhutan-happiness'),
    TRIPS.find(t => t.id === 'rajasthan-royal'),
  ].filter(Boolean) as Trip[];

  const lastMinuteDeals = [
    TRIPS.find(t => t.id === 'thailand-flash'),
    TRIPS.find(t => t.id === 'mumbai-dreams'),
    TRIPS.find(t => t.id === 'kerala-backwaters'),
  ].filter(Boolean) as Trip[];

  const testimonials = [
    {
      quote: "Booking my solo trip to Southeast Asia felt daunting, but the Grace Destiny team handled everything. The itinerary was incredible, and I felt supported the entire time. A fantastic experience from start to finish! 10/10.",
      name: "Priya K., Bengaluru"
    },
    {
      quote: "Grace Destiny is in a league of its own! I've traveled with many agencies, but their team's personal touch and exceptional service made my trip unforgettable. The best-rated for a reason!",
      name: "Anita S., Delhi"
    }
  ];

  // Auto-scroll for must-visit carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setMustVisitIndex((prev) => (prev + 1) % mustVisitTrips.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [mustVisitTrips.length]);

  // Auto-cycle testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const results = TRIPS.filter(trip =>
        trip.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        trip.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results);
      setIsSearching(true);
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setIsSearching(false);
  };

  const scrollCarousel = (direction: 'left' | 'right', type: 'popular' | 'deals') => {
    if (type === 'popular') {
      setPopularIndex(prev => 
        direction === 'left' 
          ? Math.max(0, prev - 1)
          : Math.min(popularTrips.length - 1, prev + 1)
      );
    } else {
      setDealsIndex(prev => 
        direction === 'left' 
          ? Math.max(0, prev - 1)
          : Math.min(lastMinuteDeals.length - 1, prev + 1)
      );
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">Find The Perfect Vacation</h1>
          
          <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search destinations, tours, or packages..."
              className="w-full px-6 py-4 pr-14 rounded-full text-gray-800 text-lg focus:outline-none focus:ring-4 focus:ring-white/50"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#EF4444] hover:bg-[#DC2626] text-white p-3 rounded-full transition-colors"
            >
              <Search size={24} />
            </button>
          </form>
        </div>
      </section>

      {/* Search Results or Content Sections */}
      {isSearching ? (
        <section className="py-16 px-4 bg-blue-50">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800">Search Results</h2>
              <button onClick={clearSearch} className="text-blue-600 hover:text-blue-700 underline">
                Clear Search
              </button>
            </div>
            
            {searchResults.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults.map((trip) => (
                  <TripCard
                    key={trip.id}
                    name={trip.name}
                    image={trip.image}
                    days={trip.days}
                    price={trip.price}
                    originalPrice={trip.originalPrice}
                    weather={trip.weather}
                    onViewTrip={() => onTripSelect(trip.id)}
                  />
                ))}
              </div>
            ) : (
              <p className="text-gray-600 text-center py-12">No trips found matching your search.</p>
            )}
          </div>
        </section>
      ) : (
        <>
          {/* Must-Visit Destinations - Auto-scrolling */}
          <section className="py-16 px-4 bg-blue-50">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">MUST-VISIT DESTINATIONS</h2>
              <p className="text-center text-gray-600 mb-8">Adventure Starts Here: Discover the world's most breathtaking locations.</p>
              
              <div className="relative overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out gap-6"
                  style={{ transform: `translateX(-${mustVisitIndex * 33.33}%)` }}
                >
                  {[...mustVisitTrips, ...mustVisitTrips].map((trip, idx) => (
                    <div key={`${trip.id}-${idx}`} className="min-w-[calc(33.33%-1rem)] flex-shrink-0">
                      <TripCard
                        name={trip.name}
                        image={trip.image}
                        days={trip.days}
                        price={trip.price}
                        originalPrice={trip.originalPrice}
                        weather={trip.weather}
                        onViewTrip={() => onTripSelect(trip.id)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Bucket-List Approved Trips - Manual Controls */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">BUCKET-LIST APPROVED TRIPS</h2>
              <p className="text-center text-gray-600 mb-8">Go Big, Go Bold, Go You. Explore the moments that matter with our most popular choices.</p>
              
              <div className="relative">
                <button
                  onClick={() => scrollCarousel('left', 'popular')}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all disabled:opacity-50"
                  disabled={popularIndex === 0}
                >
                  <ChevronLeft size={24} />
                </button>
                
                <div className="overflow-hidden">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out gap-6"
                    style={{ transform: `translateX(-${popularIndex * 33.33}%)` }}
                  >
                    {popularTrips.map((trip) => (
                      <div key={trip.id} className="min-w-[calc(33.33%-1rem)] flex-shrink-0">
                        <TripCard
                          name={trip.name}
                          image={trip.image}
                          days={trip.days}
                          price={trip.price}
                          originalPrice={trip.originalPrice}
                          weather={trip.weather}
                          onViewTrip={() => onTripSelect(trip.id)}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => scrollCarousel('right', 'popular')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all disabled:opacity-50"
                  disabled={popularIndex === popularTrips.length - 1}
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </section>

          {/* Last Minute Deals - Manual Controls */}
          <section className="py-16 px-4 bg-blue-50">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">LAST MINUTE DEALS</h2>
              <p className="text-center text-gray-600 mb-8">Don't miss out! Flex your style and book these hidden gems before they're gone.</p>
              
              <div className="relative">
                <button
                  onClick={() => scrollCarousel('left', 'deals')}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all disabled:opacity-50"
                  disabled={dealsIndex === 0}
                >
                  <ChevronLeft size={24} />
                </button>
                
                <div className="overflow-hidden">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out gap-6"
                    style={{ transform: `translateX(-${dealsIndex * 33.33}%)` }}
                  >
                    {lastMinuteDeals.map((trip) => (
                      <div key={trip.id} className="min-w-[calc(33.33%-1rem)] flex-shrink-0">
                        <TripCard
                          name={trip.name}
                          image={trip.image}
                          days={trip.days}
                          price={trip.price}
                          originalPrice={trip.originalPrice}
                          weather={trip.weather}
                          onViewTrip={() => onTripSelect(trip.id)}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => scrollCarousel('right', 'deals')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all disabled:opacity-50"
                  disabled={dealsIndex === lastMinuteDeals.length - 1}
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </section>

          {/* Customer Reviews */}
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">CUSTOMER REVIEWS</h2>
              <p className="text-center text-gray-600 mb-12">Hear what our global community is saying about their journey.</p>
              
              <div className="relative bg-blue-50 rounded-2xl p-12 shadow-lg transition-opacity duration-500">
                <p className="text-xl text-gray-700 italic mb-6 leading-relaxed">
                  "{testimonials[testimonialIndex].quote}"
                </p>
                <p className="text-right text-gray-800 font-semibold">
                  — {testimonials[testimonialIndex].name}
                </p>
                
                {/* Dots indicator */}
                <div className="flex justify-center gap-2 mt-8">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setTestimonialIndex(idx)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        idx === testimonialIndex ? 'bg-[#EF4444] w-8' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};
