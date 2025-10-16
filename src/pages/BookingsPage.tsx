import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Plane, Hotel, Ship, Package } from 'lucide-react';

export const BookingsPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    service: '',
    destination: '',
    travelers: '',
    startDate: '',
    endDate: '',
    requirements: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Booking Inquiry Submitted!',
      description: 'Our team will contact you shortly with the best options.',
    });
    setFormData({
      service: '',
      destination: '',
      travelers: '',
      startDate: '',
      endDate: '',
      requirements: '',
    });
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-primary mb-4 text-center">
          Hotels & Flights Booking
        </h1>
        <p className="text-center text-muted-foreground mb-12">
          Let us help you find the perfect accommodations and flights for your journey
        </p>

        {/* Service Options */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer hover:border-primary">
            <Plane className="w-12 h-12 text-primary mx-auto mb-2" />
            <p className="font-semibold">Flights</p>
          </Card>
          <Card className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer hover:border-primary">
            <Hotel className="w-12 h-12 text-primary mx-auto mb-2" />
            <p className="font-semibold">Hotels</p>
          </Card>
          <Card className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer hover:border-primary">
            <Ship className="w-12 h-12 text-primary mx-auto mb-2" />
            <p className="font-semibold">Cruises</p>
          </Card>
          <Card className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer hover:border-primary">
            <Package className="w-12 h-12 text-primary mx-auto mb-2" />
            <p className="font-semibold">Packages</p>
          </Card>
        </div>

        {/* Booking Form */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Booking Inquiry Form</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="service">Service Required *</Label>
                <Select
                  required
                  value={formData.service}
                  onValueChange={(value) => setFormData({ ...formData, service: value })}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="flight">Flight</SelectItem>
                    <SelectItem value="hotel">Hotel</SelectItem>
                    <SelectItem value="cruise">Cruise</SelectItem>
                    <SelectItem value="package">Complete Package</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="destination">Destination *</Label>
                <Input
                  id="destination"
                  required
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  placeholder="Where do you want to go?"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="travelers">Number of Travelers *</Label>
                <Input
                  id="travelers"
                  type="number"
                  min="1"
                  required
                  value={formData.travelers}
                  onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                  className="mt-1"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="startDate">Start Date *</Label>
                  <Input
                    id="startDate"
                    type="date"
                    required
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="endDate">End Date *</Label>
                  <Input
                    id="endDate"
                    type="date"
                    required
                    value={formData.endDate}
                    onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="requirements">Specific Requirements</Label>
                <Textarea
                  id="requirements"
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  rows={5}
                  placeholder="Tell us about your preferences, special requests, budget range, etc."
                  className="mt-1"
                />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                Submit Inquiry
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
