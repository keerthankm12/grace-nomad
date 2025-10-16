import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

interface PackageCardProps {
  id: string;
  name: string;
  image: string;
  days: number;
  price: number;
  onViewPackage: (id: string) => void;
}

const formatIndianPrice = (price: number): string => {
  return `₹ ${price.toLocaleString('en-IN')}`;
};

export const PackageCard = ({ id, name, image, days, price, onViewPackage }: PackageCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
          {days} Days
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{name}</h3>
        <div className="flex items-center gap-2 text-muted-foreground mb-4">
          <Calendar className="w-4 h-4" />
          <span className="text-sm">{days} Days Tour</span>
        </div>
        <p className="text-2xl font-bold text-primary">{formatIndianPrice(price)}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button 
          onClick={() => onViewPackage(id)}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          View Package
        </Button>
      </CardFooter>
    </Card>
  );
};
