import { useState } from 'react';
import { PackageCard } from '@/components/PackageCard';
import { PACKAGES } from '@/data/packages';
import { Button } from '@/components/ui/button';

interface DestinationsPageProps {
  onViewPackage: (id: string) => void;
}

export const DestinationsPage = ({ onViewPackage }: DestinationsPageProps) => {
  const [filter, setFilter] = useState<'all' | 'international' | 'domestic'>('all');

  const filteredPackages = PACKAGES.filter((pkg) => {
    if (filter === 'all') return true;
    return pkg.type === filter;
  });

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">
          Explore Our Destinations
        </h1>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <Button
            onClick={() => setFilter('all')}
            variant={filter === 'all' ? 'default' : 'outline'}
            className={filter === 'all' ? 'bg-primary text-primary-foreground' : ''}
          >
            All Packages
          </Button>
          <Button
            onClick={() => setFilter('international')}
            variant={filter === 'international' ? 'default' : 'outline'}
            className={filter === 'international' ? 'bg-primary text-primary-foreground' : ''}
          >
            International Trips
          </Button>
          <Button
            onClick={() => setFilter('domestic')}
            variant={filter === 'domestic' ? 'default' : 'outline'}
            className={filter === 'domestic' ? 'bg-primary text-primary-foreground' : ''}
          >
            Domestic Trips
          </Button>
        </div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredPackages.map((pkg) => (
            <PackageCard key={pkg.id} {...pkg} onViewPackage={onViewPackage} />
          ))}
        </div>
      </div>
    </div>
  );
};
