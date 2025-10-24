import { useState } from 'react';
import { TRIPS, Trip } from '@/data/trips';
import { TripCard } from '@/components/TripCard';

interface NewDestinationsPageProps {
  onTripSelect: (tripId: string) => void;
}

export const NewDestinationsPage = ({ onTripSelect }: NewDestinationsPageProps) => {
  const [activeCategory, setActiveCategory] = useState<'international' | 'domestic'>('international');
  const [daysFilter, setDaysFilter] = useState<string>('all');
  const [budgetFilter, setBudgetFilter] = useState<string>('all');
  const [regionFilter, setRegionFilter] = useState<string>('all');

  // Filter trips
  let filteredTrips = TRIPS.filter(trip => trip.category === activeCategory);

  // Apply days filter
  if (daysFilter !== 'all') {
    const [min, max] = daysFilter.split('-').map(Number);
    filteredTrips = filteredTrips.filter(trip => {
      if (max) return trip.days >= min && trip.days <= max;
      return trip.days >= min;
    });
  }

  // Apply budget filter
  if (budgetFilter !== 'all') {
    const [min, max] = budgetFilter.split('-').map(Number);
    filteredTrips = filteredTrips.filter(trip => {
      if (max) return trip.price >= min && trip.price <= max;
      return trip.price >= min;
    });
  }

  // Apply region filter (simple text match)
  if (regionFilter !== 'all') {
    filteredTrips = filteredTrips.filter(trip => 
      trip.name.toLowerCase().includes(regionFilter.toLowerCase())
    );
  }

  // Limit to 3 cards
  const displayedTrips = filteredTrips.slice(0, 3);

  return (
    <div className="min-h-screen bg-blue-50 py-12 px-4">
      <div className="container mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Explore Destinations</h1>

        {/* Main Category Filters */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveCategory('international')}
            className={`px-8 py-3 rounded-lg font-semibold transition-all ${
              activeCategory === 'international'
                ? 'bg-[#EF4444] text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            International Trips
          </button>
          <button
            onClick={() => setActiveCategory('domestic')}
            className={`px-8 py-3 rounded-lg font-semibold transition-all ${
              activeCategory === 'domestic'
                ? 'bg-[#2563EB] text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Domestic Trips (India)
          </button>
        </div>

        {/* Dropdown Filters */}
        <div className="grid md:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
          {/* Days Filter */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Duration (Days)</label>
            <select
              value={daysFilter}
              onChange={(e) => setDaysFilter(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 z-20 relative"
            >
              <option value="all">All Durations</option>
              <option value="1-5">1-5 Days</option>
              <option value="6-10">6-10 Days</option>
              <option value="11-20">11-20 Days</option>
            </select>
          </div>

          {/* Budget Filter */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Budget (₹)</label>
            <select
              value={budgetFilter}
              onChange={(e) => setBudgetFilter(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 z-20 relative"
            >
              <option value="all">All Budgets</option>
              <option value="0-50000">Under ₹50,000</option>
              <option value="50000-100000">₹50,000 - ₹1,00,000</option>
              <option value="100000-300000">₹1,00,000 - ₹3,00,000</option>
              <option value="300000">Above ₹3,00,000</option>
            </select>
          </div>

          {/* Region Filter */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Region</label>
            <select
              value={regionFilter}
              onChange={(e) => setRegionFilter(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 z-20 relative"
            >
              <option value="all">All Regions</option>
              {activeCategory === 'international' ? (
                <>
                  <option value="australia">Australia/NZ</option>
                  <option value="asia">Asia</option>
                  <option value="europe">Europe</option>
                </>
              ) : (
                <>
                  <option value="north">North India</option>
                  <option value="south">South India</option>
                  <option value="west">West India</option>
                </>
              )}
            </select>
          </div>
        </div>

        {/* Results */}
        {displayedTrips.length > 0 ? (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {displayedTrips.map((trip) => (
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
            
            {filteredTrips.length > 3 && (
              <p className="text-center text-gray-600">
                Showing 3 of {filteredTrips.length} trips. Adjust filters to see more.
              </p>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No trips match your filters. Try adjusting your selection.</p>
          </div>
        )}
      </div>
    </div>
  );
};
