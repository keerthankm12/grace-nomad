import { useState, useEffect } from 'react';
import { PackageCard } from '@/components/PackageCard';
import { PACKAGES, Package } from '@/data/packages';
import { Input } from '@/components/ui/input';
import { Search, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface HomePageProps {
  onViewPackage: (id: string) => void;
}

export const HomePage = ({ onViewPackage }: HomePageProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [displayText, setDisplayText] = useState('');
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const fullText = 'Your Destiny, Our Journey';

  // Typewriter effect
  useEffect(() => {
    if (displayText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [displayText]);

  const filteredPackages = PACKAGES.filter((pkg) =>
    pkg.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const popularPackages = [PACKAGES[0], PACKAGES[3], PACKAGES[1]];
  const internationalPackages = PACKAGES.filter((p) => p.type === 'international').slice(0, 3);
  const domesticPackages = PACKAGES.filter((p) => p.type === 'domestic');

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Mumbai',
      text: 'Amazing experience! Grace Destiny made our Japan trip unforgettable. Every detail was perfectly planned.',
      rating: 5,
    },
    {
      name: 'Rajesh Kumar',
      location: 'Delhi',
      text: 'The Kashmir package was breathtaking. Professional service and great value for money.',
      rating: 5,
    },
    {
      name: 'Anita Desai',
      location: 'Bangalore',
      text: 'Our Greece vacation was a dream come true. Highly recommend Grace Destiny for international trips!',
      rating: 5,
    },
    {
      name: 'Vikram Singh',
      location: 'Pune',
      text: 'Excellent service from start to finish. The Rajasthan heritage tour was spectacular.',
      rating: 5,
    },
  ];

  const scrollTestimonials = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setTestimonialIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    } else {
      setTestimonialIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/20 via-background to-secondary/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 min-h-[4rem]">
              {displayText}
              <span className="animate-pulse">|</span>
            </h1>
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search your destinations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 text-lg rounded-2xl shadow-xl border-2 border-primary/20 focus:border-primary"
              />
            </div>
          </div>

          {/* Search Results */}
          {searchQuery && (
            <div className="mt-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Search Results</h2>
              {filteredPackages.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {filteredPackages.map((pkg) => (
                    <PackageCard key={pkg.id} {...pkg} onViewPackage={onViewPackage} />
                  ))}
                </div>
              ) : (
                <p className="text-center text-muted-foreground text-lg">
                  No destinations found matching your search.
                </p>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Popular Packages */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">Popular Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {popularPackages.map((pkg) => (
            <PackageCard key={pkg.id} {...pkg} onViewPackage={onViewPackage} />
          ))}
        </div>
      </section>

      {/* Featured International */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Featured International Destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {internationalPackages.map((pkg) => (
              <PackageCard key={pkg.id} {...pkg} onViewPackage={onViewPackage} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Domestic */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">
          Featured Domestic Trips (India)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {domesticPackages.map((pkg) => (
            <PackageCard key={pkg.id} {...pkg} onViewPackage={onViewPackage} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            What Our Travelers Say
          </h2>
          <div className="relative max-w-4xl mx-auto">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollTestimonials('left')}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            
            <div className="overflow-hidden px-12">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${testimonialIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, idx) => (
                  <div key={idx} className="w-full flex-shrink-0 px-4">
                    <Card className="p-8 text-center">
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-foreground mb-4 italic text-lg">"{testimonial.text}"</p>
                      <p className="font-bold text-primary">{testimonial.name}</p>
                      <p className="text-muted-foreground">{testimonial.location}</p>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollTestimonials('right')}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
