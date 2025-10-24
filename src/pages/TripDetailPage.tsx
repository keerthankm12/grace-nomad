import { useState } from 'react';
import { TRIPS } from '@/data/trips';
import { ChevronLeft, MapPin, Cloud, Phone, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface TripDetailPageProps {
  tripId: string;
  onBack: () => void;
}

export const TripDetailPage = ({ tripId, onBack }: TripDetailPageProps) => {
  const trip = TRIPS.find(t => t.id === tripId);
  const [showMapModal, setShowMapModal] = useState(false);
  const [showWeatherModal, setShowWeatherModal] = useState(false);

  if (!trip) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-4">Trip not found</p>
          <button onClick={onBack} className="text-blue-600 hover:underline">
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const formatPrice = (amount: number) => `₹ ${amount.toLocaleString('en-IN')}`;

  const mockWeatherForecast = [
    { day: 'Mon', temp: trip.weather, condition: 'Sunny' },
    { day: 'Tue', temp: trip.weather, condition: 'Partly Cloudy' },
    { day: 'Wed', temp: trip.weather, condition: 'Sunny' },
    { day: 'Thu', temp: trip.weather, condition: 'Cloudy' },
    { day: 'Fri', temp: trip.weather, condition: 'Sunny' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white shadow-sm py-4 px-4">
        <div className="container mx-auto">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ChevronLeft size={20} />
            <span>Back to Destinations</span>
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - 75% */}
          <div className="lg:w-3/4 space-y-8">
            {/* Trip Header */}
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">{trip.name}</h1>
              <div className="flex items-center gap-4">
                <span className="text-gray-400 line-through text-lg">{formatPrice(trip.originalPrice)}</span>
                <span className="text-3xl font-bold text-[#EF4444]">{formatPrice(trip.price)}</span>
              </div>
            </div>

            {/* Image Gallery - 4 Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 h-96 rounded-xl overflow-hidden">
                <img src={trip.image} alt={trip.name} className="w-full h-full object-cover" />
              </div>
              <div className="h-48 rounded-xl overflow-hidden bg-gray-200">
                <img src={trip.image} alt={`${trip.name} 2`} className="w-full h-full object-cover opacity-80" />
              </div>
              <div className="h-48 rounded-xl overflow-hidden bg-gray-200">
                <img src={trip.image} alt={`${trip.name} 3`} className="w-full h-full object-cover opacity-80" />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={() => setShowMapModal(true)}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <MapPin size={20} />
                View Map
              </button>
              <button
                onClick={() => setShowWeatherModal(true)}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <Cloud size={20} />
                View Weather
              </button>
            </div>

            {/* Trip Overview */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Trip Overview</h2>
              <p className="text-gray-600 leading-relaxed">{trip.summary}</p>
              <div className="mt-4 flex gap-6 text-sm">
                <div>
                  <span className="text-gray-500">Duration:</span>
                  <span className="ml-2 font-semibold">{trip.days} Days / {trip.nights} Nights</span>
                </div>
                <div>
                  <span className="text-gray-500">Weather:</span>
                  <span className="ml-2 font-semibold">{trip.weather}</span>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Highlights</h2>
              <ul className="grid md:grid-cols-2 gap-3">
                {trip.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#EF4444] mt-1">✓</span>
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Inclusions */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Inclusions</h2>
              <ul className="space-y-2">
                {trip.inclusions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusions */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Exclusions</h2>
              <ul className="space-y-2">
                {trip.exclusions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">✗</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Day-by-Day Itinerary */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Day-by-Day Itinerary</h2>
              <Accordion type="single" collapsible className="w-full">
                {trip.itinerary ? (
                  trip.itinerary.map((day) => (
                    <AccordionItem key={day.day} value={`day-${day.day}`}>
                      <AccordionTrigger className="text-left hover:text-[#EF4444]">
                        <span className="font-semibold">Day {day.day}: {day.title}</span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-600 pl-4">{day.description}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))
                ) : (
                  Array.from({ length: trip.days }).map((_, idx) => (
                    <AccordionItem key={idx} value={`day-${idx + 1}`}>
                      <AccordionTrigger className="text-left hover:text-[#EF4444]">
                        <span className="font-semibold">Day {idx + 1}: {trip.name} Experience</span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-600 pl-4">
                          Exciting activities and sightseeing planned for this day. Contact us for detailed itinerary.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  ))
                )}
              </Accordion>
            </div>
          </div>

          {/* Right Column - 25% Sticky Sidebar */}
          <div className="lg:w-1/4">
            <div className="sticky top-24 space-y-4">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Book This Trip</h3>
                
                <div className="mb-6">
                  <div className="text-sm text-gray-500 mb-1">Starting from</div>
                  <div className="text-3xl font-bold text-[#EF4444]">{formatPrice(trip.price)}</div>
                  <div className="text-sm text-gray-400 line-through">{formatPrice(trip.originalPrice)}</div>
                </div>

                <div className="space-y-3">
                  <button className="w-full bg-[#EF4444] hover:bg-[#DC2626] text-white font-semibold py-3 rounded-lg transition-colors">
                    Book Now
                  </button>
                  
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
                    <Phone size={20} />
                    Call for Enquiry
                  </button>
                  
                  <a
                    href="https://wa.me/919845072277"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={20} />
                    WhatsApp Us
                  </a>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 text-center">
                    Have questions? Our travel experts are here to help!
                  </p>
                  <p className="text-sm font-semibold text-center mt-2">+91 98450 72277</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Modal */}
      <Dialog open={showMapModal} onOpenChange={setShowMapModal}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{trip.name} - Location</DialogTitle>
          </DialogHeader>
          <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="mx-auto mb-4 text-[#EF4444]" />
              <p className="text-gray-600 mb-2">Coordinates: {trip.lat}, {trip.lng}</p>
              <p className="text-sm text-gray-500">Map visualization placeholder</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Weather Modal */}
      <Dialog open={showWeatherModal} onOpenChange={setShowWeatherModal}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>5-Day Weather Forecast</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-5 gap-4 py-4">
            {mockWeatherForecast.map((day, idx) => (
              <div key={idx} className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="font-semibold text-gray-800 mb-2">{day.day}</div>
                <Cloud size={32} className="mx-auto mb-2 text-blue-600" />
                <div className="text-2xl font-bold text-gray-800 mb-1">{day.temp}</div>
                <div className="text-xs text-gray-600">{day.condition}</div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
